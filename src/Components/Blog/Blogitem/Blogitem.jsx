import React, { useState } from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

import "./styles/styles.css";
import dummyimage from "./styles/blogitemimage.jpg";
import { Link } from "react-router-dom";

function Blogitem({data}) {
  console.log(data?.title)
  
  // eslint-disable-next-line
  const [dummyDate, setdummyDate] = useState("02/08/2021");
  // eslint-disable-next-line
  const [facebookUrl, setfacebookUrl] = useState("https://www.facebook.com");
  // eslint-disable-next-line
  const [twitterUrl, settwitterUrl] = useState("https://www.twitter.com");
  // eslint-disable-next-line
  const [instagramUrl, setinstagramUrl] = useState("https://www.instagram.com");
  // eslint-disable-next-line
  const [linkedinUrl, setlinkedinUrl] = useState("https://www.linkedin.com");
  // eslint-disable-next-line
  const [categorytype, setcategorytype] = useState("Art");

  return (
    <div style={{  margin: "1rem" }}>
      <img
        src={data?.image}
        alt="blog"
        style={{
          height: "10rem",
          widows: "15rem",
          margin: "1rem",
          objectFit: "contain",
          borderRadius: "10px",
        }}
      />

      <div style={{ width: "50%" }}>
        <div style={{ height: "20rem", padding: "1rem" }}>
          <h3 className={"dateopacity"}>{categorytype}</h3>
          <h1 style={{ fontSize: "1.3rem" }}>{data?.title}</h1>

          <div className="iconspack">
            <Link to={facebookUrl} style={{ color: "black", fontSize: 45 }}>
              <Facebook />
            </Link>
            <Link to={twitterUrl} style={{ color: "black", fontSize: 45 }}>
              {" "}
              <Twitter />
            </Link>
            <Link to={instagramUrl} style={{ color: "black", fontSize: 45 }}>
              <Instagram />
            </Link>
            <Link to={linkedinUrl} style={{ color: "black", fontSize: 45 }}>
              <LinkedIn />
            </Link>
          </div>
          <h6 className="dateopacity">{data?.time?.split('T')[0]}</h6>
          
          <Link to={'/articleItem'}>
		  <br />
            <h3 style={{paddingBottom:'5px'}}>Read more</h3>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogitem;
