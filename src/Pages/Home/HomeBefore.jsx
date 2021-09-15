import React, { useState } from "react";

import ImageContainer from "../../Components/ImageContainer_beforeLogin/ImageContainer";
import { Button } from "@material-ui/core";
import "./style/style.css";
import img from "../../Components/About/assets/img/art.jpg";
import img1 from "../../Components/About/assets/img/diy.jpg";
import img2 from "../../Components/About/assets/img/dog.jpg";
import img3 from "../../Components/About/assets/img/quotes.jpg";

const HomeBefore = () => {
	let arr = [
		{
			imgPath: img,
			title: "title1",
			value: 10,
		},
		{
			imgPath: img1,
			title: "title2",
			value: 9,
		},
		{
			imgPath: img2,
			title: "title3",
			value: 8,
		},
		{
			imgPath: img3,
			title: "title4",
			value: 7,
		},
		{
			imgPath: img,
			title: "title5",
			value: 8,
		},
		{
		  imgPath: img3,
		  title: "title6",
		  value: 9,
		},
		// {
		//   imgPath: img3,
		//   title: "title4",
		//   value: 7,
		// },
		// {
		//   imgPath: img,
		//   title: "title5",
		//   value: 8,
		// },
		// {
		//   imgPath: img3,
		//   title: "title6",
		//   value: 9,
		// },
		// {
		//   imgPath: img3,
		//   title: "title6",
		//   value: 9,
		// },
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
							bottom: `${ele.value}rem`,
							outline: "none",
						}}
						onMouseEnter={() => {
							setTitle(ele.title);
						}}
					>
						<ImageContainer imgPath={ele.imgPath} />
					</Button>
				))}
			</div>
			<div className="title">{title}</div>
		</React.Fragment>
	);
};

export default HomeBefore;
