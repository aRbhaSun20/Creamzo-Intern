import React from "react";
import "./style/style.css";
import Conatiner from "../../Components/ImageContainer_afterLogin/Conatiner";
import { useState } from "react";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import img1 from "../../Components/About/assets/img/art.jpg";
import img2 from "../../Components/About/assets/img/authors.jpg";
import img3 from "../../Components/About/assets/img/quotes.jpg";
import img from "../../Components/About/assets/img/diy.jpg";

const HomeAfter = () => {
	// eslint-disable-next-line
	const [limit, setLimit] = useState(25);
	const images = [img, img1, img2, img3, img2];
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			// Generate random number
			var j = Math.floor(Math.random() * Math.random() * (i + 1));

			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		return array;
	}
	return (
		<div
			className="container1"
			style={{
				maxHeight: `${limit * 9}vh`,
				maxWidth: "80vw",
				width: "90%",
				paddingTop: "2em",
			}}
		>
			{new Array(5)
				.fill("")
				.map(() =>
					shuffleArray(images).map((image, i) => (
						<Conatiner
							image={image}
							key={i}
							height={Math.random() * limit * Math.random() + 12}
						/>
					))
				)}
			<div
				className="add"
				style={{ position: "fixed", bottom: "2.5em", right: "1em" }}
			>
				<Link to="/boardCreation">
					<IconButton style={{ outline: "none", backgroundColor: "#dedede" }}>
						<Add style={{ fontSize: "1.8vw", color: "black" }} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};

export default HomeAfter;
