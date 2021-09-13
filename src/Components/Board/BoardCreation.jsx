import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";

import style from "./style/BoardCreation.module.css";
import dots from "./assets/dots.svg";

import upload from "./assets/6578872_arrow_arrows_circle_direction_up_icon (1).png";
const BoardCreation = () => {
	const [dis, setdis] = useState("none");
	const [display, setDisplay] = useState({
		title: "",
		description: "",
		tags: "",
		link: "",
		imgPath: "",
	});

	const handlechange = (e) => {
		// console.log(dis);
		if (e.target.name === "imgPath") {
			let dataImg = e.target.value.split(`\\`);
			// let blob = URL.createObjectURL(e.target.files[0]);
			console.log(e.target.files[0]);
			setDisplay((state) => ({
				...state,
				[e.target.name]: `./${e.target.files[0].name}`,
			}));
		} else {
			setDisplay((state) => ({ ...state, [e.target.name]: e.target.value }));
		}
	};

	const handleSubmit = (e) => {
		
	}

	return (
		<React.Fragment>
			<div style={{ backgroundColor: "rgb(230, 233, 233)", padding: "20px" }}>
				<div className={style.BoardCreationContainer}>
					<div className={style.ContentContainer}>
						<div className={style.leftContainer}>
							<div>
								<div className={style.dotbox} style={{ display: dis }}>
									<div>Add</div>
									<div>Delete</div>
								</div>
								<div className={style.dots}>
									<img src={dots} alt="more" onClick={handlechange} />
								</div>

								<div className={style.picture}>
									<div
										style={{
											backgroundColor: "rgb(230, 233, 233)",
											border: "2px dashed rgb(206, 203, 203)",
											borderRadius: "15px",
											display: "flex",
											alignItems: "center",
											height: "95%",
											width: "95%",
											padding: "10px",
										}}
									>
										<div style={{ width: "100%", padding: "6px" }}>
											<label for="img">
												<img
													style={{
														width: "25px",
														height: "25px",
														marginBottom: "10px",
													}}
													src={upload}
													alt="upload"
												/>
												<p
													style={{
														color: "black",
														fontSize: "15px",
														maxWidth: "180px",
													}}
												>
													Drag and drop a image or upload a image
												</p>
												<div className="fileupload">
													<form action="" style={{ display: "none" }}>
														{display.imgPath === "" ? (
															<input
																type="file"
																id="img"
																name="imgPath"
																accept="image/*"
																onChange={handlechange}
															/>
														) : (
															<img src={display.imgPath} />
														)}
													</form>
												</div>
											</label>
											<p
												style={{
													color: "gray",
													fontSize: "12px",
													marginTop: "40px",
													maxWidth: "250px",
													marginLeft: "auto",
													marginRight: "auto",
												}}
											>
												Recommended: <br /> Use .jpg files smaller than 1MB
											</p>
										</div>
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
									<Select
										style={{
											width: "150px",
											height: "40px",
											borderRadius: "10px 0px 0px 10px",
											position: "relative",
											backgroundColor: "rgb(230, 233, 233)",
										}}
										labelId="demo-simple-select-outlined-label"
										disableUnderline
										id="demo-simple-select-outlined"
									>
										<MenuItem value="section1">Section 1</MenuItem>
										<MenuItem value="section2">Section 2</MenuItem>
										<MenuItem value="section3">Section 3</MenuItem>
									</Select>
									<input
										type="submit"
										name=""
										id={style.boardSubmit}
										value="Post"
									/>
								</div>

								<TextField
									id="standard-basic"
									onChange={handlechange}
									name="title"
									label="Add post title"
								/>
								<TextField
									id="standard-basic"
									onChange={handlechange}
									name="description"
									label="Add description"
								/>
								<TextField
									multiline
									rows={5}
									name="tags"
									onChange={handlechange}
									label="Tags ( limit 10 , comma separated)"
								/>
								<TextField
									id="standard-basic"
									multiline
									rows={2}
									name="imgPath"
									onChange={handlechange}
									label="Add link of blog / destination"
								/>
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
	);
};
export default BoardCreation;
