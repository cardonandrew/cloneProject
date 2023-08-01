import "./home.css";
import React from "react";
import { Modal, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <>
      <form className="login">
        <h3 id="modal-modal-title">Login</h3>
        <div id="inputdiv" className="ui input">
          <input type="text" placeholder="username" id="inputtext1" />
        </div>
        <div id="inputdiv" className="ui input">
          <input placeholder="password" type="password" id="inputtext" />
        </div>
        <Button className="ui button" id="inputbutton1">
          Sign In
        </Button>
        <Link to="/signup">Create Account</Link>
      </form>
    </>
  );
};

export default Login;
