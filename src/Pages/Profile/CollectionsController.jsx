import React, { useEffect, useState } from "react";
import { usePin } from "../../Context/PinsContext";
import { axiosSendRequest, AXIOS_ACTIONS } from "../../utils/AxiosSendRequest";
import UserCollectionTemplate from "./UserCollectionTemplate";

export default function CollectionsController({ type }) {
	const [filteredData, setFilteredData] = useState([]);
	// eslint-disable-next-line
	const [pinsData, refetch] = usePin();
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
				userUploads(creamzoUser)
					.then((uploads) => {
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

function likedPins(pinsData, creamzoUser) {
	if (creamzoUser?.creamzoId) {
		const likedPins = pinsData.filter((pinData) =>
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

function userUploads(creamzoUser) {
	if (creamzoUser) {
		return axiosSendRequest(
			AXIOS_ACTIONS.GET,
			`myUploads/${creamzoUser.creamzoId}`
		);
	}

	return new Promise((resolve) => {
		resolve([]);
	});
}
