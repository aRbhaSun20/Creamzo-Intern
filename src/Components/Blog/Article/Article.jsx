import React, { useState } from "react";
import "./styles/styles.css";
import {useArticle} from  '../../../Context/ArticlesContext'
import { Link } from "react-router-dom";

function Article({data}) {
	// eslint-disable-next-line
	const [currentArticle,setcurrentArticle] = useArticle()
	
	// eslint-disable-next-line
	const [secondaryText, setsecondaryText] = useState(
		"A small river named Duden flows by their place and supplies it with the necessary regelialia."
	);
	// eslint-disable-next-line
	const [buttonurl, setbuttonurl] = useState("/articleitem");

	return (
		<div>
			<Link
				
				to={"/articleitem"}
				onClick={()=>setcurrentArticle(data)}
			>
			<img className="article-image" src={data?.image} alt="article" />
			</Link>
			<h1 style={{ paddingLeft: "1rem", fontSize: "1.5rem", width: "15rem" }}>
				{data?.title}
			</h1>
			<h4 className="secondary-imageitem-text">{`${data?.content?.split(" ").splice(0,7)?.join(" ")} . . .`}</h4>
			<Link
				className="readmore-button"
				styles={{ fontSize: "1rem" }}
				to={"/articleitem"}
				onClick={()=>setcurrentArticle(data)}
			>
				Read More
			</Link>
		</div>
	);
}

export default Article;
