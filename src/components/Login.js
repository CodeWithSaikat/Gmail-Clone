import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/mailReducer.js";
import { auth, provider } from "../firebase.js";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const singIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login" onClick={singIn}>
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png"
          alt=""
        />
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Login;
