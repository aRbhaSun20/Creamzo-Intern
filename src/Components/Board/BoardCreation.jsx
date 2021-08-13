import React from 'react';
import style from './style/BoardCreation.module.css'
import dots from './assets/dots.svg'

import upload from "./assets/6578872_arrow_arrows_circle_direction_up_icon (1).png"
const BoardCreation = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor:"rgb(230, 233, 233)",padding:"30px"}}>

            <div className={style.BoardCreationContainer}>
                <div className={style.ContentContainer}>
                    <div className={style.leftContainer}>
                        <div>

                            <div className={style.dots}>
                                <img src={dots} alt="more" />
                            </div>
                            <div className={style.picture}>
                                <div style={{ marginTop:"40%"}} >
                                    <img style={{width:"25px",height:"25px"}} src={upload} alt="upload" />
                                    <p style={{ color: "black" ,fontSize:"15px"}}>Drag and drop a image or upload a image</p>
                                    <p style={{ color: "black", fontSize: "15px" }}>Recommended: Use .jpg files smaller than 1MB</p>

                                </div>
                            </div>
                        </div>
                        {/* <div style={{ padding: "45px", fontSize: "15px" }}>
                            <p style={{ color: "black" }}>Recommended:Use .jpg files smaller than 1MB</p>
                        </div> */}
                    </div>
                    <div className={style.rightContiner}>
                        <form className={style.BoardCreationForm} action="">

                           <div style={{display:"flex",marginLeft:"40%"}}>
                                    <select style={{ width: "150px", height: "40px", border: "none", borderRadius: "10px 0px 0px 10px", position: "relative", backgroundColor:"rgb(230, 233, 233)"}} >
                                    <option value="section1">Section1</option>
                                    <option value="section2">Section2</option>
                                    <option value="section3">Section3</option>
                                    <option value="section4">Section4</option>
                                </select>
                                <input type="submit" name="" id={style.boardSubmit} value="Post" />
                           </div>
                            <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Add your post title" />
                            <textarea style={{ backgroundColor: "white" }} name="" id="" cols="30" rows="8" placeholder="Add your Description"></textarea>
                            <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Tags(limit 10,comma separated)" />
                            <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Add a link of your blog or website/destination link" />
                        </form>
                        {/* <div style={{ height: "40px", display: "flex", paddingTop: "30px" }}>
                            <img style={{ width: "40px", height: "40px" }} src={facebook} alt="facebook" />
                            <img style={{ width: "40px", height: "40px" }} src={instagram} alt="instagram" />
                            <img style={{ width: "40px", height: "40px", marginLeft: "7px" }} src={twitter} alt="twitter" />

                        </div> */}
                    </div>
                </div>
            </div>
            </div>

        </React.Fragment>
    )
}
export default BoardCreation;