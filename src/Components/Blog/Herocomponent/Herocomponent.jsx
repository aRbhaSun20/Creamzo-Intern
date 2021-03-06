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
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts. Separated they
					live in Bookmarksgrove right at the coast of the Semantics, a large
					language ocean.
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
