import React from "react";

import style from "../Profile/style/MyUploads.module.css";
import "../../Components/Discover/style/style.css";
import Grid from "@material-ui/core/Grid";


function importAll(r){
    return r.keys().map(r);
}
const images=importAll(require.context('./assets/',false,/\.(png|jpe?g|svg|jpg)$/));

const Discover = () => {
	// console.log(images);
	
	return (
		<div className="discover-container" style={{ paddingTop: "2em", paddingBottom: "5em" }} >
			<h1 className="title-item">Discover Creamzo</h1>

			<Grid
				container
				alignItems="center"
				justify="center"
				spacing={4}
				className={style.gridContainer}
				style={{justifyContent:"space-evenly"}}
			>
				{
					images.map(image=>(
						<Grid className="grid-item" spacing={4}>
							<img className="discoverImage" src={image.default} alt="discover"/>
							<div className="grid-item-title"> {(image.default).substring(14,(image.default).indexOf("."))}</div>
						</Grid>
					))
				}
			</Grid>
		</div>
	);
};
export default Discover;
