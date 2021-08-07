import React from "react";
import "../../Components/Discover/style/style.css";
import Grid from "@material-ui/core/Grid";
import DiscoverItem from "../../Components/Discover/DiscoverItem";
import defaultImage from "./assets/defaultExplore.jpg";

const Discover = () => {
	let arr = [
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Animals" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		{ img: { defaultImage }, name: "Travel" },
		// { img: { defaultImage }, name: "Travel" },
		// { img: { defaultImage }, name: "Travel" },
		// { img: { defaultImage }, name: "Travel" },
	];
	return (
		<div className="discover-container" style={{ height: "auto" }}>
			<h1 className="title-item">Discover Creamzo</h1>
			<div style={{ display: "grid", gridTemplateRows: "repeat(6,1fr)" }}>
				<Grid className="grid" container>
					{arr.map((item, ind) => {
						return <DiscoverItem key={ind} img={item.img} name={item.name} />;
					})}
				</Grid>
			</div>
		</div>
	);
};
export default Discover;
