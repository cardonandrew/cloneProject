import "./home.css";
import React from "react";
import { Modal, Button } from "@mui/material";

const Login = (props) => {
  const handleClose = () => props.setOpen(false);
  const handleLogin = () => props.setNewUser(true);

  return (
    <>
      <Modal className="modal" open={props.open} onClose={handleClose}>
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
          <Button
            onClick={() => {
              handleLogin();
            }}
          >
            Create Account
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Login;
