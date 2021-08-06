import React,{useState} from 'react'
import './styles/styles.css'
import blogitemimage from './styles/blogitemimage.jpg'

function Article() {
	// eslint-disable-next-line
	const [dummyHeading, setdummyHeading] = useState("Dummy Heading");
	// eslint-disable-next-line
	const [secondaryText, setsecondaryText] = useState(
		"A small river named Duden flows by their place and supplies it with the necessary regelialia."
	);
	// eslint-disable-next-line
    const [buttonurl, setbuttonurl] = useState("www.google.com");
	return (
		<div>
			<img className="article-image" src={blogitemimage} alt="article" />
			<h1 style={{ paddingLeft: "1rem", width: "30rem" }}>{dummyHeading}</h1>
			<h4 className="secondary-imageitem-text">{secondaryText}</h4>
			<a className="readmore-button" href={buttonurl}>
				READ MORE
			</a>
		</div>
	);
}

export default Article
