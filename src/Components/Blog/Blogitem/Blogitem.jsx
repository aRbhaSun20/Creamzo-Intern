import React, { useState } from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

import "./styles/styles.css";
import { Link } from "react-router-dom";
import {useArticle} from  '../../../Context/ArticlesContext'

function Blogitem({data}) {
  console.log(data?.title)
  
 
  // eslint-disable-next-line
  const [facebookUrl, setfacebookUrl] = useState("https://www.facebook.com/Creamzo");
  // eslint-disable-next-line
  const [twitterUrl, settwitterUrl] = useState("https://twitter.com/creamzo3");
  // eslint-disable-next-line
  const [instagramUrl, setinstagramUrl] = useState("https://www.instagram.com/creamzo7");
  // eslint-disable-next-line
  const [linkedinUrl, setlinkedinUrl] = useState("https://www.linkedin.com/company/creamzo");
  // eslint-disable-next-line
  const [categorytype, setcategorytype] = useState("Art");
  // eslint-disable-next-line
  const [currentArticle,setcurrentArticle] = useArticle()
  return (
    <div style={{  margin: "2rem" }}>
      <Link  to={'/articleitem'} 
          onClick={()=>setcurrentArticle(data)}>
      <img
        src={data?.image}
        alt="blog"
        style={{
          height: "10rem",
          width: "15rem",
          margin: "1rem",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      </Link>
      <div style={{width:'50%'}}>
        <div style={{ height: "20rem", padding: "1rem" }}>
          <h3 className={"dateopacity"}>{categorytype}</h3>
          <div style={{height:'5rem'}}>
          <h1 style={{ fontSize: "1.2rem" }}>{data?.title}</h1>
          <p style={{ fontSize: "0.8rem",width:'8rem',fontWeight:'bold' }}>{data?.content.substring(1,30)}</p>
          <h3 style={{fontSize:'0.5rem',opacity:'50%'}}>Author : {data?.name}</h3>
          </div>
          

          <div className="iconspack">
            <a href={facebookUrl} rel="noreferrer" target="_blank" style={{ color: "black", fontSize: 45 }}>
              <Facebook />
            </a>
            <a href={twitterUrl} target="_blank" rel="noreferrer" style={{ color: "black", fontSize: 45 }}>
              {" "}
              <Twitter />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" style={{ color: "black", fontSize: 45 }}>
              <Instagram />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" style={{ color: "black", fontSize: 45 }}>
              <LinkedIn />
            </a>
          </div>
          <h6 style={{fontSize:'0.5rem',opacity:'50%'}}>{data?.time?.split('T')[0]}</h6>
          <br />
          <Link to={'/articleitem'}
          onClick={()=>setcurrentArticle(data)}
          >
		 
           <h3>Read More</h3>

            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogitem;
