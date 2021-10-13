import React from "react";
import { Typography } from "@material-ui/core";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import img1 from "./assets/img1.jpg";
// import img2 from "./assets/img2 .jpg";
// import img3 from "./assets/img3.jpg";
// import img4 from "./assets/img4.jpg";
import "./overview.css";
import img from "../About/assets/img/overviewcontent.jpg"

// const styles = {
//   imgContainer: {
//     width: "12vw",
//     height: "32vh",
//     position: "relative",
//     top: "3rem",
//     borderRadius: ".5rem",
//     color: "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: ".7",
//   },
//   imgContainerStatic: {
//     width: "12vw",
//     height: "32vh",
//     color: "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: ".9",
//   },
//   overViewImage: {
//     objectFit: "cover",
//     width: "100%",
//     height: "auto",
//     borderRadius: ".5rem",
//   },
// };

const OverView = () => {
  return (
    <React.Fragment>
      <div
        className="continer">
        <div className="text" style={{width:"65%"}}>
          <Typography style={{ fontWeight: "bolder",fontSize:"2rem",textAlign: "center" }}>
            {/*OverView Content*/}
            All are welcome
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontSize: "17px",padding:"10px" }}
          >
            We welcome annyone who are creative , funny and wants to show the world the power of content.
            {/*Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            repellat maxime repudiandae voluptatem libero culpa quos dignissimos
            illum impedit!*/}
          </Typography>
          <Typography style={{ fontWeight: "bolder",fontSize:"2rem",textAlign: "center" }}>
            The power to share
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontSize: "17px",padding:"10px" }}
          >
            Share your thoughts and to the largest community of content creators.
            {/*Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            repellat maxime repudiandae voluptatem libero culpa quos dignissimos
            illum impedit!*/}
          </Typography>
          {/*<Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "black",
              // width: "13vw",
              width:"18vw",
              // height: "5vh",
              height:"7vh",
              // fontSize: ".8vw",
              fontSize:"80%",
              minWidth:"110px",
              maxWidth:"190px",
            }}
          >
            Checkout More
            <ArrowForwardIcon style={{ position: "relative", left: ".5rem" }} />
          </Button>*/}
        </div>
        <div className="imagcontainer">
          <img src={img} alt="Makeawesome" className="imagemake"/>
        </div>
        {/*<div
          className="img-conatiner"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "2rem",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <div className="box" style={styles.imgContainer}>
            <img
              className={styles.overViewImage}
              src={img1}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div className="box" style={styles.imgContainerStatic}>
            <img
              className={styles.overViewImage}
              src={img2}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div className="box" style={styles.imgContainer}>
            <img
              className={styles.overViewImage}
              src={img3}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
          <div className="box" style={styles.imgContainerStatic}>
            <img
              className={styles.overViewImage}
              src={img4}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </div>
        </div>*/}
      </div>
    </React.Fragment>
  );
};

export default OverView;
