import React from "react";
import Article from "../../Components/Blog/Article/Article";
import "./styles.css";
import { useAllBlog } from "../../Context/BlogsContext";

import Pagination from '@material-ui/lab/Pagination';

function BlogArticles() {
  const allBlogData = useAllBlog();
  // eslint-disable-next-line
  const [limit, setlimit] = React.useState(10)
  const [currentPage, setcurrentPage] = React.useState(0)




  return (
    <div>
      <div className="flex-box">
        {allBlogData?.slice(currentPage*limit, currentPage*limit+limit).map((allBlogs, i) => (
          <Article key={allBlogs._id} data={allBlogs} />
        ))}
        
         {console.log(allBlogData)}
      </div>
      <div style={{width:'100%',margin:'auto',marginBottom:'2rem',marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Pagination onChange={(e,data)=>{setcurrentPage(data-1)
      console.log( typeof(data) )
      
      }} count={ Math.max(Math.floor(allBlogData?.length/limit),1)} color="primary" />
      </div>
     
    </div>
  );
}

export default BlogArticles;
