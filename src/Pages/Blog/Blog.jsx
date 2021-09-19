import React from "react";
import Herocomponent from "../../Components/Blog/Herocomponent/Herocomponent";
import Blogitem from "../../Components/Blog/Blogitem/Blogitem";
import { useTrendingBlog } from "../../Context/BlogsContext";
function Blog() {
  const trendingBlogData = useTrendingBlog();
  //   console.log(trendingBlogData);

  return (
    <div>
      <Herocomponent />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        
        {trendingBlogData?.map((trendingBlog, i) => (
          <Blogitem key={trendingBlog._id} data={trendingBlog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
