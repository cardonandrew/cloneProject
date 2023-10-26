import "./home.css";
import { Post, Upload } from "./index";

const Home = ({ allPosts, token, user, setNewPost }) => {
  return (
    <div className="pageDiv">
      <div className="pageFeed">
        {/*all posts will appear here and at the to, for authorized users, will be a post form*/}
        <header>
          <h1 className="pageHeader">Home </h1>
        </header>
        {token ? (
          <h3 className="pageHeader2"> Welcome {user.username}! </h3>
        ) : (
          ""
        )}
        {token ? (
          <Upload token={token} setNewPost={setNewPost} user={user} />
        ) : (
          <h3>Login for full access</h3>
        )}
        <div className="feed">
          {allPosts.map((post) => {
            return <Post key={post.id} post={post} token={token} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
