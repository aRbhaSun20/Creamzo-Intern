import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

import "./styles/styles.css";
import dummyimage from "./styles/blogitemimage.jpg";
import { Link } from "react-router-dom";

function Blogitem() {
	// eslint-disable-next-line
	const [dummyHeading, setdummyHeading] = useState("Dummy heading");
	// eslint-disable-next-line
	const [dummyDate, setdummyDate] = useState("02/08/2021");
	// eslint-disable-next-line
	const [facebookUrl, setfacebookUrl] = useState("https://www.facebook.com");
	// eslint-disable-next-line
	const [twitterUrl, settwitterUrl] = useState("https://www.twitter.com");
	// eslint-disable-next-line
	const [instagramUrl, setinstagramUrl] = useState("https://www.instagram.com");
	// eslint-disable-next-line
	const [categorytype, setcategorytype] = useState("Art");

	return (
		<div style={{ display: "flex", margin: "3rem" }}>
			<img
				src={dummyimage}
				alt="blog"
				style={{
					height: "25rem",
					margin: "1.8rem",
					objectFit: "contain",
					borderRadius: "10px",
				}}
			/>

			<div style={{ width: "50%" }}>
				<div style={{ height: "25rem", padding: "1.5rem" }}>
					<h3 className={"dateopacity"}>{categorytype}</h3>
					<h1 style={{ fontSize: "3rem" }}>{dummyHeading}</h1>

					<div className="iconspack">
						<Link to={facebookUrl} style={{ color: "black", fontSize: 45 }}>
							<Facebook />
						</Link>
						<Link to={twitterUrl} style={{ color: "black", fontSize: 45 }}>
							{" "}
							<Twitter />
						</Link>
						<Link to={instagramUrl} style={{ color: "black", fontSize: 45 }}>
							<Instagram />
						</Link>
					</div>

					<h6 className="dateopacity">{dummyDate}</h6>
				</div>
			</div>
		</div>
	);
}

export default Blogitem;
