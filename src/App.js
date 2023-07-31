import "./App.css";
import { seedPosts } from "./seedData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { HiMusicalNote } from "react-icons/hi2";
import { Modal } from "@mui/material";

import {
  Home,
  Explore,
  Notify,
  Lists,
  Message,
  Music,
  Community,
  Profile,
  PostForm,
} from "./components";
function App() {
  const [isMusic, setIsMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="sideNav">
          <Link id="mainLogo" to="/">
            <img
              alt="mainlogo"
              id="mainlogo"
              className="ui mini image"
              src="https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="home" to="/">
            <img
              alt="home"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="explore" to="/explore">
            <img
              alt="explore"
              id="navlogo"
              className="ui mini image"
              src="https://static.thenounproject.com/png/101791-200.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="notify" to="/notify">
            <img
              alt="notify"
              id="navlogo"
              className="ui mini image"
              src="https://icon-library.com/images/twitter-notification-icon/twitter-notification-icon-5.jpg"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="message" to="/message">
            <img
              alt="message"
              id="navlogo"
              className="ui mini image"
              src="https://icon-library.com/images/message-icon-transparent/message-icon-transparent-7.jpg"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="lists" to="/lists">
            <img
              alt="lists"
              id="navlogo"
              className="ui mini image"
              src="https://static.thenounproject.com/png/1327293-200.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="community" to="/community">
            <img
              alt="community"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="profile" to="/profile">
            <img
              alt="profile"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="post" to="/post">
            <img
              alt="post"
              className="postlogo"
              src="https://icons-for-free.com/iconfiles/png/512/tweet+post+twitter+write+icon-1320196019185766457.png"
            ></img>
          </Link>
          <div
            onClick={() => {
              if (!isMusic) {
                setIsMusic(true);
                setIsPlaying(true);
              } else {
                setIsPlaying(false);
                setIsMusic(false);
              }
            }}
          >
            <HiMusicalNote
              alt="music"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/4430/4430494.png"
              //onClick={()=>{}}
            ></HiMusicalNote>
          </div>
          <button className="ui mini button" onClick={handleOpen}>
            Login
          </button>
          <Modal className="modal" open={open} onClose={handleClose}>
            <div>
              <div id="modal-modal-title" variant="h6" component="h2">
                Please Sign In
              </div>
              <div id="inputdiv" className="ui action input">
                <input type="text" placeholder="username" id="inputtext1" />
                <input type="text" placeholder="password" id="inputtext" />
                <button className="ui button" id="inputbutton">
                  Sign In
                </button>
              </div>
            </div>
          </Modal>
        </div>
        {isMusic ? (
          <div className="tofront">
            <Music isPlaying={isPlaying} />
          </div>
        ) : (
          ""
        )}

        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home seedPosts={seedPosts} />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/notify" exact element={<Notify />} />
            <Route path="/lists" exact element={<Lists />} />
            <Route path="/message" exact element={<Message />} />
            <Route path="/community" exact element={<Community />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/post" exact element={<PostForm />} />
            <Route path="/music" exact element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
