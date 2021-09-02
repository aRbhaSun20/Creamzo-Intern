import React from "react";
import "./style/style.css";
import Conatiner from "../../Components/ImageContainer_afterLogin/Conatiner";
import { useState } from "react";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function importAll(r) {
	return r.keys().map(r);
}
const images1 = importAll(
	require.context(
		"../../Components/ImageContainer_afterLogin/Image1/",
		false,
		/\.(png|jpe?g|svg|jpg)$/
	)
);
const images3 = importAll(
	require.context(
		"../../Components/ImageContainer_afterLogin/Image2/",
		false,
		/\.(png|jpe?g|svg|jpg)$/
	)
);
const images2 = importAll(
	require.context(
		"../../Components/ImageContainer_afterLogin/Image3/",
		false,
		/\.(png|jpe?g|svg|jpg)$/
	)
);
const images4 = importAll(
	require.context(
		"../../Components/ImageContainer_afterLogin/Image4/",
		false,
		/\.(png|jpe?g|svg|jpg)$/
	)
);
const images5 = importAll(
	require.context(
		"../../Components/ImageContainer_afterLogin/Image5/",
		false,
		/\.(png|jpe?g|svg|jpg)$/
	)
);

const HomeAfter = () => {
	// eslint-disable-next-line
	const [limit, setLimit] = useState(25);
	return (
		<div
			className="container1"
			style={{
				// maxHeight: `${limit * 9}vh`,
				// maxWidth: "80vw",
				paddingTop: "2em",
			}}
		>
			<div className="column1">
				{images1.map((image, i) => (
					<Conatiner
						image={image.default}
						key={i}
						height="100%"
						// height={Math.random() * limit * Math.random() + 12}
					/>
				))}
			</div>
			<div className="column2">
				{images2.map((image, i) => (
					<Conatiner
						image={image.default}
						key={i}
						height="100%"
						// height={Math.random() * limit * Math.random() + 12}
					/>
				))}
			</div>
			<div className="column3">
				{images3.map((image, i) => (
					<Conatiner
						image={image.default}
						key={i}
						height="100%"
						// height={Math.random() * limit * Math.random() + 12}
					/>
				))}
			</div>
			<div className="column4">
				{images4.map((image, i) => (
					<Conatiner
						image={image.default}
						key={i}
						height="100%"
						// height={Math.random() * limit * Math.random() + 12}
					/>
				))}
			</div>
			<div className="column5">
				{images5.map((image, i) => (
					<Conatiner
						image={image.default}
						key={i}
						height="100%"
						// height={Math.random() * limit * Math.random() + 12}
					/>
				))}
			</div>
			<div
				className="add"
				style={{ position: "fixed", bottom: "5.5em", right: "2em" }}
			>
				<Link to="/boardCreation">
					<IconButton style={{ outline: "none", backgroundColor: "#dedede" }}>
						<Add style={{ fontSize: "2vw", color: "black" }} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default HomeAfter;
