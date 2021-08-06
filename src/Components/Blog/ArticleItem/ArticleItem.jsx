import React,{useState} from 'react'
import blogitemimage from './styles/blogitemimage.jpg'
import './styles/styles.css'

function ArticleItem() {

    const [imageUrl, setimageUrl] = useState(blogitemimage)
    const [headingtext, setheadingtext] = useState("Dummy heading")
    const [secondarytext, setsecondarytext] = useState("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.")
    return (
        <div className="article-display">
            <img className="article-display-image" src={imageUrl} alt="article image" />
            <h1 className="heading-text">{headingtext}</h1>
            <h3 className="secondary-article-text">{secondarytext} </h3>
            
        </div>
    )
}

export default ArticleItem
