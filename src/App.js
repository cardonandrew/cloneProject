import "./App.css";
// import { seedPosts } from "./seedData";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPosts } from "./api/requests.js";
import { Avatar } from "@mui/material";
import {
  Home,
  Explore,
  Notify,
  Lists,
  Message,
  Community,
  Profile,
  PostForm,
  Login,
  Signup,
  Upload,
} from "./components";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [user, setUser] = useState();
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );
  console.log("allPosts:", allPosts);
  console.log("user", user);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const posts = await fetchPosts();
        setAllPosts(posts.posts);
      } catch (error) {
        console.error(error);
      }
    };

    getAllPosts();
  }, []);

  const handlelogout = () => {
    setToken(null);
    setUser(null);
  };

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
            <Avatar alt="profile"></Avatar>
          </Link>

          {!user ? (
            <Link className="link-header" to="/signup">
              LOGIN
            </Link>
          ) : (
            <Link className="link-header" onClick={handlelogout}>
              LOGOUT
            </Link>
          )}
        </div>

        <div className="main">
          <Routes>
            <Route
              path="/"
              exact
              element={<Home allPosts={allPosts} user={user} />}
            />
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
                <Login user={user} setUser={setUser} setToken={setToken} />
              }
            />
            <Route
              path="/signup"
              exact
              element={
                <Signup setToken={setToken} user={user} setUser={setUser} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
