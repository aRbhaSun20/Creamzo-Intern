import React from "react";
import OverView from "../../Components/OverView/OverView";
import Anyone from "../../Components/Anyone/Anyone";
import Making from "../../Components/Making/Making";
import Carousel from "../../Components/OverVIew_Carousel/Carousel";

const OverViewPage = () => {
	return (
		<div>
			<Anyone />
			<Making />
			<Carousel />
			<OverView />
		</div>
	);
};

export default OverViewPage;
