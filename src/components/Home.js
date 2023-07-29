import "./home.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { BiRepost, BiComment, BiHeart, BiSolidHeart } from "react-icons/bi";
import { RiUserAddFill } from "react-icons/ri";
// import { useState } from "react";

const Home = (props) => {
  const posts = props.seedPosts;
  // console.log(posts);
  // const findHashtag = (tweet) => {
  //   const hashTags = tweet.match(/#[a-z]+/gi);
  //   let newTweet;
  //   if (hashTags) {
  //     for (let hash of hashTags) {
  //       newTweet = tweet.replace(hash, "");
  //     }
  //   }
  //   return newTweet;
  //   console.log(hashTags);
  // };
  return (
    <body>
      <div className="pageDiv">
        <div className="pageFeed">
          {/*all posts will appear here and at the top, for authorized users, will be a post form*/}
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
            {posts
              ? posts.map((post) => {
                  return (
                    <div className="single-post">
                      <div className="postheader">
                        <div className="profileImage">
                          <img
                            id="profileImage"
                            className="ui tiny image"
                            src={post.profileImage}
                            alt="profilepic"
                          ></img>
                        </div>
                        <div className="userdiv">
                          <a href={`profile/${post.user}`} className="header">
                            @{post.user}
                          </a>
                          {post.isVerified ? (
                            <h3 className="verified">
                              <HiBadgeCheck size={20} />
                            </h3>
                          ) : (
                            ""
                          )}
                        </div>
                        <RiUserAddFill size={20} />
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
                      <div className="actionItems">
                        <div className="amountPair">
                          <div className="postactionbutton">
                            <BiComment size={23} />
                          </div>
                          <p className="amount">
                            {post.commentAmount.toLocaleString("en-US")}
                          </p>
                        </div>
                        <div className="amountPair">
                          <div className="postactionbutton">
                            <BiRepost size={30} />
                          </div>
                          <p className="amount">
                            {post.repostAmount.toLocaleString("en-US")}
                          </p>
                        </div>
                        <div className="amountPair">
                          <div className="postactionbutton">
                            {!post.isLiked ? (
                              <BiHeart size={23} />
                            ) : (
                              <BiSolidHeart id="redheart" size={23} />
                            )}
                          </div>
                          <p className="amount">
                            {post.likeAmount.toLocaleString("en-US")}
                          </p>
                        </div>
                      </div>
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
