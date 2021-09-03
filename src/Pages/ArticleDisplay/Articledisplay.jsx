import React from 'react'
import ArticleItem from '../../Components/Blog/ArticleItem/ArticleItem'
import {useAllBlog} from '../../Context/BlogsContext'
function Articledisplay() {

    const allArtilcesData = useAllBlog()
    
    return (
        <div>
            {allArtilcesData?.map(
                articledata => (<ArticleItem key={articledata?._id} data={articledata}/>)
            )}
        </div>
    )
}

export default Articledisplay
