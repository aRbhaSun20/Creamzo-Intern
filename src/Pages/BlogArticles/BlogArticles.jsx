import React from "react";
import Article from "../../Components/Blog/Article/Article";
import "./styles.css";
import { useAllBlog } from "../../Context/BlogsContext";
function BlogArticles() {
  const allBlogData = useAllBlog();
  console.log(allBlogData);

  return (
    <div>
      <div className="flex-box">
        {allBlogData?.map((allBlogs, i) => (
          <Article key={allBlogs._id} data={allBlogs} />
        ))}
       
      </div>
    </div>
  );
}

export default BlogArticles;
