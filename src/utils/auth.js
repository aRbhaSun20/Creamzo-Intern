import { useHistory } from "react-router-dom";
import { useStateValue } from "./../StateProvider";

export const Auth = () => {
	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();
	const history = useHistory();

	const user = JSON.parse(localStorage.getItem("user"));
	if (user) {
		return user;
	} else {
		history.push("/");
		dispatch({ type: "SHOW_LOGIN" });
		return;
	}
};
export const User = () => {
	// eslint-disable-next-line
	const [{}, dispatch] = useStateValue();
	// eslint-disable-next-line
	const history = useHistory();

	const user = JSON.parse(localStorage.getItem("user"));
	if (user) {
		return user;
	} else {
		return;
	}
};
