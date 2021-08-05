import React from "react";

import "./style/style.css";

import ImageContainer from "../../Components/ImageContainer_beforeLogin/ImageContainer";

const Home = () => {
	let arr = [10, 9, 8, 7, 8, 9, 10, 9, 8, 7];
	let arr2 = [10, 9, 8, 7, 8];
	return (
		<React.Fragment>
<<<<<<< HEAD
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
=======
			<div
				className="image-conatiner"
				style={{ width: "100%", height: "90vh"}}
			>
			</div>
>>>>>>> a1b65ed9772917b0dae191497de978ef10a59a31
		</React.Fragment>
	);
};

export default Home;
