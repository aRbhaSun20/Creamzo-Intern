import React, { useContext, createContext } from "react";
import { useQuery } from "react-query";
import { axiosSendRequest, AXIOS_ACTIONS } from "../utils/AxiosSendRequest";

export const UploadContext = createContext();

export const useUploads = () => useContext(UploadContext);

export const UploadsProvider = ({ children }) => {
	const creamzoUser = JSON.parse(localStorage.getItem("creamzoUser"));

	const { data: UploadsData, refetch } = useQuery("My Uploads", async () =>
		axiosSendRequest(AXIOS_ACTIONS.GET, `myUploads/${creamzoUser.creamzoId}`)
	);

	return (
		<UploadContext.Provider value={[UploadsData, refetch]}>
			{children}
		</UploadContext.Provider>
	);
};
