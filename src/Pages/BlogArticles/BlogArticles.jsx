import React from "react";
import Article from "../../Components/Blog/Article/Article";
import "./styles.css";
import { useAllBlog } from "../../Context/BlogsContext";

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

function BlogArticles() {
  const allBlogData = useAllBlog();
  console.log(allBlogData);
  const [limit, setlimit] = React.useState(10)
  const [currentPage, setcurrentPage] = React.useState(0)
  return (
    <div>
      <div className="flex-box">
        {allBlogData?.slice(currentPage,currentPage+limit).map((allBlogs, i) => (
          <Article key={allBlogs._id} data={allBlogs} />
        ))}
       
      </div>
      <div style={{width:'100%',margin:'auto',marginBottom:'2rem',marginTop:'5rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Pagination onChange={(e)=>{setcurrentPage(e.target.textContent)}} count={ Math.max(Math.floor(allBlogData?.length/limit),1)} color="primary" />
      </div>
     
    </div>
  );
}

export default BlogArticles;
