import React, { createContext, useReducer, useEffect } from "react";
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
      localStorage.setItem("creamzoUser", "");
      return false;
    default:
      return login;
  }
};
const user = JSON.parse(localStorage.getItem("creamzoUser"));
export const Login = ({ children }) => {
  const [login, setLogin] = useReducer(reducer, false);
  // const [loginData,setLoginData] = useState({
  useEffect(() => {
    if (user !== "undefined" && user!=="") {
      setLogin({ type: LOGIN_ACTIONS.LOGIN });
    }
  }, []);
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
