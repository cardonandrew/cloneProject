import { useEffect } from "react";
import "./home.css";
import { Post, Upload } from "./index";

const Home = ({ allPosts, token, user, newPost, setNewPost }) => {
  return (
    <div className="pageDiv">
      <div className="pageFeed">
        {/*all posts will appear here and at the to, for authorized users, will be a post form*/}
        <header>
          <h1 className="pageHeader">Home </h1>
        </header>
        {token && user ? (
          <h3 className="pageHeader2"> Welcome {user.username}! </h3>
        ) : (
          ""
        )}
        {token ? (
          <Upload
            token={token}
            newPost={newPost}
            setNewPost={setNewPost}
            user={user}
          />
        ) : (
          <h3>Login for full access</h3>
        )}
        <div className="feed">
          {allPosts.map((post) => {
            return (
              <Post
                key={post.id}
                postId={post.id}
                user={user}
                post={post}
                token={token}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
