import { Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
	AddCircleOutline,
	ArrowUpward,
	FavoriteBorder,
	Share,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./style/style.css";
import { PIN_ACTIONS, useCurrentPin, usePin } from "../../Context/PinsContext";
import { useSnackbar } from "notistack";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";

const Conatiner = ({ data, height }) => {
	const [opacity, setOpacity] = useState(0);
	const [errorHandle, setErrorhandle] = useState(false);
	// eslint-disable-next-line
	const [pinCurrData, setPinCurrData] = useCurrentPin();
	// eslint-disable-next-line
	const [pinsData, refetch] = usePin();
	const { enqueueSnackbar } = useSnackbar();

	let history = useHistory();
	return (
		<div
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
							onClick={() => {
								console.log(`addDownloads/${data?._id}/%${data?.creamzoId}`);
								axiosSendRequest(
									AXIOS_ACTIONS.PUT,
									`addDownloads/${data?._id}/${data?.creamzoId.split("#")[1]}`,
									null
								).then((data) => {
									console.log(data);
									refetch();
									enqueueSnackbar("Favourite Count Increased", {
										variant: "success",
									});
								});
							}}
						>
							<FavoriteBorder
								style={{
									color: "white",
									fontSize: "1.5rem",
								}}
							/>
						</IconButton>
						<IconButton
							variant="contained"
							style={{
								borderRadius: "1em",
								outline: "none",
							}}
							onClick={() => {
								axiosSendRequest(AXIOS_ACTIONS.POST, `addCollection`, {
									creamzoId: data?.creamzoId,
									id: data?._id,
								}).then((data) => {
									refetch();
									console.log(data);
									enqueueSnackbar("Added to Collection", {
										variant: "success",
									});
								});
							}}
						>
							<AddCircleOutline
								style={{ color: "white", fontSize: "1.5rem" }}
							/>
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
								width: "6rem",
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
							<a href={data.imgUrl}>Link</a>
						</Button>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								width: "4rem",
							}}
						>
							<IconButton
								onClick={() => {
									axiosSendRequest(
										AXIOS_ACTIONS.PUT,
										`addDownloads/${data?._id}/${
											data?.creamzoId.split("#")[1]
										}`,
										null
									).then((data) => {
										console.log(data);
										refetch();
									});
								}}
								style={{ outline: "none", padding: "4px" }}
							>
								<GetAppIcon
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
										`addShares/${data?._id}/${data?.creamzoId.split("#")[1]}`,
										null
									).then((data) => {
										console.log(data);
										refetch();
									});
								}}
								style={{ outline: "none", padding: "4px" }}
							>
								<Share
									style={{
										color: "white",
										fontSize: "1.2rem",
										position: "relative",
										bottom: "0em",
									}}
								/>
							</IconButton>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Conatiner;
