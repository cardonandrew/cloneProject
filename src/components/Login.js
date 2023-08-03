import "./home.css";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const user = props.user;
  const setUser = props.setUser;
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(
        auth.signInWithEmailAndPassword(email, password).then((authUser) => {
          // Signed in
          setUser(authUser.user);
          navigate("/");
        })
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="loginpage">
      <form onSubmit={onLogin} className="login">
        <h3 id="modal-modal-title">Login</h3>
        <div id="inputdiv" className="ui input">
          <input
            type="text"
            placeholder="email"
            value={email}
            id="inputtext1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id="inputdiv" className="ui input">
          <input
            placeholder="password"
            value={password}
            type="password"
            id="inputtext"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button className="ui button" id="inputbutton1" type="submit">
          Sign In
        </Button>
        <Link to="/signup">Create Account</Link>
      </form>
    </div>
  );
};

export default Login;
