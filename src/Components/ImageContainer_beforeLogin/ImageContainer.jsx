import React from "react";

import "./style/style.css";

const ImageContainer = ({ imgPath }) => {
	return (
		<React.Fragment>
			<div className="image">
				<img
					src={imgPath}
					alt="pictures"
				/>
			</div>
		</React.Fragment>
	);
};

export default ImageContainer;
