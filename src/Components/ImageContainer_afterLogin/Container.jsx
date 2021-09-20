import { Button, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useState } from "react";
import { saveAs } from "file-saver";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Popover } from "@material-ui/core";
// eslint-disable-next-line
import { FacebookIcon, FacebookShareButton,InstapaperShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import {
  AddCircle,
  AddCircleOutline,
  ArrowUpward, // eslint-disable-next-line
  FavoriteBorder,
  
  Share,
} from "@material-ui/icons";

import { useHistory } from "react-router-dom";
import "./style/style.css";
import { PIN_ACTIONS, useCurrentPin, usePin } from "../../Context/PinsContext";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";

const Container = ({ data, height }) => {
  const [opacity, setOpacity] = useState(0);
  const [errorHandle, setErrorhandle] = useState(false);
  // eslint-disable-next-line
  const [pinCurrData, setPinCurrData] = useCurrentPin();
  // eslint-disable-next-line
  const [pinsData, refetch] = usePin();

  let history = useHistory();

  const [heartActive, setHeartActive] = useState("red");
  const [addColl, setaddColl] = useState(true);

  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  return (
    <div
      className="imglogin"
      style={{
        position: "relative",
        height: { height },
        display: errorHandle ? "none" : null,
      }}
      onMouseEnter={(e) => {
        e.preventDefault();
        setOpacity(1);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setOpacity(0);
      }}
    >
      <img
        src={data?.imgUrl}
        alt=""
        className="imgCont"
        style={{ borderRadius: "1em", height: height }}
        onError={() => setErrorhandle(true)}
        onClick={() => {
          setPinCurrData({ type: PIN_ACTIONS.PINS_CLICK, payload: data });
          history.push("/boardDisplay");
        }}
      />

      {opacity ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              variant="contained"
              style={{
                borderRadius: "1em",
                outline: "none",
              }}
              name="favourite"
              onClick={() => {
                if (heartActive !== "red") {
                  axiosSendRequest(AXIOS_ACTIONS.PUT, `dislikePin`, {
                    creamzoId: `${data.creamzoId}`,
                    id: `${data._id}`,
                  }).then((res) => {
                    console.log(res);
                    refetch();
                  });
                } else {
                  axiosSendRequest(AXIOS_ACTIONS.PUT, `likePin`, {
                    creamzoId: `${data.creamzoId}`,
                    id: `${data._id}`,
                  }).then((res) => {
                    console.log(res);
                    refetch();
                  });
                }
              }}
            >
              {heartActive === "red" ? (
                <FavoriteIcon
                  onClick={() => {
                    if (heartActive === "black") {
                      setHeartActive("red");
                    } else {
                      setHeartActive("black");
                    }
                  }}
                  style={{
                    color: "red",
                    borderColor: "white",
                    fontSize: "1.5rem",
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={() => {
                    if (heartActive === "black") {
                      setHeartActive("red");
                    } else {
                      setHeartActive("black");
                    }
                  }}
                  style={{
                    color: "red",
                    borderColor: "white",
                    fontSize: "1.5rem",
                  }}
                />
              )}
            </IconButton>
            <IconButton
              variant="contained"
              style={{
                borderRadius: "1em",
                outline: "none",
              }}
              name="addcollection"
              onClick={() => {
                setaddColl((state) => !state);
                if (!addColl) {
                  axiosSendRequest(AXIOS_ACTIONS.POST, `removeCollection`, {
                    creamzoId: `${data.creamzoId}`,
                    id: `${data._id}`,
                  }).then((res) => {
                    console.log(res);
                    refetch();
                  });
                } else {
                  axiosSendRequest(AXIOS_ACTIONS.POST, `addCollection`, {
                    creamzoId: `${data.creamzoId}`,
                    id: `${data._id}`,
                  }).then((res) => {
                    console.log(res);
                    refetch();
                  });
                }
              }}
            >
              {addColl ? (
                <AddCircleOutline
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
              ) : (
                <AddCircle style={{ color: "white", fontSize: "1.5rem" }} />
              )}
            </IconButton>
          </div>
        </div>
      ) : null}

      {opacity ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            bottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "85%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                borderRadius: "1em",
                // position: "relative",
                width: "6rem",
                // bottom: "0.5rem",
                outline: "none",
                textTransform: "capitalize",
                // fontSize: ".7rem",
              }}
            >
              <ArrowUpward
                style={{
                  transform: "rotate(45deg)",
                  // marginRight: ".5em",
                  width: "50%",
                  fontSize: "1rem",
                }}
              />
              <a href={data.imgUrl}>Link</a>
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "4rem",
              }}
            >
              <IconButton
                onClick={() => {
                  axiosSendRequest(
                    AXIOS_ACTIONS.PUT,
                    `addDownloads/${data?._id}/${
                      data?.creamzoId.split("#")[1]
                    }`,
                    null
                  ).then((data) => {
                    refetch();
                  });
                }}
                name="download"
                style={{ outline: "none", padding: "4px" }}
              >
                <GetAppIcon
                  onClick={() => {
                    saveAs(data.imgUrl, "image.jpg");
                  }}
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    position: "relative",
                    bottom: "0em",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={() => {
                  axiosSendRequest(
                    AXIOS_ACTIONS.PUT,
                    `addShares/${data?._id}/${
                      data?.creamzoId.split("#").length > 0
                        ? `%23${data?.creamzoId.split("#")[1]}`
                        : data?.creamzoId
                    }`,
                    null
                  ).then((res) => {
                    refetch();
                  });
                }}
                name="share"
                style={{ outline: "none", padding: "4px" }}
              >
                <Share
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    position: "relative",
                    bottom: "0em",
                  }}
                  onClick={openPopover}
                />
                <Popover
                  open={Boolean(anchor)}
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  onClose={() => {
                    setAnchor(null);
                  }}
                >
                  <div style={{padding:'1rem'}}>
                    <h1>share</h1>
                    <FacebookShareButton url={data.imgUrl}>
                      <FacebookIcon round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton image={data.imgUrl}>
                      <TwitterIcon round={true}/>
                    </TwitterShareButton>
                    <WhatsappShareButton url={data.imgUrl}>
                      <WhatsappIcon round={true}/>
                    </WhatsappShareButton>
                    
                
                  </div>
                </Popover>
              </IconButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
	
};

export default Container;
