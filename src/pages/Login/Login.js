import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

import "./Login.css";
import { auth, provider } from "../../firebase";
import { login } from "../../features/appSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, uid } = res.user;
        dispatch(
          login({
            username: displayName,
            profilePic: photoURL,
            id: uid,
          })
        );
      })
      .catch((err) => console.warn(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="http://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <Button variant="outlined" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
