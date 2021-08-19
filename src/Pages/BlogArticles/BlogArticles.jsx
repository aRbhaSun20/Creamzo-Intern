import React from 'react'
import Article from '../../Components/Blog/Article/Article'
import FABPin from '../../Components/FABPin/FABPin'
import './styles.css'
function BlogArticles() {
    return (
        <div>
            <FABPin/>
            
            {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',gap:'2rem'}}> */}
            <div className="flex-box">
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            </div>
           
        </div>
    )
}

export default BlogArticles
