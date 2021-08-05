import React from "react";

import "./style/style.css";

import ImageContainer from "../../Components/ImageContainer_beforeLogin/ImageContainer";

const Home = () => {
	let arr = [10, 9, 8, 7, 8, 9, 10, 9, 8, 7];
	let arr2 = [10, 9, 8, 7, 8];
	return (
		<React.Fragment>
			<div className="container">
				{arr.map((ele, i) => (
					<div
						key={i}
						style={{
							position: "relative",
							bottom: `${ele}em`,
						}}
					>
						<ImageContainer />
					</div>
				))}
			</div>
			<div className="title"></div>
		</React.Fragment>
	);
};

export default Home;
