import axios from "axios";
// const FormDatas = require("form-data");

export const AXIOS_ACTIONS = {
	GET: "GET",
	POST: "POST",
	DELETE: "DELETE",
	URL: `https://intense-meadow-34129.herokuapp.com`,
	//   URL: `http://localhost:5000`,
	HEADERS: {
		"Content-Type": "application/json",
	},
	PUT: "put",
	SIGNUP: "SIGNUP",
	EDIT: "EDIT",
	LOGOUT: "LOGOUT",
	REGISTER: "REGISTER",
	CREATE_PIN: "CREATE_PIN",
	GOOGLE_SIGNUP: "google_signup",
	IMAGE_UPLOAD: "IMG_UPLOAD",
};

export const axiosSendRequest = async (type, url, sendData) => {
	let config = {};

	switch (type) {
		case AXIOS_ACTIONS.GET:
			config = {
				method: "get",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				headers: AXIOS_ACTIONS.HEADERS,
			};
			break;

		case AXIOS_ACTIONS.POST:
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				headers: AXIOS_ACTIONS.HEADERS,
				data: JSON.stringify(sendData),
			};
			break;

		case AXIOS_ACTIONS.EDIT:
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				headers: AXIOS_ACTIONS.HEADERS,
				data: JSON.stringify(sendData),
			};
			break;

		case AXIOS_ACTIONS.DELETE:
			config = {
				method: "delete",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				headers: AXIOS_ACTIONS.HEADERS,
				data: JSON.stringify(sendData),
			};
			break;

		case AXIOS_ACTIONS.SIGNUP:
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				data: sendData,
			};
			break;

		case AXIOS_ACTIONS.GOOGLE_SIGNUP:
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				data: JSON.stringify(sendData),
				headers: AXIOS_ACTIONS.HEADERS,
			};
			break;

		case AXIOS_ACTIONS.LOGOUT:
			let formLogout = new FormData();
			formLogout.append("user_id", sendData.user_id);
			formLogout.append("token", sendData.token);
			formLogout.append("email", sendData.email);
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				headers: { ...formLogout.getHeaders() },
				data: formLogout,
			};
			break;

		case AXIOS_ACTIONS.CREATE_PIN:
			let formCreate = new FormData();
			formCreate.append("title", sendData.title);
			formCreate.append("websiteUrl", sendData.link);
			formCreate.append("desc", sendData.description);
			formCreate.append("author", sendData.fname);
			formCreate.append("category", sendData.category);
			formCreate.append("tags", sendData.tags);
			formCreate.append("creamzoId", sendData.creamzoId);
			formCreate.append("file1", sendData.imgPath);
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				data: formCreate,
			};
			break;

		case AXIOS_ACTIONS.IMAGE_UPLOAD:
			let formImage = new FormData();
			formImage.append("image", sendData.image);
			config = {
				method: "post",
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				data: formImage,
			};
			break;

		case AXIOS_ACTIONS.PUT:
			config = {
				method: "put",
				headers: AXIOS_ACTIONS.HEADERS,
				url: `${AXIOS_ACTIONS.URL}/${url}`,
				data: JSON.stringify(sendData),
			};
			break;

		default:
			return null;
	}
	const { data } = await axios(config).catch((e) => {
		console.log(e);
		return { data: "" };
	});

	return data;
};
