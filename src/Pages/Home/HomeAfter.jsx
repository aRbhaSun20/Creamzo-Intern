import React from "react";
import "./style/style.css";
import Conatiner from "../../Components/ImageContainer_afterLogin/Conatiner";
import { useState } from "react";
import { Add } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
const HomeAfter = () => {
	// eslint-disable-next-line
	const [limit, setLimit] = useState(25);
	const images = [
		"https://picsum.photos/200/300?image=1050",
		"https://picsum.photos/400/400?image=1039",
		"https://picsum.photos/400/400?image=1080",
		"https://picsum.photos/200/200?image=997",
		"https://picsum.photos/500/400?image=287",
	];
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
				maxHeight: `${limit * 7.5}vh`,
				maxWidth: "90vw",
				width: "90%",
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
				style={{ position: "fixed", bottom: "6em", right: "1.5em" }}
			>
				<IconButton style={{ outline: "none", backgroundColor: "#dedede" }}>
					<Add style={{ fontSize: "3rem", color: "black" }} />
				</IconButton>
			</div>
		</div>
	);
};

export default HomeAfter;
