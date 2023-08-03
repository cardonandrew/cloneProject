import React, { useState } from "react";
import "./home.css";
import { Button } from "@mui/material";
import { storage, db, auth, firebase } from "../firebase";

export const Postupload = (props) => {
  const [tweet, setTweet] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                tweet: tweet,
                imageUrl: url,
                user: auth.currentUser.displayName,
                likeAmount: 0,
                commentAmount: 0,
                repostAmount: 0,
              });
              setProgress(0);
              setTweet("");
              setImage(null);
              setImageName(null);
            });
        }
      );
    } else {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        tweet: tweet,
        user: auth.currentUser.displayName,
        likeAmount: 0,
        commentAmount: 0,
        repostAmount: 0,
      });
      setProgress(0);
      setTweet("");
      setImage(null);
      setImageName(null);
    }
  };

  return (
    <>
      <div id="inputdiv" className="ui action input">
        <Button className="ui button" variant="contained" component="label">
          {imageName ? imageName : "Upload"}
          <input type="file" onChange={handleChange} hidden />
        </Button>
        <input
          type="text"
          placeholder="What's on your mind?"
          id="inputtext"
          value={tweet}
          onChange={(event) => {
            setTweet(event.target.value);
          }}
        />
        <button onClick={handleUpload} className="ui button" id="inputbutton">
          Post
        </button>
      </div>
      <progress className="progressbar" value={progress} max="100"></progress>
    </>
  );
};

export default Postupload;
