import React, { useState } from "react";

import ImageContainer from "../../Components/ImageContainer_beforeLogin/ImageContainer";
import { Button } from "@material-ui/core";
import "./style/style.css";

const HomeBefore = () => {
	let arr = [
		{
			imgPath: "https://picsum.photos/200/300?image=1050",
			title: "title1",
			value: 10,
		},
		{
			imgPath: "https://picsum.photos/400/400?image=1039",
			title: "title2",
			value: 9,
		},
		{
			imgPath: "https://picsum.photos/400/400?image=1080",
			title: "title3",
			value: 8,
		},
		{
			imgPath: "https://picsum.photos/200/200?image=997",
			title: "title4",
			value: 7,
		},
		{
			imgPath: "https://picsum.photos/500/400?image=287",
			title: "title5",
			value: 8,
		},
		{
			imgPath: "https://picsum.photos/400/500?image=955",
			title: "title6",
			value: 9,
		},
		{
			imgPath: "https://picsum.photos/200/300?image=916",
			title: "title7",
			value: 10,
		},
		{
			imgPath: "https://picsum.photos/300/300?image=110",
			title: "title8",
			value: 9,
		},
		{
			imgPath: "https://picsum.photos/300/300?image=206",
			title: "title9",
			value: 8,
		},
		{
			imgPath: "https://picsum.photos/300/300?image=110",
			title: "title0",
			value: 7,
		},
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
