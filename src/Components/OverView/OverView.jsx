import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img1 from './assets/img1.jpg';
import img2 from './assets/img2 .jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg'
import { style } from "@material-ui/system";
const styles = {
	imgContainer: {
		width: "18em",
		height: "22em",
		backgroundColor: "grey",
		position: "relative",
		top: "3em",
		borderRadius: ".5em",
		color: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: ".7",
	},
	imgContainerStatic: {
		width: "18em",
		height: "22em",
		backgroundColor: "grey",
		borderRadius: ".5em",
		color: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		opacity: ".9",
	},
	overViewImage:{
		width:"100%"
	}
};

const OverView = () => {
	return (
		<React.Fragment>
			<div
				className="continer"
				style={{
					display: "grid",
					width: "75%",
					height: "95vh",
					justifyContent: "center",
					alignItems: "center",
					alignContent: "center",
					margin: "auto",
					gridTemplateColumns: "1fr 1fr",
					gridGap: "2em",
					position: "relative",
					left: "4em",
				}}
			>
				<div className="text" style={{ display: "grid", height: "18em" }}>
					<Typography style={{ fontWeight: "bolder", fontSize: "2.4rem" }}>
						OverView Content
					</Typography>
					<Typography
						variant="subtitle1"
						style={{ textAlign: "justify", width: "85%" }}
					>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
						repellat maxime repudiandae voluptatem libero culpa quos dignissimos
						illum impedit! Odit obcaecati quidem natus suscipit earum accusamus
						quas assumenda in ullam?
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							backgroundColor: "black",
							width: "15em",
							height: "3.5em",
						}}
					>
						Checkout More
						<ArrowForwardIcon style={{ position: "relative", left: ".5em" }} />
					</Button>
				</div>
				<div
					className="img-conatiner"
					style={{
						display: "grid",
						gridTemplateColumns: "auto auto",
						gridGap: "2em",
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						marginLeft: "2em",
					}}
				>
					<div className="box" style={styles.imgContainer}>
						<img className={style.overViewImage} src={img1} alt="" />
					</div>
					<div className="box" style={styles.imgContainerStatic}>
						<img className={style.overViewImage} src={img2} alt="" />
					</div>
					<div className="box" style={styles.imgContainer}>
						<img className={style.overViewImage} src={img3} alt="" />
					</div>
					<div className="box" style={styles.imgContainerStatic}>
						<img className={style.overViewImage} src={img4} alt="" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OverView;
