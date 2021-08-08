import { Typography } from "@material-ui/core";
import React from "react";

const Carousel = () => {
	return (
		<React.Fragment>
			<div className="conatainer" style={{ width: "auto", height: "80vh", display:"flex"}}>
				<Typography
					variant="h5"
					style={{
						display: "flex",
						width: "100%",
                        height:"100%",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					moving carousel
				</Typography>
			</div>
		</React.Fragment>
	);
};

export default Carousel;
