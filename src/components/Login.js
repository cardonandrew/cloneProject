import "./home.css";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logInUser } from "../api/requests";

const Login = ({ setUser, setToken }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const results = await logInUser(username, password);
    console.log("login results", results);
    setUser(results.user);
    setToken(results.token);
    window.localStorage.setItem("token", results.token);
    if (results.token) {
      handleLogin();
    } else {
      alert(` Incorrect username or password`);
    }
  };
  const handleLogin = () => {
    setUsername("");
    setPassword("");
    navigate("/");
  };

  return (
    <div className="loginpage">
      <form onSubmit={onLogin} className="login">
        <h3 id="modal-modal-title">Login</h3>
        <div id="inputdiv" className="ui input">
          <input
            type="text"
            placeholder="email"
            value={username}
            id="inputtext1"
            onChange={(e) => {
              setUsername(e.target.value);
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
