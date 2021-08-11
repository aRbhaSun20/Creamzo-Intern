import React from 'react'
import Herocomponent from '../../Components/Blog/Herocomponent/Herocomponent'
import Blogitem from '../../Components/Blog/Blogitem/Blogitem'
import FABPin from '../../Components/FABPin/FABPin'
function Blog() {
    return (
        <div>
       
            <Herocomponent />
            
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <Blogitem />
            <FABPin />
        </div>
    )
}

export default Blog
