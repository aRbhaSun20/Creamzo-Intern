import React from "react";
import "./styles/styles.css";
// eslint-disable-next-line
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// eslint-disable-next-line
import herobackground from "./styles/herobackground.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
function Herocomponent() {
	return (
		<div className="herolanding">
			<div className="hero-image">
				<div className="spacing"></div>
				<h6 className="secondary-text">Hello! Welcome to</h6>
				<h1 className="main-text">Creamzo blog</h1>
				<p className="secondary-text">
				 Get a giant cookie and hot chocolate with marshmallows. Sit on your favorite couch.
				 We are here to share a lot of things that are going to make you happy. 
				 What’s your niche? Art, DIY, Photography, Culture, Fashion, Hobbies, 
				 Food and Drink, Travel, Environment, Home Decor, Pets or Technology? We got you covered! 
				 Happy reading.

				</p>
				<br />
				
				<br />
				<Link className="articles-button" to="/articles">
					<Button>All our articles</Button>
				</Link>
			</div>
		</div>
	);
}

export default Herocomponent;
