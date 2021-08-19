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
          width: "auto",
          height: "90vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          alignItems: "center",
          padding: "1em",
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
            left: "6em",
          }}
        >
          <Typography
            variant="h4"
            style={{
              paddingBottom: ".6em",
              fontWeight: "bolder",
              fontSize: "1.5rem",
            }}
          >
            Make something awesome
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              paddingBottom: "2em",
              textAlign: "justify",
              fontSize: ".8rem",
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
              width: "15em",
              height: "3.5em",
              margin: "auto",
              fontSize: ".6rem",
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
            left: "-2em",
          }}
        >
          <div
            className="img"
            style={{
              position: "absolute",
              top: "-4em",
              right: "-4em",
              width: "16em",
              height: "16em",
            }}
          >
            <img
              src={images[0]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5em",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              top: "-2em",
              left: "14em",
              width: "6em",
              height: "6em",
            }}
          >
            <img
              src={images[1]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5em",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              top: "11vh",
              left: "8vw",
              width: "13em",
              height: "14em",
            }}
          >
            <img
              src={images[2]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5em",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              bottom: "15vh",
              right: "-4vw",
              width: "16em",
              height: "12em",
            }}
          >
            <img
              src={images[3]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5em",
              }}
            />
          </div>
          <div
            className="img"
            style={{
              position: "absolute",
              bottom: "5vh",
              right: "14vw",
              width: "10em",
              height: "10em",
            }}
          >
            <img
              src={images[4]}
              alt="pic"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.5em",
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Making;
