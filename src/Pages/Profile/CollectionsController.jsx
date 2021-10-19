import React, { useEffect, useState } from "react";
import DeletePinButton from "../../Components/Profile/DeletePinButton";
import { usePin } from "../../Context/PinsContext";
import { useUploads } from "../../Context/UploadsContext";
import UserCollectionTemplate from "./UserCollectionTemplate";

export default function CollectionsController({ type }) {
	const [filteredData, setFilteredData] = useState([]);
	const [pinsData] = usePin();
	const [uploadData] = useUploads();
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
				data = uploadData;
				break;

			default:
				return <React.Fragment />;
		}

		setFilteredData(data);
		// eslint-disable-next-line
	}, [type, pinsData, uploadData, creamzoUser]);

	return (
		<div
			className="CollectionDataContainer"
			style={{
				width: "90vw",
				marginTop: "3rem",
			}}
		>
			<UserCollectionTemplate pinsData={filteredData}>
				{type === UPLOADS
					? (id) => (
							<React.Fragment>
								<DeletePinButton id={id} />
							</React.Fragment>
					  )
					: null}
			</UserCollectionTemplate>
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

		console.log("lol", userCollections);
		return userCollections;
	}

	return [];
}
