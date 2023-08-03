import "./home.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const user = props.user;
  const setUser = props.setUser;
  const navigate = useNavigate();

  useEffect(() => {
    const noDupe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      noDupe();
    };
  }, [user, username]);

  const signup = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
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
