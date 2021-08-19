import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import style from './style/BoardCreation.module.css'
import dots from './assets/dots.svg'

import upload from "./assets/6578872_arrow_arrows_circle_direction_up_icon (1).png"
const BoardCreation = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "rgb(230, 233, 233)", padding: "30px" }}>

                <div className={style.BoardCreationContainer}>
                    <div className={style.ContentContainer}>
                        <div className={style.leftContainer}>
                            <div>

                                <div className={style.dots}>
                                    <img src={dots} alt="more" />
                                </div>
                                <div className={style.picture}>
                                    <div style={{ marginTop: "40%" }} >
                                        <img style={{ width: "25px", height: "25px" }} src={upload} alt="upload" />
                                        <p style={{ color: "black", fontSize: "15px" }}>Drag and drop a image or upload a image</p>
                                       <div className="">
                                            <form action="" >
                                                <input  type="file" id="img" name="img" accept="image/*" />
                                            </form>
                                       </div>
                                
                                        <p style={{ color: "black", fontSize: "15px" }}>Recommended: Use .jpg files smaller than 1MB</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={style.rightContiner}>
                            <form className={style.BoardCreationForm} action="">

                                <div style={{ display: "flex", marginLeft: "40%" }}>
                                    {/* <select style={{ width: "150px", height: "40px", border: "none", borderRadius: "10px 0px 0px 10px", position: "relative", backgroundColor: "rgb(230, 233, 233)" }} >
                                        <option value="section1">Section1</option>
                                        <option value="section2">Section2</option>
                                        <option value="section3">Section3</option>
                                        <option value="section4">Section4</option>
                                    </select> */}
                                    {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
                                    <Select style={{
                                        width: "150px", height: "40px", borderRadius: "10px 0px 0px 10px", position: "relative", backgroundColor: "rgb(230, 233, 233)"}}
                                        labelId="demo-simple-select-outlined-label"
                                        disableUnderline
                                        id="demo-simple-select-outlined"
                                        
                                        
                                    >
                                        
                                        <MenuItem value="section1">Section 1</MenuItem>
                                        <MenuItem value="section2">Section 2</MenuItem>
                                        <MenuItem value="section3">Section 3</MenuItem>
                                    </Select>
                                    <input type="submit" name="" id={style.boardSubmit} value="Post" />
                                </div>
                                
                                <TextField  variant="outlined" id="standard-basic" label="Add your post title" />
                                <TextField variant="outlined" id="standard-basic" label="Add your Description" />
                                <TextField variant="outlined" multiline 
                                    rows={5} label="Tags(limit 10,comma separated)" />
                                <TextField id="standard-basic" multiline
                                    rows={2} variant="outlined" label="Add a link of your blog orwebsite/destination link" />
                                {/* <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Add your post title" />
                            <textarea style={{ backgroundColor: "white" }} name="" id="" cols="30" rows="8" placeholder="Add your Description"></textarea>
                            <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Tags(limit 10,comma separated)" />
                            <input className={style.BoardCreationFormInput} type="text" name="" id="" placeholder="Add a link of your blog or website/destination link" /> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default BoardCreation;