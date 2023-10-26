import React, { useState } from "react";
import "./home.css";
import { Button } from "@mui/material";
import { createPost } from "../api/requests";

const Upload = ({ user, setNewPost }) => {
  const [tweet, setTweet] = useState("");
  // const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  const handleClear = (e) => {
    e.preventDefault();
    // setProgress(0);
    setTweet("");
    setImageUrl("");
    setNewPost();
  };
  const ver = user.isVerified;
  const handleUpload = async (e) => {
    console.log(ver);
    const newPost = await createPost(
      user,
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
      <div id="inputdiv" className="ui action input">
        {/* <Button className="ui button" variant="contained" component="label">
          {"Upload"}
          <input type="file" accept="/image" hidden />
        </Button> */}
        <input
          type="text"
          placeholder="Say something..."
          id="inputtext1"
          value={tweet}
          onChange={(event) => {
            setTweet(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="image url"
          id="inputtext1"
          value={imageUrl}
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
        />
        <button onClick={handleUpload} className="ui button" id="inputbutton">
          Post
        </button>
      </div>

      <div className="ui input"></div>
      {/* <progress className="progressbar" value={progress} max="100"></progress> */}
    </>
  );
};

export default Upload;
