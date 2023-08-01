import "./App.css";
import { seedPosts } from "./seedData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMusicalNote } from "react-icons/hi2";
import { Button } from "@mui/material";
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
  Login,
  Signup,
} from "./components";

function App() {
  const [isMusic, setIsMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleOpenSignup = () => setOpenSignup(true);

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
          <Link className="link-header" to="/signup">
            REGISTER
          </Link>
          {/* {!newUser ? (
            <Login
              open={openLogin}
              setOpen={setOpenLogin}
              isNewUser={newUser}
              setNewUser={setNewUser}
            />
          ) : (
            <Signup
              open={openSignup}
              setOpen={setOpenSignup}
              isNewUser={newUser}
              setNewUser={setNewUser}
            />
          )} */}
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
            <Route
              path="/login"
              element={
                <Login
                  open={openLogin}
                  setOpen={setOpenLogin}
                  // isNewUser={newUser}
                  // setNewUser={setNewUser}
                />
              }
            />
            <Route path="/signup" exact element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
