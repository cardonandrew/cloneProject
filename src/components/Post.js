import "./home.css";
import { HiBadgeCheck } from "react-icons/hi";
import { BiRepost, BiComment, BiHeart, BiSolidHeart } from "react-icons/bi";
import { RiUserAddFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";

const Post = ({ postId, post }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  let counter = 0;

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data(comments)));
        });
    }
    console.log(comments);
    return () => {
      unsubscribe();
    };
  }, [postId, comments]);

  const postComment = (event) => {
    event.preventDefault();
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ username: auth.currentUser.displayName, text: comment });
    setComment("");
  };

  return (
    <>
      <div className="single-post">
        <div className="postheader">
          <div className="profileImage">
            <Avatar
              id="profileImage"
              alt={post.user.toUpperCase()}
              src={post.profileImage}
            ></Avatar>
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
          <img className="postImage" src={post.imageUrl} alt="pic"></img>
        ) : (
          ""
        )}
        <div className="actionItems">
          <div className="amountPair">
            <div className="postactionbutton">
              <BiComment size={23} />
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
        <form id="inputdiv" className="ui action input">
          <input
            type="text"
            placeholder="Write comment here..."
            id="inputtext"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <button
            disabled={!comment}
            onClick={postComment}
            className="ui button"
            type="submit"
          >
            comment
          </button>
        </form>
        {comments.map((comment) => (
          <p key={counter} className="comment-line">
            <a href={`profile/${comment.username}`} className="nametag">
              @{comment.username}
            </a>
            {comment.text}
          </p>
        ))}
      </div>
    </>
  );
};

export default Post;
