import React,{useState} from 'react'
import './styles/styles.css'


function ArticleItem({data}) {
	
	// eslint-disable-next-line
	// const [imageUrl, setimageUrl] = useState(blogitemimage);
	// eslint-disable-next-line
	const [headingtext, setheadingtext] = useState("Dummy heading");
	// eslint-disable-next-line
	const [secondarytext, setsecondarytext] = useState(
		"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
	);
	console.log(data)
	return (
		<div className="article-display">
			<img
				className="article-display-image"
				src={data?.image}
				alt="article"
			/>
			<h1 className="heading-text">{data?.title}</h1>
			<h3 className="secondary-article-text">{data?.content} </h3>
		</div>
	);
}

export default ArticleItem
