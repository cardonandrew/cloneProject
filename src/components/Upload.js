import React, { useState } from "react";
import "./home.css";
import { createPost } from "../api/requests";

const Upload = ({ user, newPost, setNewPost }) => {
  const [tweet, setTweet] = useState("");
  // eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState("");

  const handleClear = (e) => {
    e.preventDefault();
    // setProgress(0);
    setTweet("");
    setImageUrl("");
    // eslint-disable-next-line
    {
      newPost ? setNewPost(false) : setNewPost(true);
    }
  };
  const handleUpload = async (e) => {
    const newPost = await createPost(
      user.username,
      tweet,
      user.isVerified,
      imageUrl,
      user.profileImage
    );
    console.log("newPost", newPost);
    setNewPost(newPost);
    handleClear(e);
  };

  return (
    <>
      <div id="inputdiv" className="inputContainer">
        <div className="inputtextcontainer">
          <input
            type="text"
            placeholder="Say something..."
            className="inputtextclass"
            value={tweet}
            onChange={(event) => {
              setTweet(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="image url"
            className="inputtextclass"
            value={imageUrl}
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
        </div>
        <button onClick={handleUpload} className="ui button" id="inputbutton">
          Post
        </button>
      </div>

      <div className="ui input"></div>
    </>
  );
};

export default Upload;
