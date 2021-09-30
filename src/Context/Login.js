import React, { createContext, useEffect, useReducer } from "react";
import { ArticlesProvider } from "./ArticlesContext";
import { BlogsProvider } from "./BlogsContext";
import { PinsProvider } from "./PinsContext";
import { UploadsProvider } from "./UploadsContext";

export const LoginContext = createContext();
// export const LoginDataContext = createContext()

export const LOGIN_ACTIONS = {
	LOGIN: "LOGIN",
	LOGOUT: "LOGOUT",
};

const reducer = (login, action) => {
	switch (action.type) {
		case LOGIN_ACTIONS.LOGIN:
			return true;
		case LOGIN_ACTIONS.LOGOUT:
			localStorage.removeItem("creamzoUser");
			// localStorage.setItem("creamzoUser", "");
			return false;
		default:
			return login;
	}
};

export const Login = ({ children }) => {
	const [login, setLogin] = useReducer(reducer, false);
	const user = JSON.parse(localStorage.getItem("creamzoUser"));

	useEffect(() => {
		if (user && typeof user !== "undefined") {
			setLogin({ type: LOGIN_ACTIONS.LOGIN });
		}

		// eslint-disable-next-line
	}, []);

	return (
		<LoginContext.Provider value={[login, setLogin]}>
			<BlogsProvider>
				<PinsProvider>
					<ArticlesProvider>
						<UploadsProvider>{children}</UploadsProvider>
					</ArticlesProvider>
				</PinsProvider>
			</BlogsProvider>
		</LoginContext.Provider>
	);
};
