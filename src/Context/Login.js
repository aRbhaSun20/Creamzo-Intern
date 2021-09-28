import React, { createContext, useReducer,  } from "react";
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
      localStorage.removeItem("creamzoUser");
      // localStorage.setItem("creamzoUser", "");
      return false;
    default:
      return login;
  }
};
// const user = JSON.parse(localStorage.getItem("creamzoUser"));
export const Login = ({ children }) => {
  const [login, setLogin] = useReducer(reducer, false);
  
  // useEffect(() => {
  //   if(typeof(user)!=='undefined'){
  //     setLogin({type:LOGIN_ACTIONS.login})
  //   }
   
  // }, [])
 
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
