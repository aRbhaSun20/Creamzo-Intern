import React, { useEffect, useState } from "react";
import { usePin } from "../../Context/PinsContext";
import { useUploads } from "../../Context/UploadsContext";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import UserCollectionTemplate from "./UserCollectionTemplate";

export default function CollectionsController({ type }) {
	const [filteredData, setFilteredData] = useState([]);
	// eslint-disable-next-line
	const [pinsData, refetch] = usePin();
	const [uploadData, refetc] = useUploads();
	const creamzoUser = JSON.parse(localStorage.getItem("creamzoUser"));

	const { LIKED, COLLECTION, UPLOADS } = COLLECTION_ACTIONS;

	useEffect(() => {
		let data = [];

		switch (type) {
			case LIKED:
				data = likedPins(pinsData, creamzoUser);
				break;

			case COLLECTION:
				data = userCollection(pinsData, creamzoUser);
				break;

			case UPLOADS:
				console.log("uploads", uploadData);
				data = uploadData;
				break;

			default:
				return <React.Fragment />;
		}

		setFilteredData(data);
		// eslint-disable-next-line
	}, [type, pinsData]);

	return (
		<div
			className="CollectionDataContainer"
			style={{
				width: "90vw",
				marginTop: "3rem",
			}}
		>
			<UserCollectionTemplate pinsData={filteredData} />
		</div>
	);
}

export const COLLECTION_ACTIONS = {
	LIKED: "LIKED",
	COLLECTION: "COLLECTION",
	UPLOADS: "UPLOADS",
};

function likedPins(pinsData, creamzoUser) {
	if (creamzoUser?.creamzoId && Array.isArray(pinsData)) {
		const likedPins = pinsData?.filter((pinData) =>
			pinData.likes.includes(creamzoUser.creamzoId)
		);
		return likedPins;
	}

	return [];
}

function userCollection(pinsData, creamzoUser) {
	if (creamzoUser?.collections) {
		const userCollections = pinsData.filter((pinData) =>
			creamzoUser.collections.includes(pinData._id)
		);

		return userCollections;
	}

	return [];
}
