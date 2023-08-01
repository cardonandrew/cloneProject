import "./home.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = (props) => {
  return (
    <div className="login">
      <h3 id="modal-modal-title">Create Account</h3>
      <div id="inputdiv" className="ui input">
        <input type="text" placeholder="Email" />
      </div>
      <div id="inputdiv" className="ui input">
        <input type="text" placeholder="username" />
      </div>
      <div id="inputdiv" className="ui input">
        <input placeholder="password" type="password" />
      </div>
      <Button className="ui button" id="inputbutton1">
        Sign Up
      </Button>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
