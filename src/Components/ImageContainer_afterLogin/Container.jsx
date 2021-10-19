import { Button, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Popover } from "@material-ui/core";

import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";

import {
	AddCircle,
	AddCircleOutline,
	ArrowUpward,
	Share,
} from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import "./style/style.css";
import { PIN_ACTIONS, useCurrentPin, usePin } from "../../Context/PinsContext";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";

const Container = ({ data, height, ...props }) => {
	let history = useHistory();

	const [opacity, setOpacity] = useState(0);
	const [errorHandle, setErrorhandle] = useState(false);
	const [Collections, setCollections] = useState(null);
	const [anchor, setAnchor] = useState(null);

	const [, setPinCurrData] = useCurrentPin();
	const [, refetch] = usePin();
	const user = JSON.parse(localStorage.getItem("creamzoUser"));

	useEffect(() => {
		if (typeof user !== undefined && Array.isArray(user?.collections)) {
			if (user.collections.includes(data._id)) {
				setCollections(true);
			} else setCollections(false);
		}
	}, [user, user?.collections, data]);

	// const [addColl, setaddColl] = useState(true);

	const openPopover = (event) => {
		setAnchor(event.currentTarget);
	};

	return (
		<div
			id={data._id}
			className="imglogin"
			style={{
				position: "relative",
				height: { height },
				display: errorHandle ? "none" : null,
			}}
			onMouseEnter={(e) => {
				e.preventDefault();
				setOpacity(1);
			}}
			onMouseLeave={(e) => {
				e.preventDefault();
				setOpacity(0);
			}}
		>
			<img
				src={data?.imgUrl}
				alt=""
				className="imgCont"
				style={{ borderRadius: "1em", height: height }}
				onError={() => setErrorhandle(true)}
				onClick={() => {
					setPinCurrData({ type: PIN_ACTIONS.PINS_CLICK, payload: data });
					history.push("/boardDisplay");
				}}
			/>

			{opacity ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						position: "absolute",
						justifyContent: "center",
						alignItems: "center",
						top: "0",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "90%",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<IconButton
							variant="contained"
							style={{
								borderRadius: "1em",
								outline: "none",
							}}
							name="favourite"
						>
							{typeof data?.likes.find((ele) => ele === user.creamzoId) !==
							"undefined" ? (
								<FavoriteIcon
									onClick={() => {
										if (user?.creamzoId && data?._id)
											axiosSendRequest(AXIOS_ACTIONS.PUT, `dislikePin`, {
												creamzoId: `${user?.creamzoId}`,
												id: `${data._id}`,
											}).then((res) => {
												console.log(res);
												refetch();
											});
									}}
									style={{
										color: "red",
										borderColor: "white",
										fontSize: "1.5rem",
									}}
								/>
							) : (
								<FavoriteBorderIcon
									onClick={() => {
										if (user?.creamzoId && data?._id)
											axiosSendRequest(AXIOS_ACTIONS.PUT, `likePin`, {
												creamzoId: `${user?.creamzoId}`,
												id: `${data._id}`,
											}).then((res) => {
												console.log(res);
												refetch();
											});
									}}
									style={{
										color: "white",
										borderColor: "white",
										fontSize: "1.5rem",
									}}
								/>
							)}
						</IconButton>
						<IconButton
							variant="contained"
							style={{
								borderRadius: "1em",
								outline: "none",
							}}
							name="addcollection"
						>
							{Collections ? (
								<AddCircle
									onClick={() => {
										console.log("removing", data._id);
										axiosSendRequest(AXIOS_ACTIONS.POST, `removeCollection`, {
											creamzoId: user?.creamzoId,
											id: `${data._id}`,
										}).then((res) => {
											console.log(res);
											setCollections(false);

											localStorage.setItem(
												"creamzoUser",
												JSON.stringify({
													...user,
													collections: res?.collections,
												})
											);

											refetch();
										});
									}}
									style={{
										color: "white",
										borderColor: "white",
										fontSize: "1.5rem",
									}}
								/>
							) : (
								<AddCircleOutline
									onClick={() => {
										console.log("adding", data._id);
										axiosSendRequest(AXIOS_ACTIONS.POST, `addCollection`, {
											creamzoId: `${user?.creamzoId}`,
											id: `${data._id}`,
										}).then((res) => {
											console.log(res);

											setCollections(true);

											localStorage.setItem(
												"creamzoUser",
												JSON.stringify({
													...user,
													collections: res?.collections,
												})
											);

											refetch();
										});
									}}
									style={{
										color: "white",
										borderColor: "white",
										fontSize: "1.5rem",
									}}
								/>
							)}
						</IconButton>
					</div>
				</div>
			) : null}

			{opacity ? (
				<div
					style={{
						display: "flex",
						width: "100%",
						position: "absolute",
						justifyContent: "center",
						alignItems: "center",
						bottom: "1rem",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "85%",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							style={{
								borderRadius: "1em",
								// position: "relative",
								width: props?.children ? "5rem" : "6rem",
								// bottom: "0.5rem",
								outline: "none",
								textTransform: "capitalize",
								// fontSize: ".7rem",
							}}
						>
							<ArrowUpward
								style={{
									transform: "rotate(45deg)",
									// marginRight: ".5em",
									width: "50%",
									fontSize: "1rem",
								}}
							/>
							<a
								href={`https://${
									data.websiteUrl.split("https://")[
										data.websiteUrl.split("https://").length - 1
									]
								}/`}
								rel="noreferrer"
								target="_blank"
							>
								Link
							</a>
						</Button>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: props?.children ? "6rem" : "4rem",
							}}
						>
							{props?.children ? props.children(data._id) : null}

							<IconButton
								onClick={() => {
									axiosSendRequest(
										AXIOS_ACTIONS.GET,
										`addDownloads/${data?._id}/${data?.creamzoId}`,
										null
									).then((data) => {
										refetch();
									});
								}}
								name="download"
								style={{ outline: "none", padding: "4px" }}
							>
								<GetAppIcon
									onClick={() => {
										saveAs(data.imgUrl, "image.jpg");
									}}
									style={{
										color: "white",
										fontSize: "1.2rem",
										position: "relative",
										bottom: "0em",
									}}
								/>
							</IconButton>
							<IconButton
								onClick={() => {
									axiosSendRequest(
										AXIOS_ACTIONS.PUT,
										`addShares/${data?._id}/${data?.creamzoId}`,
										null
									).then((res) => {
										refetch();
									});
								}}
								name="share"
								style={{ outline: "none", padding: "4px" }}
							>
								<Share
									style={{
										color: "white",
										fontSize: "1.2rem",
										position: "relative",
										bottom: "0em",
									}}
									onClick={openPopover}
								/>
								<Popover
									open={Boolean(anchor)}
									anchorEl={anchor}
									anchorOrigin={{
										vertical: "center",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "center",
										horizontal: "left",
									}}
									onClose={() => {
										setAnchor(null);
									}}
								>
									<div style={{ padding: "0.3rem" }}>
										<h6>share</h6>
										<FacebookShareButton url={data.imgUrl}>
											<FacebookIcon
												style={{ padding: "0.2rem" }}
												size={32}
												round={true}
											/>
										</FacebookShareButton>

										<TwitterShareButton image={data.imgUrl}>
											<TwitterIcon
												style={{ padding: "0.2rem" }}
												size={32}
												round={true}
											/>
										</TwitterShareButton>

										<WhatsappShareButton url={data.imgUrl}>
											<WhatsappIcon
												style={{ padding: "0.2rem" }}
												size={32}
												round={true}
											/>
										</WhatsappShareButton>
									</div>
								</Popover>
							</IconButton>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Container;
