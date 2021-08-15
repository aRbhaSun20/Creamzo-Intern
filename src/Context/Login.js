import React, { createContext, useReducer } from "react";

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
	const [login, setLogin] = useReducer(reducer, true);
	return (
		<LoginContext.Provider value={[login, setLogin]}>
			{children}
		</LoginContext.Provider>
	);
};
