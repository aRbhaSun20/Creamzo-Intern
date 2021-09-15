import { Typography } from "@material-ui/core";
import React from "react";
import "./making.css";
// import img from "../About/assets/img/art.jpg";
// import img1 from "../About/assets/img/diy.jpg";
// import img2 from "../About/assets/img/dog.jpg";
// import img3 from "../About/assets/img/quotes.jpg";
import img from "../About/assets/img/Makeawesome.jpg";


const Making = () => {
  // const images = [img, img1, img2, img3, img3];

  return (
    <React.Fragment>
      <div
        className="conatiner">
        <div className="text">
          <Typography
            variant="h4"
            style={{
              paddingBottom: ".6rem",
              fontWeight: "bolder",
              // fontSize: "1.8vw",
              fontSize:"2rem",
              textAlign: "center",
            }}
          >
            Make something awesome
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              // paddingBottom: "2rem",
              textAlign: "center",
              fontSize: "17px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            perferendis ipsam blanditiis mollitia esse. Quod error voluptatibus
            facere aperiam eligendi cum saepe iure aut. Expedita soluta cum
            itaque deserunt ducimus?
          </Typography>
          {/*<Button
            variant="contained"
            style={{
              backgroundColor: "black",
              // width: "12vw",
              width:"18vw",
              // height: "5vh",
              height:"8vh",
              margin: "auto",
              // fontSize: ".8vw",
              fontSize:"80%",
              minWidth:"85px",
              maxWidth:"180px",
            }}
            color="primary"
          >
            Join the Community
          </Button>*/}
        </div>
        <div className="imagcontainer">
          <img src={img} alt="Makeawesome" className="imagemake"/>
        </div>
        {/*<div
          className="img"
          style={{
            width: "75%",
            height: "70vh",
            position: "relative",
            left: "-2rem",
          }}
        >
          <div
            className="img"
            style={{
              position: "absolute",
              top: "-6vh",
              right: "-4vw",
              width: "16vw",
              height: "30vh",
            }}
          >
            <img
              src={images[0]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              top: "-7vh",
              right: "16vw",
              width: "8vw",
              height: "15vh",
            }}
          >
            <img
              src={images[1]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              top: "11vh",
              left: "5.5vw",
              width: "16vw",
              height: "22vh",
            }}
          >
            <img
              src={images[2]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              top: "28vh",
              right: "-4vw",
              width: "16vw",
              height: "18vh",
            }}
          >
            <img
              src={images[3]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              bottom: "10vh",
              right: "14vw",
              width: "13vw",
              height: "22vh",
            }}
          >
            <img
              src={images[4]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5rem",
              }}
            />
          </div>
        </div>*/}
      </div>
    </React.Fragment>
  );
};

export default Making;
