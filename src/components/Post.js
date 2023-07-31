import "./home.css";
import { HiBadgeCheck } from "react-icons/hi";
import { BiRepost, BiComment, BiHeart, BiSolidHeart } from "react-icons/bi";
import { RiUserAddFill } from "react-icons/ri";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  useEffect(() => {
    console.log("post", post);
  }, []);

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
            <p className="amount">{post.likeAmount.toLocaleString("en-US")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
