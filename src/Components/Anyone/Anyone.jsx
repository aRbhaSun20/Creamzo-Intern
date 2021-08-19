import { Typography, Button } from "@material-ui/core";
import React from "react";
import img from "../About/assets/img/art.jpg";
import img1 from "../About/assets/img/diy.jpg";
import img2 from "../About/assets/img/dog.jpg";
import img3 from "../About/assets/img/quotes.jpg";
const Anyone = () => {
  const images = [img, img1, img2, img3, img3];
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "flex-start",
        }}
      >
        <div
          className="text"
          style={{
            width: "100%",
            height: "32vh",
            display: "grid",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontWeight: "bolder",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            Anyone can join the community
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              fontSize: ".8rem",
              width: "50%",
              margin: "auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            perferendis ipsam blanditiis mollitia esse. Quod error voluptatibus
            facere aperiam eligendi cum saepe iure aut. Expedita soluta cum
            itaque deserunt ducimus?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "black",
              width: "15em",
              height: "3em",
              margin: "auto",
              fontSize: ".6rem",
            }}
          >
            Join the Community
          </Button>
        </div>

        <div
          className="left"
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            maxHeight: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            className="imgs"
            style={{
              position: "absolute",
              top: "0em",
            }}
          >
            <div
              className=""
              style={{
                position: "absolute",
                width: "8em",
                height: "12em",
                top: "-8em",
                left: "-6em",
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
              className=""
              style={{
                position: "absolute",
                width: "10em",
                height: "10em",
                top: "-4.5em",
                left: "3em",
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
              className=""
              style={{
                position: "absolute",
                width: "18em",
                height: "12em",
                top: "7em",
                left: "-6em",
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
              className=""
              style={{
                position: "absolute",
                width: "8em",
                height: "8em",
                top: "20em",
                left: "-6em",
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
              className=""
              style={{
                position: "absolute",
                width: "12em",
                height: "9em",
                top: "20em",
                left: "3em",
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
        <div
          className="right"
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div
            className="imgs"
            style={{
              position: "absolute",
              top: "0em",
              right: "11.5em",
            }}
          >
            <div
              className=""
              style={{
                position: "absolute",
                width: "8em",
                height: "12em",
                top: "-8em",
                left: "7.5em",
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
              className=""
              style={{
                position: "absolute",
                width: "10em",
                height: "10em",
                top: "-4.5em",
                left: "-4em",
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
              className=""
              style={{
                position: "absolute",
                width: "18em",
                height: "12em",
                top: "7em",
                left: "-2.5em",
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
              className=""
              style={{
                position: "absolute",
                width: "8em",
                height: "8em",
                top: "20em",
                left: "7.5em",
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
              className=""
              style={{
                position: "absolute",
                width: "12em",
                height: "9em",
                top: "20em",
                left: "-6em",
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
      </div>
    </React.Fragment>
  );
};

export default Anyone;
