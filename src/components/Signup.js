import "./home.css";
import React, { useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/requests";

const Signup = ({ setUser, loginOut, setLoginOut }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const navigate = useNavigate();

  const signup = async (event) => {
    event.preventDefault();
    const results = await registerUser(
      username,
      password,
      email,
      isVerified,
      profileImage
    );
    setUser(results.user);
    window.localStorage.setItem("user", JSON.stringify(results.user));
    window.localStorage.setItem("token", results.token);
    if (results.user) {
      handleRegister();
    } else {
      alert(` The username ${username} is already registered`);
    }
  };

  const handleRegister = () => {
    if (loginOut) {
      setLoginOut(false);
    } else {
      setLoginOut(true);
    }
    setUsername("");
    setPassword("");
    navigate("/login");
  };
  const checkHandler = () => {
    setIsVerified(!isVerified);
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
        <div id="inputdiv" className="ui input">
          <input
            placeholder="profile image url"
            value={profileImage}
            type="link"
            className="inputtext"
            onChange={(e) => {
              setProfileImage(e.target.value);
            }}
          />
        </div>
        <div id="inputdiv" className="ui input">
          <h2 id="modal-modal-title">Are you famous?</h2>
          <input
            type="checkbox"
            id="checkbox"
            checked={isVerified}
            onChange={checkHandler}
          />
        </div>
        <Button className="ui button" id="inputbutton1" type="submit">
          Sign Up
        </Button>
        <Link to="/login">I already have an account</Link>
      </form>
    </div>
  );
};

export default Signup;
