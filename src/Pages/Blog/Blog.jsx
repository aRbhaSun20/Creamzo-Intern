import React from 'react'
import Herocomponent from '../../Components/Blog/Herocomponent/Herocomponent'
import Blogitem from '../../Components/Blog/Blogitem/Blogitem'
function Blog() {
    return (
        <div >
       
            <Herocomponent />
            <div style={{display:'flex',flexWrap:'wrap'}}>
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <Blogitem />
            </div>
            
           
        </div>
    )
}

export default Blog
