import { data } from 'colcade'
import React from 'react'
import ArticleItem from '../../Components/Blog/ArticleItem/ArticleItem'
import {useArticle} from '../../Context/ArticlesContext'
function Articledisplay() {

   const [currentArticle,setcurrentArticle] = useArticle()
    
    return (
        <div>
            {/* {allArtilcesData?.map(
                articledata => (<ArticleItem key={articledata?._id} data={articledata}/>)
            )} */}
            <ArticleItem data={currentArticle}/>
        </div>
    )
}

export default Articledisplay
