import React, { useContext, createContext } from "react";
import { useQuery } from "react-query";
import { axiosSendRequest, AXIOS_ACTIONS } from "../utils/AxiosSendRequest";

export const PinsContext = createContext();

export const usePin = () => useContext(PinsContext);

export const PIN_ACTIONS = {
	CREATE: "create",
	DELETE: "delete",
	LIKE: "like",
	DISLIKE: "dislike",
	ADD_COLLECTION: "addCollect",
	REMOVE_COLLECTION: "removeCollect",
	ADD_SHARE: "addShare",
	ADD_DOWNLOAD: "addDownload",
};
export const reducer = (pinDetails, actions) => {
	switch (actions.type) {
		case PIN_ACTIONS.CREATE:
			return pinDetails;
		case PIN_ACTIONS.DELETE:
			return pinDetails;
		case PIN_ACTIONS.LIKE:
			return pinDetails;
		case PIN_ACTIONS.DISLIKE:
			axiosSendRequest(AXIOS_ACTIONS.PUT);
			return pinDetails;
		case PIN_ACTIONS.ADD_COLLECTION:
			return pinDetails;
		case PIN_ACTIONS.REMOVE_COLLECTION:
			return pinDetails;
		case PIN_ACTIONS.ADD_SHARE:
			return pinDetails;
		case PIN_ACTIONS.ADD_DOWNLOAD:
			return pinDetails;
		default:
			return pinDetails;
	}
};

export const PinsProvider = ({ children }) => {
	const { data: PinsData } = useQuery("All Pins", async () =>
		axiosSendRequest(AXIOS_ACTIONS.GET, "allPins", null)
	);
	return (
		<PinsContext.Provider value={PinsData?.data?.result}>
			{children}
		</PinsContext.Provider>
	);
};
