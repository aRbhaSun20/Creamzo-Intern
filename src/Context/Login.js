import React, { createContext, useReducer } from "react";
import { BlogsProvider } from "./BlogsContext";
import { PinsProvider } from "./PinsContext";

export const LoginContext = createContext();

export const LOGIN_ACTIONS = {
	LOGIN: "LOGIN",
	LOGOUT: "LOGOUT",
};

const reducer = (login, action) => {
	switch (action.type) {
		case LOGIN_ACTIONS.LOGIN:
			return true;
		case LOGIN_ACTIONS.LOGOUT:
			return false;
		default:
			return login;
	}
};

export const Login = ({ children }) => {
	const [login, setLogin] = useReducer(reducer, false);
	return (
		<LoginContext.Provider value={[login, setLogin]}>
			<BlogsProvider>
				<PinsProvider>{children}</PinsProvider>
			</BlogsProvider>
		</LoginContext.Provider>
	);
};
