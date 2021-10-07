import React, { useContext, createContext, useEffect, useState } from "react";
import { usePin } from "./PinsContext";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
	const [SearchData, setSearchData] = useState();

	const [searchData] = usePin();

	useEffect(() => {
		setSearchData(searchData);
	}, [searchData]);

	return (
		<SearchContext.Provider value={[SearchData, setSearchData]}>
			{children}
		</SearchContext.Provider>
	);
};
