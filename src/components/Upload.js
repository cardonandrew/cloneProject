import React, { useState } from "react";
import "./home.css";
import { Button } from "@mui/material";
import { createPost } from "../api/requests";
import { useEffect } from "react";

const Upload = ({ user }) => {
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    // setProgress(0);
    setTweet("");
    setImageUrl("");
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
    handleClear(e);
  };

  return (
    <>
      <div id="inputdiv" className="ui action input">
        <Button className="ui button" variant="contained" component="label">
          {"Upload"}
          <input type="file" onChange={handleChange} accept="/image" hidden />
        </Button>
        <input
          type="text"
          placeholder="Say something..."
          id="inputtext"
          value={tweet}
          onChange={(event) => {
            setTweet(event.target.value);
          }}
        />
        <button onClick={handleUpload} className="ui button">
          Post
        </button>
      </div>

      <div className="ui input">
        <input
          type="text"
          placeholder="image url"
          id="inputtext1"
          value={imageUrl}
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
        />
      </div>
      {/* <progress className="progressbar" value={progress} max="100"></progress> */}
    </>
  );
};

export default Upload;
