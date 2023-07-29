import "./home.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Home = (props) => {
  const posts = props.seedPosts;
  console.log(posts);
  return (
    <body>
      <div className="homePage">
        <div className="feedPage">
          {/*all posts will appear here and at the top, for authorized users, will be a post form*/}
          <header>
            <h1 className="header1">Home</h1>
          </header>

          <div classname="feed">
            {posts
              ? posts.map((post) => {
                  return (
                    <div className="single-post">
                      <div className="postheader">
                        <div>
                          <img
                            id="profileImage"
                            className="ui tiny image"
                            src={post.profileImage}
                            alt="profilepic"
                          ></img>
                        </div>
                        <div className="userdiv">
                          <a href="music" className="header">
                            @{post.user}
                          </a>
                          {post.isVerified ? (
                            <h3 className="verified">
                              <BsPatchCheckFill size={20} />
                            </h3>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <p className="tweet">{post.tweet}</p>
                      {post.imageUrl ? (
                        <img
                          className="postImage"
                          src={post.imageUrl}
                          alt="pic"
                        ></img>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
