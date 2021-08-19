import React, { useContext, useState } from "react";

import { Button} from "@material-ui/core";

import "./style/style.css";
import fb from "./assets/fb.png";
import google from "./assets/google.png";

import { LoginContext, LOGIN_ACTIONS } from "../../Context/Login";

const Login = ({ setopen, setSignopen }) => {
  const [mail, setMail] = useState("");
  // eslint-disable-next-line
  const [login, setLogin] = useContext(LoginContext);
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <div className="login-card">
        <div className="top-header">
          <div
            className="title"
            style={{
              position: "relative",
              top: "-0.5em",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            Hello, Welcome Back!
          </div>
          <div className="buttons-gp">
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                console.log("google");
              }}
              style={{
                backgroundColor: "#d4d4d4",
                color: "black",
                width: "12em",
                borderRadius: "1.2em",
                fontSize: ".6rem",
              }}
            >
              <img
                src={google}
                alt="google"
                style={{ maxWidth: "1.5em", height: "1.5em" }}
              />
              Google
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                console.log("fb");
              }}
              style={{
                backgroundColor: "#d4d4d4",
                color: "black",
                width: "13em",
                fontSize: ".6rem",
              }}
            >
              <img
                src={fb}
                alt="fb"
                style={{ maxWidth: "2em", height: "2em" }}
              />
              FaceBook
            </Button>
          </div>
          <div className="or">or</div>
        </div>
        <div className="bottom-header">
          <input
            type="text"
            value={mail}
            onChange={(e) => {
              e.preventDefault();
              setMail(e.target.value);
            }}
            style={{
              width: "20em",
              fontSize: ".8rem",
              height: "3em",
            }}
            placeholder="name@gmail.com"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
            placeholder="*******"
            style={{
              width: "20em",
              fontSize: ".8rem",
              height: "3em",
            }}
          />
          <div className="login-forget">
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setLogin({ type: LOGIN_ACTIONS.LOGIN });
                setopen(false);
              }}
              style={{
                backgroundColor: "#d4d4d4",
                color: "black",
                fontSize: ".6rem",
              }}
            >
              Log In
            </Button>
            <div className="forget">Forget Password?</div>
          </div>
          <div className="dont-have">
            Don’t have an account?
            <span
              onClick={(e) => {
                e.preventDefault();
                setopen(false);
                setSignopen(true);
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
