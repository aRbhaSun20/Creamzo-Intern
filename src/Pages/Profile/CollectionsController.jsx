import React, { useEffect, useState } from "react";
import { usePin } from "../../Context/PinsContext";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import UserCollectionTemplate from "./UserCollectionTemplate";

export default function CollectionsController({ type }) {
	const [filteredData, setFilteredData] = useState([]);
	// eslint-disable-next-line
	const [pinsData, refetch] = usePin();

	const { LIKED, COLLECTION, UPLOADS } = COLLECTION_ACTIONS;

	useEffect(() => {
		let data = [];

		switch (type) {
			case LIKED:
				data = likedPins(pinsData);
				break;

			case COLLECTION:
				data = userCollection(pinsData);
				break;

			case UPLOADS:
				userUploads()
					.then((uploads) => {
						console.log("upload", uploads);
						if (type === UPLOADS) setFilteredData(uploads);
					})
					.catch((err) => console.log(err));
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

function likedPins(pinsData) {
	const { creamzoId } = JSON.parse(localStorage.getItem("creamzoUser"));

	const likedPins = pinsData.filter((pinData) =>
		pinData.likes.includes(creamzoId)
	);

	return likedPins;
}

function userCollection(pinsData) {
	const { collections } = JSON.parse(localStorage.getItem("creamzoUser"));

	const userCollections = pinsData.filter((pinData) =>
		collections.includes(pinData._id)
	);

	return userCollections;
}

function userUploads() {
	const { creamzoId } = JSON.parse(localStorage.getItem("creamzoUser"));

	return axiosSendRequest(AXIOS_ACTIONS.GET, `myUploads/${creamzoId}`);
}
