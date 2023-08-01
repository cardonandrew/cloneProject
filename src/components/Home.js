import "./home.css";
import { Post } from "./index";
import { useState, useEffect } from "react";
import { db } from "../firebase";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);
  console.log("posts", posts);
  return (
    <div className="pageDiv">
      <div className="pageFeed">
        {/*all posts will appear here and at the to, for authorized users, will be a post form*/}
        <header>
          <h1 className="pageHeader">Home</h1>
        </header>
        <div id="inputdiv" className="ui action input">
          <input
            type="text"
            placeholder="What's on your mind?"
            id="inputtext"
          />
          <button className="ui button" id="inputbutton">
            Post
          </button>
        </div>

        <div className="feed">
          {posts.map(({ id, post }) => {
            return <Post key={id} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
