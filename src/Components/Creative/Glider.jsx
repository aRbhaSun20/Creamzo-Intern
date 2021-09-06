import React from "react";
import style from "./style/Creativestyle.module.css";
// import { Slide } from "react-slideshow-image";
import Carousel from "./Carousel.jsx";

function importAll(r) {
	return r.keys().map(r);
}
const images = importAll(
	require.context("./assets/", false, /\.(png|jpe?g|svg|jpg)$/)
);

// const style
const Glider = () => {
	return (
		<React.Fragment>
			<div
				style={{
					height: "100vh",
					justifyContent: "flex-start",
					alignItems: "center",
					width: "100vw",
				}}
			>
				<Carousel show={3}>
					{images.map((image) => (
						<div>
							<div style={{ padding: 8 }} className={style.imageContainer}>
								<img
									src={image.default}
									alt="placeholder"
									style={{ width: "100%", height: "370px" }}
									className={style.creativeImage}
								/>
								<div className={style.creativeName}>Name</div>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</React.Fragment>
	);
};

export default Glider;
