import "./home.css";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/requests";

const Signup = ({ setToken }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const signup = async (event) => {
    console.log("onSubmitHandler() called");
    event.preventDefault();
    const results = await registerUser(username, password, email);
    console.log("results", results);
    setToken(results.token);
    window.localStorage.setItem("token", results.token);
    if (results.token) {
      handleRegister();
    } else {
      alert(` The username ${username} is already registered`);
    }
  };

  const handleRegister = () => {
    setUsername("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="loginpage">
      <form onSubmit={signup} className="login">
        <h3 id="modal-modal-title">Create Account</h3>
        <div id="inputdiv" className="ui input">
          <input
            type="text"
            placeholder="email"
            value={email}
            className="inputtext1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id="inputdiv" className="ui input">
          <input
            type="text"
            placeholder="username"
            value={username}
            className="inputtext1"
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
            className="inputtext"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button className="ui button" id="inputbutton1" type="submit">
          Sign Up
        </Button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
