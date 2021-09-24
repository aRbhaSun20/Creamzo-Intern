import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import style from "./style/BoardCreation.module.css";
import dots from "./assets/dots.svg";

import upload from "./assets/6578872_arrow_arrows_circle_direction_up_icon (1).png";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import { usePin } from "../../Context/PinsContext";

import { useSnackbar } from "notistack";
const BoardCreation = ({ addMore, index, total }) => {
	const history = useHistory();
	const [dis, setdis] = useState("none");
	const [display, setDisplay] = useState({
		title: "",
		description: "",
		tags: "",
		link: "",
		imgPath: "",
		category: "",
	});
	const { enqueueSnackbar } = useSnackbar();
	const user = JSON.parse(sessionStorage.getItem("creamzoUser"));
	// eslint-disable-next-line
	const [pinsData, refetch] = usePin();

	const handlechange = (e) => {
		// console.log(e.target.name);
		// if (e.target.name === "imgPath") {
		// 	setDisplay((state) => ({
		// 		...state,
		// 		[e.target.name]: e.target.files[0],
		// 	}));
		// } else {
		// 	setDisplay((state) => ({ ...state, [e.target.name]: e.target.value }));
		// }
		if (e.target.name === "imgPath") {
			// let dataImg = e.target.value.split(`\\`);
			// let blob = URL.createObjectURL(e.target.files[0]);
			// console.log(e.target.files[0]);
			setDisplay((state) => ({
				...state,
				// [e.target.name]: `./${e.target.files[0].name}`,
				[e.target.name]: e.target.files[0],
			}));
		} else {
			setDisplay((state) => ({ ...state, [e.target.name]: e.target.value }));
		}
	};

  const handledisplay = () => {
    if (dis === "none") {
      setdis("block");
    } else {
      setdis("none");
    }
  };
  const handleSubmit = (e) => {
    console.log("done");
    axiosSendRequest(AXIOS_ACTIONS.CREATE_PIN, "createPin", {
      ...display,
      fname: user.fname,
      creamzoId: user.creamzoId,
    }).then((data) => {
      refetch();
      enqueueSnackbar("Pins Created", { variant: "success" });
      addMore((state) =>
      state.filter((ele) => ele !== index)
   )
      if(total.length===0 ){
        history.push("/");
      }
    
    });
    // console.log(display.tags.split(","))
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "rgb(230, 233, 233)", padding: "20px" }}>
        <div className={style.BoardCreationContainer}>
          <div className={style.ContentContainer}>
            <div className={style.leftContainer}>
              <div>
                <div
                  className={style.dotbox}
                  style={{ display: dis, zIndex: "1000" }}
                >
                  <div
                    onClick={() =>
                      addMore((state) => state.concat(state.length + 1))
                    }
                  >
                    Add
                  </div>
                  <div
                    onClick={() =>
                      addMore((state) =>
                         state.filter((ele) => ele !== index)
                      )
                    }
                  >
                    Delete
                  </div>
                </div>
                <div className={style.dots}>
                  <img src={dots} alt="more" onClick={handledisplay} />
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
															false
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

							{display.imgPath && (
								<img
									className={style.leftContainer}
									src={URL.createObjectURL(display.imgPath)}
									style={{
										position: "relative",
										width: "100%",
										height: "60vh",
										bottom: "60vh",
										borderRadius: "20px",
									}}
									alt=""
								/>
							)}
						</div>
						<div className={style.rightContiner}>
							<form className={style.BoardCreationForm} action="">
								<div className={style.post}>
									{/* <select style={{ width: "150px", height: "40px", border: "none", borderRadius: "10px 0px 0px 10px", position: "relative", backgroundColor: "rgb(230, 233, 233)" }} >
                                        <option value="section1">Section1</option>
                                        <option value="section2">Section2</option>
                                        <option value="section3">Section3</option>
                                        <option value="section4">Section4</option>
                                    </select> */}
									{/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
									<Select
										labelId="demo-simple-select-outlined-label"
										disableUnderline
										id="demo-simple-select-outlined"
										style={{
											width: "150px",
											height: "40px",
											paddingLeft: "7px",
											scrollBehaviour: "auto",
											borderRadius: "10px 0px 0px 10px",
											position: "relative",
											backgroundColor: "rgb(230, 233, 233)",
										}}
										name="category"
										onChange={handlechange}
										value={display.category}
									>
										<MenuItem value="Art">Art</MenuItem>
										<MenuItem value="Culture">Culture</MenuItem>
										<MenuItem value="DIY And Crafts">DIY And Crafts</MenuItem>
										<MenuItem value="Design">Design</MenuItem>
										<MenuItem value="Education">Education</MenuItem>
										<MenuItem value="Environment">Environment</MenuItem>
										<MenuItem value="Events">Events</MenuItem>
										<MenuItem value="Fashion">Fashion</MenuItem>
										<MenuItem value="Food And Drink">Food And Drink</MenuItem>
										<MenuItem value="Hobbies">Hobbies</MenuItem>
										<MenuItem value="Home Decor">Home Decor</MenuItem>
										<MenuItem value="Pets">Pets</MenuItem>
										<MenuItem value="Quotes">Quotes</MenuItem>
										<MenuItem value="Technology">Technology</MenuItem>
										<MenuItem value="Travel">Travel</MenuItem>
										<MenuItem value="Vehicle">Vehicle</MenuItem>
									</Select>
									<Button
										// type="submit"
										name=""
										id={style.boardSubmit}
										onClick={handleSubmit}
									>
										Post
									</Button>
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
									name="link"
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
