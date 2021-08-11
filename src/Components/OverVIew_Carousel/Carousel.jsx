import React from "react";
import picture from "./assets/Web 1920 – 1.png";
import "./style/style.css";
const Carousel = () => {
	return (
		<React.Fragment>
			<div className="OverviewCarousalContainer ">
				<div className="imageCOrousalCOnatiner" style={{ display: "flex" }}>
					<img id="c" className="imageContainerCarousal" src={picture} alt="" />
					<img
						id="cc"
						className="imageContainerCarousal"
						src={picture}
						alt=""
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Carousel;
