import React, { useState } from "react";

import "./style/style.css";

import ImageContainer from "../../Components/ImageContainer_beforeLogin/ImageContainer";
import { Button } from "@material-ui/core";

const Home = () => {
	let arr = [
		{ value: 10, title: "title1" },
		{ value: 9, title: "title2" },
		{ value: 8, title: "title3" },
		{ value: 7, title: "title4" },
		{ value: 8, title: "title5" },
		{ value: 9, title: "title6" },
		{ value: 10, title: "title7" },
		{ value: 9, title: "title8" },
		{ value: 8, title: "title9" },
		{ value: 7, title: "title0" },
	];
	
	const [title, setTitle] = useState("");
	return (
		<React.Fragment>
			<div className="container">
				{arr.map((ele, i) => (
					<Button
						key={i}
						style={{
							position: "relative",
							bottom: `${ele.value}em`,
						}}
						onMouseEnter={() => {
							setTitle(ele.title);
						}}
					>
						<ImageContainer />
					</Button>
				))}
			</div>
			<div className="title">{title}</div>
		</React.Fragment>
	);
};

export default Home;
