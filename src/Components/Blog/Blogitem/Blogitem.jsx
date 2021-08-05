import React, { useState } from 'react'
import {  Facebook, Instagram, Opacity, Twitter } from '@material-ui/icons'

import './styles/styles.css'
import dummyimage from './styles/blogitemimage.jpg'

function Blogitem() {
    const [dummyHeading, setdummyHeading] = useState("Dummy heading")
    const [dummyDate, setdummyDate] = useState("02/08/2021")
    const [facebookUrl, setfacebookUrl] = useState("https://www.facebook.com")
    const [twitterUrl, settwitterUrl] = useState("https://www.twitter.com")
    const [instagramUrl, setinstagramUrl] = useState("https://www.instagram.com")
    const [categorytype, setcategorytype] = useState("Art")

    return (
        <div style={{display:'flex',margin:'3rem'}}>
           
            
            <img src={dummyimage} alt="blog image" style={{height:'25rem',margin:'1.8rem',objectFit:'contain',borderRadius:'10px'}} />
           
            <div style={{width:'50%'}}>
               <div style={{height:'25rem',padding:'1.5rem'}}>
                   <h3 className={'dateopacity'}>{categorytype}</h3>
                   <h1 style={{fontSize:'3rem'}}>{dummyHeading}</h1>
                   
                   <div className="iconspack">
                    <a href={facebookUrl} style={{color:'black',fontSize:45}}><Facebook /></a> 
                    <a href={twitterUrl} style={{color:'black',fontSize:45}}> <Twitter /></a>
                    <a href={instagramUrl} style={{color:'black',fontSize:45}}><Instagram /></a>
                   </div>
                  
                   <h6 className='dateopacity'>{dummyDate}</h6>
               </div>
            </div>
        </div>
    )
}

export default Blogitem
