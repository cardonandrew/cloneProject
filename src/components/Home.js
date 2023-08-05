import "./home.css";
import { Post, Upload } from "./index";
import { useState, useEffect } from "react";

const Home = ({ allPosts, user }) => {
  return (
    <div className="pageDiv">
      <div className="pageFeed">
        {/*all posts will appear here and at the to, for authorized users, will be a post form*/}
        <header>
          <h1 className="pageHeader">Home </h1>
        </header>
        {user ? (
          <h3 className="pageHeader2"> Welcome {user.username}! </h3>
        ) : (
          ""
        )}
        {user ? <Upload user={user} /> : <h3>Login for full access</h3>}
        <div className="feed">
          {allPosts.map((post) => {
            return <Post key={post.id} post={post} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
