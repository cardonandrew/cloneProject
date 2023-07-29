import React from "react";
import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";
import "./music.css";
import { FaPlay, FaPause, FaExpandAlt, FaAngleLeft } from "react-icons/fa";

const Music = (props) => {
  const [isPlaying, setIsPlaying] = useState(!props.isPlaying);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const progress = useRef();
  const song = useRef();
  const animationRef = useRef();
  const musicPlayer = useRef();
  const musicPage = useRef();
  // const songPic = useRef();

  useEffect(() => {
    const seconds = Math.floor(song.current.duration);
    setDuration(seconds);
    progress.current.max = seconds;
  }, [song?.current?.loadedmetadata, song?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${returnSecs}`;
  };

  const playPause = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      song.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      setIsPlaying(false);
      song.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progress.current.value = song.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeTime = () => {
    song.current.currentTime = progress.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progress.current.style.setProperty(
      "--seek-before-width",
      `${(progress.current.value / duration) * 100}%`
    );
    setCurrentTime(progress.current.value);
  };

  return (
    <Draggable
      axis="both"
      handle="nav"
      // defaultPosition={{ x: -60, y: 100 }}
      // position={null}
      grid={[1, 1]}
      scale={1}
    >
      <div className="music-page" ref={musicPage}>
        {/* <h1 className="comingsoon">COMING SOON</h1> */}
        <div
          className={isFixed ? "music-player-fixed" : "music-player-mini"}
          ref={musicPlayer}
        >
          <nav>
            {/* exit */}
            <button
              className="circle"
              // onClick={() => {
              // }}
            >
              <FaAngleLeft size={25} />
            </button>
            {/* menu */}
            <button
              className="circle"
              onClick={() => {
                isFixed ? setIsFixed(false) : setIsFixed(true);
              }}
            >
              <FaExpandAlt size={20} />
            </button>
          </nav>
          {/* picture */}
          <div className={isFixed ? "song-pic2" : "song-pic"}>
            <img
              id="song-pic"
              className="ui medium circular image"
              src={require("../images/demopic.jpg")}
              alt="song-pic"
            />
          </div>
          {/* song information */}
          <div className="song-info">
            <h1 id="header-no-margin" className="ui huge header">
              Cassette Tapes
            </h1>
            <h1 id="header-no-margin" className="ui small header">
              The Flamingo Doritos
            </h1>
            <audio id="song" ref={song} preload="metadata">
              <source src={require("./media/drama.mp3")} type="audio/mpeg" />
            </audio>
            {/* timebar */}
            <input
              type="range"
              id="progress"
              ref={progress}
              defaultValue={0}
              onChange={() => {
                changeTime();
              }}
            />
            <div className="timeInfo">
              {/* current time */}
              <div className="currentTime">{calculateTime(currentTime)}</div>
              {/* duration of song */}
              <div className="duration">
                {duration && !isNaN(duration) && calculateTime(duration)}
              </div>
            </div>
          </div>
          <div className="player-buttons">
            {/* backwards */}
            <div className="play-circle">
              <i className="fa-solid fa-backward fa-xl"></i>
            </div>
            {/* play/pause */}
            <div className="play-circle" onClick={() => playPause()}>
              {!isPlaying ? <FaPlay size={20} /> : <FaPause size={20} />}
            </div>
            {/* forwards */}
            <div className="play-circle">
              <i className="fa-solid fa-forward fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Music;
