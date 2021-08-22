import axios from "axios";
import { url } from "./../utils/api";

export const tags = (data) => {
	const withoutSpace = data.split(" ").join("");
	const withoutComma = withoutSpace.split("#");
	const updated = withoutComma.filter((item, index) => {
		if (index > 0) {
			return item.trim().toLowerCase();
		} else {
			return null;
		}
	});
	return updated;
};

export const handleLike = async (creamzoId, id, type) => {
	let data;
	await axios
		.post(`${url}/pin/${type}`, {
			creamzoId,
			id,
		})
		.then((res) => {
			data = res.data;
		})
		.catch((e) => {
			console.log(e.message);
			data = e.message;
		});
	return data;
};

export const handleCollect = async (creamzoId, id, type) => {
	let data;
	await axios
		.post(`${url}/pin/${type}`, {
			creamzoId,
			id,
		})
		.then((res) => {
			data = res.data;
		})
		.catch((e) => {
			console.log(e.message);
			data = e.message;
		});
	return data;
};
