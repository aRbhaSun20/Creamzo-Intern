import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2 .jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

const styles = {
  imgContainer: {
    width: "13em",
    height: "16em",
    position: "relative",
    top: "3em",
    borderRadius: ".5em",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: ".7",
  },
  imgContainerStatic: {
    width: "13em",
    height: "16em",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: ".9",
  },
  overViewImage: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    borderRadius: ".5em",
  },
};

const OverView = () => {
  return (
    <React.Fragment>
      <div
        className="continer"
        style={{
          display: "grid",
          width: "75%",
          height: "95vh",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          margin: "auto",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "2em",
          position: "relative",
          left: "4em",
        }}
      >
        <div className="text" style={{ display: "grid", height: "18em" }}>
          <Typography style={{ fontWeight: "bolder", fontSize: "1.5rem" }}>
            OverView Content
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "justify", width: "85%", fontSize: ".8rem" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            repellat maxime repudiandae voluptatem libero culpa quos dignissimos
            illum impedit! Odit obcaecati quidem natus suscipit earum accusamus
            quas assumenda in ullam?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "black",
              width: "18em",
              height: "3.5em",
              fontSize: ".6rem",
            }}
          >
            Checkout More
            <ArrowForwardIcon style={{ position: "relative", left: ".5em" }} />
          </Button>
        </div>
        <div
          className="img-conatiner"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "2em",
            width: "80%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "2em",
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
                borderRadius: "1em",
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
                borderRadius: "1em",
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
                borderRadius: "1em",
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
                borderRadius: "1em",
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OverView;
