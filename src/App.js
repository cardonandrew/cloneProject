import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  Home,
  Explore,
  Notify,
  Lists,
  Message,
  Community,
  Profile,
  PostForm,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sideNav">
          <Link id="mainLogo" to="/">
            <img
              alt="mainlogo"
              id="navlogo"
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
              src="https://icon-library.com/images/birdhouse-512_8384.png"
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
              src="https://cdn-icons-png.flaticon.com/512/6652/6652754.png"
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
              id="postlogo"
              className="ui mini image"
              src="https://www.allpointsnorthfoundation.org/wp-content/uploads/2019/12/write-tweet.png"
              //onClick={()=>{}}
            ></img>
          </Link>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/notify" exact element={<Notify />} />
            <Route path="/lists" exact element={<Lists />} />
            <Route path="/message" exact element={<Message />} />
            <Route path="/community" exact element={<Community />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/post" exact element={<PostForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
