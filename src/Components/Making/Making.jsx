import { Typography, Button } from "@material-ui/core";
import React from "react";
import img from "../About/assets/img/art.jpg";
import img1 from "../About/assets/img/diy.jpg";
import img2 from "../About/assets/img/dog.jpg";
import img3 from "../About/assets/img/quotes.jpg";

const Making = () => {
  const images = [img, img1, img2, img3, img3];

  return (
    <React.Fragment>
      <div
        className="conatiner"
        style={{
          width: "100%",
          height: "90vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          className="text"
          style={{
            width: "65%",
            display: "felx",
            flexDirection: "column",
            height: "auto",
            justifyContent: "space-evenly",
            margin: "auto",
            position: "relative",
            left: "6rem",
          }}
        >
          <Typography
            variant="h4"
            style={{
              paddingBottom: ".6rem",
              fontWeight: "bolder",
              fontSize: "1.8vw",
            }}
          >
            Make something awesome
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              paddingBottom: "2rem",
              textAlign: "justify",
              fontSize: ".8vw",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            perferendis ipsam blanditiis mollitia esse. Quod error voluptatibus
            facere aperiam eligendi cum saepe iure aut. Expedita soluta cum
            itaque deserunt ducimus?
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              width: "12vw",
              height: "5vh",
              margin: "auto",
              fontSize: ".8vw",
            }}
            color="primary"
          >
            Join the Community
          </Button>
        </div>
        <div
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Making;
