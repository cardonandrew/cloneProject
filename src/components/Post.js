import "./home.css";
import { HiBadgeCheck } from "react-icons/hi";
import { BiRepost, BiComment, BiHeart, BiSolidHeart } from "react-icons/bi";
import { RiUserAddFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { useState } from "react";

const Post = ({ postId, post, token }) => {
  const [comment, setComment] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);

  //! To show comments, first Ill bring in the api call "getcommentsbypostid", I'll have to ask if the specific post that I'm on within the map is equal to any in the comments database, if it is I'll display them with all the props. If the post belongs to the current user, an edit and delete button will appear, and the will be connected onclick to the api calls "editComment" and "deleteComment"

  //!  To post comments ill bring in the api call "createComment" and give it the date, username, postId, and commenttext.

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
        {commentOpen && token ? (
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
