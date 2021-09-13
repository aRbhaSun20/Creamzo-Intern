import React, { useContext, createContext, useReducer } from "react";
import { useQuery } from "react-query";
import { axiosSendRequest, AXIOS_ACTIONS } from "../utils/AxiosSendRequest";

export const PinsContext = createContext();
export const CurrentPinContext = createContext();

export const usePin = () => useContext(PinsContext);
export const useCurrentPin = () => useContext(CurrentPinContext);

export const PIN_ACTIONS = {
	CREATE: "create",
	DELETE: "delete",
	LIKE: "like",
	DISLIKE: "dislike",
	ADD_COLLECTION: "addCollect",
	REMOVE_COLLECTION: "removeCollect",
	ADD_SHARE: "addShare",
	ADD_DOWNLOAD: "addDownload",
	PINS_CLICK: "pin_click",
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
			// axiosSendRequest(AXIOS_ACTIONS.PUT);
			return pinDetails;
		case PIN_ACTIONS.ADD_COLLECTION:
			return pinDetails;
		case PIN_ACTIONS.REMOVE_COLLECTION:
			return pinDetails;
		case PIN_ACTIONS.ADD_SHARE:
			return pinDetails;
		case PIN_ACTIONS.ADD_DOWNLOAD:
			return pinDetails;
		case PIN_ACTIONS.PINS_CLICK:
			return actions.payload;

		default:
			return pinDetails;
	}
};

export const PinsProvider = ({ children }) => {
	const { data: PinsData, refetch } = useQuery("All Pins", async () =>
		axiosSendRequest(AXIOS_ACTIONS.GET, "allPins", null)
	);
	const [pinCurrData, setPinCurrData] = useReducer(reducer, {
		imgUrl: "",
		title: "Undefined",
		desc: "Undefined",
		author: "Undefined",
		likes: 0,
		impressions: 0,
		downloads: 0,
		shares: 0,
	});
	return (
		<PinsContext.Provider value={[PinsData?.result, refetch]}>
			<CurrentPinContext.Provider value={[pinCurrData, setPinCurrData]}>
				{children}
			</CurrentPinContext.Provider>
		</PinsContext.Provider>
	);
};
