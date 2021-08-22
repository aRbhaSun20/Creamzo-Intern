import React, { useEffect, useState } from "react";
import "./../../styles/Card.css";
import axios from "axios";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ShareIcon from "@material-ui/icons/Share";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useStateValue } from "./../../StateProvider";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { NavLink } from "react-router-dom";
import { downloadUrl, url } from "../../utils/api";
import { handleLike, handleCollect } from "../../utils/pin";
import ShareCard from "./ShareCard";
import { errorToast, successToast } from "../../utils/toast";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/";

function Card({ data, user, from, id, showDelete }) {
	const [isLiked, setIsLiked] = useState(false);
	const [showShareDiv, setShowShareDiv] = useState(false);
	const [isCollected, setIsCollected] = useState(false);
	// eslint-disable-next-line
	const [{ allPins, myCollections, myLikes }, dispatch] = useStateValue();
	const shareUrl = `${process.env.REACT_APP_SHARE_URL}/${data?._id}`;

	useEffect(() => {
		const getPin = data?.likes?.find((item) => item === user[0]?.creamzoId);
		const getCollect = user[0]?.collections?.find((item) => item === data?._id);
		if (getPin) {
			setIsLiked(true);
		} else {
			setIsLiked(false);
		}
		if (getCollect) {
			setIsCollected(true);
		} else {
			setIsCollected(false);
		}
		// eslint-disable-next-line
	}, [dispatch, myCollections, myLikes]);

	const handleClickLike = async () => {
		if (isLiked) {
			setIsLiked(false);
			if (from === "likes" && id === user[0]?.creamzoId) {
				dispatch({
					type: "DISLIKE",
					payload: data._id,
				});
			}
			const resp = await handleLike(user[0]?.creamzoId, data._id, "dislikePin");
			if (resp) {
				dispatch({
					type: "ALL_PINS",
					payload: resp.allPins,
				});
				dispatch({
					type: "UPDATE_ACCOUNT",
					payload: resp.user,
				});
			} else setIsLiked(true);
		} else {
			setIsLiked(true);
			const resp = await handleLike(user[0]?.creamzoId, data._id, "likePin");
			if (resp) {
				dispatch({
					type: "ALL_PINS",
					payload: resp.allPins,
				});
				dispatch({
					type: "UPDATE_ACCOUNT",
					payload: resp.user,
				});
			} else setIsLiked(false);
		}
	};

	const handleClickCollect = async () => {
		console.log(id, user[0]);
		if (isCollected) {
			setIsCollected(false);
			if (from === "collections" && id === user[0]?.creamzoId)
				dispatch({
					type: "REMOVE_FROM_COLLECTIONS",
					payload: data._id,
				});
			const resp = await handleCollect(
				user[0]?.creamzoId,
				data._id,
				"removeCollection"
			);
			if (resp) {
				setIsCollected(false);
				dispatch({
					type: "UPDATE_ACCOUNT",
					payload: resp,
				});
			} else setIsCollected(true);
		} else {
			setIsCollected(true);
			const resp = await handleCollect(
				user[0]?.creamzoId,
				data._id,
				"addCollection"
			);
			if (resp) {
				dispatch({
					type: "UPDATE_ACCOUNT",
					payload: resp,
				});
			} else setIsCollected(false);
		}
	};

	const handleDownload = async () => {
		const find = data.downloads.find((item) => item === user[0]?.creamzoId);
		if (data?.creamzoId !== user[0]?.creamzoId && !find) {
			await axios
				.get(`${url}/pin/addDownloads/${data._id}/${user[0].creamzoId}`)
				.then((newRes) => {
					dispatch({ type: "PIN_DETAILS", payload: newRes.data });
				})
				.catch((e) => console.log(e.message));
		} else {
			return;
		}
	};

	const handleShareLinkClick = async () => {
		setShowShareDiv(!showShareDiv);
		const find = data.shares.find((item) => item === user[0]?.creamzoId);
		if (data?.creamzoId !== user[0]?.creamzoId && !find) {
			await axios
				.get(`${url}/pin/addShares/${data._id}/${user[0].creamzoId}`)
				.then((newRes) => {
					dispatch({ type: "PIN_DETAILS", payload: newRes.data });
				})
				.catch((e) => console.log(e.message));
		} else {
			return;
		}
	};

	const handleCardClick = () => {
		if (user.length < 1) dispatch({ type: "SHOW_LOGIN" });
		else return;
	};

	const handleDelete = () => {
		axios
			.post(`${url}/pin/delete`, data)
			.then((res) => {
				dispatch({
					type: "ALL_PINS",
					payload: res.data,
				});
				dispatch({
					type: "DELETE_PIN",
					payload: data._id,
				});
				successToast("Pin deleted successfully.");
			})
			.catch((e) => {
				console.log(e.message);
				errorToast("Someething went wrong. Please try again later.");
			});
	};

	return (
		<>
			{data ? (
				<div className={`card_container`} onClick={handleCardClick}>
					<img
						effect="blur"
						src={data?.imgUrl}
						alt={data?._id}
						className={`card_img`}
					/>
					{user?.length > 0 && user[0]?.verified === "YES" ? (
						<div className={`img_overlay`} value="outer">
							<div className="card_top">
								{!isLiked ? (
									<FavoriteBorderIcon
										style={{ fontSize: "3rem", cursor: "pointer" }}
										onClick={handleClickLike}
									/>
								) : (
									<FavoriteIcon
										style={{
											fontSize: "3rem",
											cursor: "pointer",
											color: "red",
										}}
										onClick={handleClickLike}
									/>
								)}
								{showDelete ? (
									<div className="delete_btn" onClick={handleDelete}>
										<DeleteForeverIcon fontSize="large" />
									</div>
								) : null}
								{!isCollected ? (
									<AddCircleOutlineIcon
										style={{ fontSize: "3rem", cursor: "pointer" }}
										onClick={handleClickCollect}
									/>
								) : (
									<AddCircleIcon
										style={{
											fontSize: "3rem",
											cursor: "pointer",
											color: "red",
										}}
										onClick={handleClickCollect}
									/>
								)}
							</div>
							<NavLink
								exact
								className="click"
								to={`/pinDetails/${data?._id}`}
							></NavLink>

							<div className="card_bottom">
								<a
									href={`${data?.websiteUrl}`}
									style={{
										textDecoration: "none",
										alignSelf: "center",
									}}
								>
									<div className="card_link">
										<CallMadeIcon fontSize="large" />
										<p>Link</p>
									</div>
								</a>

								<div className="card_inner">
									<div
										className="button_cover"
										onClick={() => setShowShareDiv(!showShareDiv)}
									>
										<ShareIcon fontSize="large" />
									</div>
									<a href={`${downloadUrl}/${data?.cloudinaryId}`}>
										<div className="button_cover" onClick={handleDownload}>
											<GetAppIcon fontSize="large" />
										</div>
									</a>
								</div>
							</div>
							<div
								className="share_div"
								style={
									!showShareDiv ? { display: "none" } : { display: "flex" }
								}
							>
								<ShareCard
									url={shareUrl}
									imgUrl={data?.imgUrl}
									title={data?.title}
									onclick={() => handleShareLinkClick()}
								/>
							</div>
						</div>
					) : null}
				</div>
			) : null}
		</>
	);
}

export default Card;
