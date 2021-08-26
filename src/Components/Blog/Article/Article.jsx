import React, { useState } from "react";
import "./styles/styles.css";
import blogitemimage from "./styles/blogitemimage.jpg";
import { Link } from "react-router-dom";

function Article() {
	// eslint-disable-next-line
	const [dummyHeading, setdummyHeading] = useState("Dummy Heading");
	// eslint-disable-next-line
	const [secondaryText, setsecondaryText] = useState(
		"A small river named Duden flows by their place and supplies it with the necessary regelialia."
	);
	// eslint-disable-next-line
	const [buttonurl, setbuttonurl] = useState("/articleitem");
	return (
		<div>
			<img className="article-image" src={blogitemimage} alt="article" />
			<h1 style={{ paddingLeft: "1rem", fontSize: "1.5rem", width: "15rem" }}>
				{dummyHeading}
			</h1>
			<h4 className="secondary-imageitem-text">{secondaryText}</h4>
			<Link
				className="readmore-button"
				styles={{ fontSize: "1rem" }}
				to={buttonurl}
			>
				READ MORE
			</Link>
		</div>
	);
}

export default Article;
