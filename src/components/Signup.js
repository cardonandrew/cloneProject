import "./home.css";
import React from "react";
import { Modal, Button } from "@mui/material";
import { Form } from "semantic-ui-react";

const Signup = (props) => {
  const handleClose = () => props.setOpen(false);
  const handleLogin = () => props.setNewUser(false);

  return (
    <>
      <Modal className="modal" open={props.open} onClose={handleClose}>
        <div className="login">
          <h3 id="modal-modal-title">Create Account</h3>
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
            Login
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Signup;
