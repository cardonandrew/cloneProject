import { useEffect } from "react";
import "./music.css";

const Music = () => {
  // const progress = document.getElementById("progress");
  // const song = document.getElementById("song");
  // const playctrl = document.getElementById("playctrl");

  // song.onloadedmetadata = function () {
  //   progress.max = song.duration;
  //   progress.value = song.currentTime;
  // };

  // function playPause() {
  //   if (playctrl.classList.contains("fa-pause")) {
  //     song.pause();
  //     playctrl.classList.remove("fa-pause");
  //     playctrl.classList.add("fa-play");
  //   } else {
  //     song.play();
  //     playctrl.classList.add("fa-pause");
  //     playctrl.classList.remove("fa-play");
  //   }
  // }

  // if (song.play()) {
  //   setInterval(() => {
  //     progress.value = song.currentTime;
  //   }, 500);
  // }
  return (
    <>
      <div className="music-page">
        <h1 className="comingsoon">COMING SOON</h1>
        <div className="music-player">
          <nav>
            <button className="circle">
              <i className="fa-solid fa-angle-left fa-2xl"></i>
            </button>
            <button className="circle">
              <i className="fa-solid fa-bars fa-2xl"></i>
            </button>
          </nav>
          <div className="song-pic">
            <img
              id="song-pic"
              className="ui medium circular image"
              src={require("./images/demopic.jpg")}
              alt="song-pic"
            />
          </div>
          <div className="song-info">
            <h1 id="header-no-margin" className="ui huge header">
              Cassette Tapes
            </h1>
            <h1 id="header-no-margin" className="ui small header">
              The Flamingo Doritos
            </h1>
            <audio controls id="song">
              <source src={require("./media/drama.wav")} type="audio/wav" />
            </audio>
            <input type="range" value={0} id="progress" />
          </div>
          <div className="player-buttons">
            <div className="play-circle">
              <i className="fa-solid fa-backward fa-xl"></i>
            </div>
            <div className="play-circle" id="playctrl">
              <i className="fa-solid fa-play fa-2xl"></i>
            </div>
            <div className="play-circle">
              <i className="fa-solid fa-forward fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
