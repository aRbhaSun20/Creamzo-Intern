import React, { useState } from "react";
import style from "./style/style.module.css";
import CollectionsController, {
	COLLECTION_ACTIONS,
} from "../../Pages/Profile/CollectionsController";

export default function CollectionsMyuploads() {
	const { LIKED, COLLECTION, UPLOADS } = COLLECTION_ACTIONS;
	const [type, setType] = useState(LIKED);

	const handleClick = (event) => {
		setType(event.target.id);
	};

	const isActive = (typeName) => (type === typeName ? style.active : "");

	return (
		<div className={style.collectionContainer}>
			<div
				className={style.linksContainer}
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<button
					id={LIKED}
					className={`${style.collection_button} ${isActive(LIKED)}`}
					onClick={handleClick}
				>
					Liked
				</button>

				<button
					id={COLLECTION}
					className={`${style.collection_button} ${isActive(COLLECTION)}`}
					onClick={handleClick}
				>
					Collections
				</button>

				<button
					id={UPLOADS}
					className={`${style.collection_button} ${isActive(UPLOADS)}`}
					onClick={handleClick}
				>
					My uploads
				</button>
			</div>

			<CollectionsController type={type} />
		</div>
	);
}
