import React, { createContext, useReducer } from "react";
import { ArticlesProvider } from "./ArticlesContext";
import { BlogsProvider } from "./BlogsContext";
import { PinsProvider } from "./PinsContext";

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
			sessionStorage.setItem("creamzToken", "");
			return false;
		default:
			return login;
	}
};

export const Login = ({ children }) => {
	const [login, setLogin] = useReducer(reducer, false);
	// const [loginData,setLoginData] = useState({

	// })
	return (
		<LoginContext.Provider value={[login, setLogin]}>
			<BlogsProvider>
				<PinsProvider>
					<ArticlesProvider>{children}</ArticlesProvider>
				</PinsProvider>
			</BlogsProvider>
		</LoginContext.Provider>
	);
};
