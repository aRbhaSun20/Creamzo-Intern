
import React from 'react'
import ArticleItem from '../../Components/Blog/ArticleItem/ArticleItem'
import {useArticle} from '../../Context/ArticlesContext'
function Articledisplay() {
   // eslint-disable-next-line
   const [currentArticle,setcurrentArticle] = useArticle()
    
    return (
        <div>    
               
            <ArticleItem data={currentArticle}/>
        </div>
    )
}

export default Articledisplay
