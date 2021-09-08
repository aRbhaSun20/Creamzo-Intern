import React from "react";
import style from "./style/BoardDisplay.module.css";
// import leftImage from "./assets/eric-christian-king-XKGKZBroImE-unsplash (2).jpg";
import facebook from "./assets/771366_facebook_logo_media_network_social_icon.png";
import instagram from "./assets/5296765_camera_instagram_instagram logo_icon.png";
import twitter from "./assets/5296514_bird_tweet_twitter_twitter logo_icon.png";
import linkedin from "./assets/317725_linkedin_social_icon.png";
import download from "./assets/326639_download_file_icon.png";
import views from "./assets/1954555_eye_look_view_views_watch_icon.png";
import share from "./assets/2561282_share_icon.png";
import heart from "./assets/2246820_heart_like_notification_icon.png";
import { useLocation } from "react-router-dom";
import img from "./assets/eric-christian-king.jpg";

const BoardDisplay = () => {
	// const location = useLocation();
	// console.log(location);
	// const {i} = location.state
	// const i=props;
	// console.log(i);
	return (
		<React.Fragment>
			<div style={{ backgroundColor: "rgb(230, 233, 233)", padding: "15px" }}>
				<div className={style.BoardDisplayContainer}>
					<div className={style.ContentContainerDisplay}>
						<div className={style.leftContainerDisplay}>
							<img
								style={{ width: "100%", height: "100%", borderRadius: "15px" }}
								src={img}
								alt="addedImage"
							/>
						</div>
						<div className={style.rightContinerDisplay}>
							<h3 style={{ color: "black" }}>
								{" "}
								Title: <small>Title Here</small>{" "}
							</h3>
							<h3 style={{ color: "black" }}>
								{" "}
								URL: <small><a href="https://www.google.com">http://www</a></small>{" "}
							</h3>
							<h3 style={{ color: "black" }}>
								{" "}
								Description: <br />{" "}
								<small>
									Lorem, ipsum dolor sit amet consectetur
									
								</small>
							</h3>
							<h3 style={{ color: "black" }}>
								Author: <small>Author name</small>{" "}
							</h3>
							<div style={{ display: "flex" ,justifyContent:"flex-start"}}>
								<img
									style={{ width: "25px", height: "25px" }}
									src={heart}
									alt="liked"
								/>
								<h3>: 0</h3>
							</div>
							<div style={{ display: "flex" ,justifyContent:"flex-start"}}>
								<img
									style={{ width: "25px", height: "25px" }}
									src={views}
									alt="views"
								/>
								<h3>: 0</h3>
							</div>
							<div style={{ display: "flex" ,justifyContent:"flex-start"}}>
								<img
									style={{ width: "25px", height: "25px" }}
									src={download}
									alt="downloads"
								/>
								<h3>: 0</h3>
							</div>
							
							<div style={{ display: "flex" ,justifyContent:"flex-start"}}>
								<img
									style={{ width: "25px", height: "25px" }}
									src={share}
									alt="shared"
								/>
								<h3>: 0</h3>
							</div>
							
							<h3>Find Creamzo on</h3>
							<div
								style={{ height: "30px", display: "flex", paddingTop: "0px" }}
							>
								<a href="###">
									<img
										style={{ width: "24px", height: "24px", marginLeft: "10px" }}
										src={facebook}
										alt="facebook"
									/>
								</a>
								<a href="###">
									<img
										style={{ width: "24px", height: "24px", marginLeft: "10px" }}
										src={instagram}
										alt="instagram"
									/>
								</a>
								<a href="##">
									<img
										style={{ width: "24px", height: "24px", marginLeft: "10px" }}
										src={twitter}
										alt="twitter"
									/>
								</a>
								<a href="##">
									<img
										style={{ width: "24px", height: "24px", marginLeft: "10px" }}
										src={linkedin}
										alt="twitter"
									/>
								</a>
							</div>
						</div>

					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};
export default BoardDisplay;
