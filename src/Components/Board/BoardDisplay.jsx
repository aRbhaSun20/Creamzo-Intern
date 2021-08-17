import React from 'react';
import style from './style/BoardDisplay.module.css'
import leftImage from './assets/eric-christian-king-XKGKZBroImE-unsplash (2).jpg'
import facebook from './assets/771366_facebook_logo_media_network_social_icon.png'
import instagram from './assets/5296765_camera_instagram_instagram logo_icon.png';
import twitter from './assets/5296514_bird_tweet_twitter_twitter logo_icon.png';
import linkedin from './assets/317725_linkedin_social_icon.png'
import download from './assets/326639_download_file_icon.png';
import views from './assets/1954555_eye_look_view_views_watch_icon.png';
import share from './assets/2561282_share_icon.png'
import heart from './assets/2246820_heart_like_notification_icon.png'
const BoardDisplay = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "rgb(230, 233, 233)", padding: "30px" }}>

                <div className={style.BoardDisplayContainer}>
                    <div className={style.ContentContainerDisplay}>
                        <div className={style.leftContainerDisplay}>
                            <img style={{ width: "100%", height: "100%", borderRadius: "15px" }} src={leftImage} alt="addedImage" />
                        </div>
                        <div className={style.rightContinerDisplay}>
                            <h3 style={{ color: "black" }}> Title: <small>title here</small> </h3>
                            <h3 style={{ color: "black" }}> Description: <br /> <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi reprehenderit tempora expedita praesentium fugiat? Provident aspernatur rerum numquam autem excepturi labore ipsum commodi? Vero repellat, assumenda suscipit maiores quis cumque!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nobis
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur officiis eveniet incidunt nesciunt dolorem quam totam hic blanditiis minima! Eveniet..lorem20 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia non, explicabo eius id vero eum? Eligendi ex eaque repellat harum? lorem50</small></h3>
                            <h3 style={{ color: "black" }}>Author: <small>Author name</small> </h3>
                            <div style={{ display: "flex" }}>
                                <img style={{ width: "25px", height: "25px" }} src={download} alt="downloads" />
                                <h3>: 0</h3>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img style={{ width: "25px", height: "25px" }} src={views} alt="views" />
                                <h3>: 0</h3>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img style={{ width: "25px", height: "25px" }} src={share} alt="shared" />
                                <h3>: 0</h3>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img style={{ width: "25px", height: "25px" }} src={heart} alt="liked" />
                                <h3>: 0</h3>

                            </div>
                            <h3>Find Creamzo on</h3>
                            <div style={{ height: "30px", display: "flex", paddingTop: "0px" }}>
                                <a href="###">
                                    <img style={{ width: "30px", height: "30px", marginLeft: "7px" }} src={facebook} alt="facebook" />

                                </a>
                                <a href="###">

                                <img style={{ width: "30px", height: "30px", marginLeft: "7px" }} src={instagram} alt="instagram" />
                                </a>
                                <a href="">

                                <img style={{ width: "30px", height: "30px", marginLeft: "7px" }} src={twitter} alt="twitter" />
                                </a>
                                <a href="">

                                <img style={{ width: "30px", height: "30px", marginLeft: "7px" }} src={linkedin} alt="twitter" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default BoardDisplay;