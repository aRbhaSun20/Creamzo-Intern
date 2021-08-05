import React,{useState} from 'react'
import './styles/styles.css'
import blogitemimage from './styles/blogitemimage.jpg'

function Article() {

    const [dummyHeading, setdummyHeading] = useState("Dummy Heading")
    const [secondaryText, setsecondaryText] = useState("A small river named Duden flows by their place and supplies it with the necessary regelialia.")
    const [buttonurl, setbuttonurl] = useState("www.google.com")
    return (
        <div>
           <img className="article-image" src={blogitemimage} alt="image" />
           <h1 style={{paddingLeft:'1rem',width:'30rem'}}>{dummyHeading}</h1>
           <h4 className="secondary-imageitem-text" >{secondaryText}</h4>           
           <a className="readmore-button" href={buttonurl} >READ MORE</a>
           
        </div>
    )
}

export default Article
