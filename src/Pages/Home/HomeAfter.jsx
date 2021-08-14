import React from "react";
import "./style/style.css";
import Conatiner from "../../Components/ImageContainer_afterLogin/Conatiner";
const HomeAfter = () => {
	const images = [
		"https://picsum.photos/200/300?image=1050",
		"https://picsum.photos/400/400?image=1039",
		"https://picsum.photos/400/400?image=1080",
		"https://picsum.photos/200/200?image=997",
		"https://picsum.photos/500/400?image=287",
		"https://picsum.photos/400/500?image=955",
		"https://picsum.photos/200/300?image=916",
		"https://picsum.photos/300/300?image=110",
		"https://picsum.photos/300/300?image=206",
		"https://picsum.photos/300/300?image=110",
		"https://picsum.photos/300/300?image=206",
		"https://picsum.photos/300/300?image=206",
	];
	return (
		<div
			className="container1"
			style={{
				maxHeight: "150vh",
			}}
		>
			{images.map((image, i) => (
				<Conatiner
					image={image}
					key={i}
					height={(Math.random() * 50) / 2 + 12}
				/>
			))}
		</div>
	);
};

export default HomeAfter;
