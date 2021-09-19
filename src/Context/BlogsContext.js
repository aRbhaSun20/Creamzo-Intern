import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { axiosSendRequest, AXIOS_ACTIONS } from "../utils/AxiosSendRequest";

export const TrendingBlogsContext = createContext();
export const AllBlogsContext = createContext();
export const ParticularBlogsContext = createContext();

export const useTrendingBlog = () => useContext(TrendingBlogsContext);
export const useAllBlog = () => useContext(AllBlogsContext);
export const useParticularBlog = () => useContext(ParticularBlogsContext);

export const BlogsProvider = ({ children }) => {
	const { data: trendingBlogs } = useQuery("Trending Blogs", async () =>
		axiosSendRequest(AXIOS_ACTIONS.GET, "trendingBlog", null)
	);

	const { data: allBlogs } = useQuery("All Blogs", async () =>
		axiosSendRequest(AXIOS_ACTIONS.GET, "allBlog", null)
	);

	// const { data: particularBlogs } = useQuery("Particular Blogs", async () =>
	// 	axiosSendRequest(AXIOS_ACTIONS.GET, "trendingBlog", null)
	// );

	return (
		<AllBlogsContext.Provider value={allBlogs?.data}>
			<TrendingBlogsContext.Provider value={trendingBlogs?.data}>
				{/* <ParticularBlogsContext> */}
				{children}
				{/* </ParticularBlogsContext> */}
			</TrendingBlogsContext.Provider>
		</AllBlogsContext.Provider>
	);
};
