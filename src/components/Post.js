import "./home.css";
import { HiBadgeCheck } from "react-icons/hi";
import { BiRepost, BiComment, BiHeart, BiSolidHeart } from "react-icons/bi";
import { RiUserAddFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";

const Post = ({ postId, post, user }) => {
  const [comment, setComment] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <>
      <div className="single-post">
        <div className="postheader">
          <div className="profileImage">
            <Avatar
              id="profileImage"
              alt={post.username.toUpperCase()}
              src={post.profileImage}
            ></Avatar>
          </div>
          <div className="userdiv">
            <a href={`profile/${post.username}`} className="header">
              @{post.username}
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
          <img className="postImage" src={post.imageUrl} alt="pic"></img>
        ) : (
          ""
        )}
        <div className="actionItems">
          <div className="amountPair">
            <div className="postactionbutton">
              <BiComment
                onClick={() => {
                  commentOpen ? setCommentOpen(false) : setCommentOpen(true);
                }}
                size={23}
              />
            </div>
            <p className="amount">{post.commentAmount}</p>
          </div>
          <div className="amountPair">
            <div className="postactionbutton">
              <BiRepost size={30} />
            </div>
            <p className="amount">{post.repostAmount}</p>
          </div>
          <div className="amountPair">
            <div className="postactionbutton">
              {!post.isLiked ? (
                <BiHeart size={23} />
              ) : (
                <BiSolidHeart id="redheart" size={23} />
              )}
            </div>
            <p className="amount">{post.likeAmount}</p>
          </div>
        </div>
        {commentOpen && user ? (
          <form id="inputdiv" className="ui action input">
            <input
              type="text"
              placeholder="Write comment here..."
              id="inputtext"
              value={comment}
              onChange={(event) => {}}
            />
            <button className="ui button" type="submit">
              comment
            </button>
          </form>
        ) : (
          ""
        )}

        {/* {user
          ? comments.map((comment) => (
              <p className="comment-line">
                <a href={`profile/${comment.username}`} className="nametag">
                  @{comment.username}
                </a>
                {comment.text}
              </p>
            ))
          : ""} */}
      </div>
    </>
  );
};

export default Post;
