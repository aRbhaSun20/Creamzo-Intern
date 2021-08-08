<<<<<<< HEAD
import React, { useState } from "react";
import blogitemimage from "./styles/blogitemimage.jpg";
import "./styles/styles.css";

function ArticleItem() {
  const [imageUrl, setimageUrl] = useState("");
  const [headingtext, setheadingtext] = useState("");
  const [secondarytext, setsecondarytext] = useState("");
  setimageUrl(blogitemimage);
  setheadingtext("Dummy heading");
  setsecondarytext(
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  );
  return (
    <div className="article-display">
      <img
        className="article-display-image"
        src={imageUrl}
        alt="article image"
      />
      <h1 className="heading-text">{headingtext}</h1>
      <h3 className="secondary-article-text">{secondarytext} </h3>
    </div>
  );
}

export default ArticleItem;
=======
import React,{useState} from 'react'
import blogitemimage from './styles/blogitemimage.jpg'
import './styles/styles.css'

function ArticleItem() {
	// eslint-disable-next-line
	const [imageUrl, setimageUrl] = useState(blogitemimage);
	// eslint-disable-next-line
	const [headingtext, setheadingtext] = useState("Dummy heading");
	// eslint-disable-next-line
	const [secondarytext, setsecondarytext] = useState(
		"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
	);
	return (
		<div className="article-display">
			<img
				className="article-display-image"
				src={imageUrl}
				alt="article"
			/>
			<h1 className="heading-text">{headingtext}</h1>
			<h3 className="secondary-article-text">{secondarytext} </h3>
		</div>
	);
}

export default ArticleItem
>>>>>>> 87e9a1783f713dd0845bba9b5fb50f5a7e7cc3dd
