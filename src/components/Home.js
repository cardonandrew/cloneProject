import "./home.css";
import { Post } from "./index";
import { useState, useEffect } from "react";
import { db, storage, auth } from "../firebase";
import Postupload from "./Postupload";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const user = props.user;

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="pageDiv">
      <div className="pageFeed">
        {/*all posts will appear here and at the to, for authorized users, will be a post form*/}
        <header>
          <h1 className="pageHeader">Home </h1>
        </header>
        {user ? (
          <h3 className="pageHeader2"> Welcome {user.displayName}! </h3>
        ) : (
          ""
        )}
        {user ? <Postupload /> : <h3>Login for full access</h3>}
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
