import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
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

  const seedPosts = [
    {
      user: "devin123",
      tweet: "CODING IS SO FUN🤪",
      isVerified: false,
      imageUrl:
        "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
    {
      user: "Todd123",
      tweet:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
    {
      user: "wtfareyou30349",
      tweet: "I love to code!",
      isVerified: false,
      imageUrl: "",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
    {
      user: "ohcrapxoxo",
      tweet:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
    {
      user: "zodmaster",
      tweet: "I love to code!",
      isVerified: false,
      imageUrl: "",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
    {
      user: "happy30to20",
      tweet:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isVerified: true,
      imageUrl:
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg",
      profileImage:
        "https://cew.org/wp-content/uploads/2022/04/Angela-Simpson-Square-Headshot.jpg",
    },
  ];

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
          {/* <Link id="music" to="/music"> */}
          <div
            onClick={() => {
              isMusic
                ? setIsMusic(false) && setIsPlaying(false)
                : setIsMusic(true);
              setIsPlaying(true);
            }}
          >
            <img
              alt="music"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/4430/4430494.png"
              //onClick={()=>{}}
            ></img>
          </div>
          <Link id="post" to="/post">
            <img
              alt="post"
              id="postlogo"
              className="ui mini image"
              src="https://www.allpointsnorthfoundation.org/wp-content/uploads/2019/12/write-tweet.png"
              //onClick={()=>{}}
            ></img>
          </Link>
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
            <Route path="/music" exact element={<Music />} />
            <Route path="/post" exact element={<PostForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
