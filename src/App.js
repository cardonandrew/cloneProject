import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Explore,
  Notify,
  Lists,
  Message,
  Music,
  Community,
  Profile,
  PostForm,
} from "./components";
function App() {
  const [isMusic, setIsMusic] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function randomNumber() {
    return Math.floor(Math.random() * 1000000);
  }

  const seedPosts = [
    {
      user: "teriyakiking",
      tweet:
        "👩‍💻🚀 Just turned caffeine into code! This late-night coding session has me feeling like a wizard 🧙‍♂️, conjuring software spells to make the world a better place! 💻✨ #LateNightCoder #CodingWizardry #TechMagic",
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/17604653/pexels-photo-17604653/free-photo-of-young-man-lying-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
      isLiked: false,
    },
    {
      user: "sweetieguy_",
      tweet:
        "Never underestimate the power of perseverance and determination. In the face of challenges, keep moving forward with unwavering resolve. Each step you take brings you closer to your goals. Embrace the journey, learn from every experience, and let your determination fuel your success. #Inspiration #Motivation #KeepGoing",
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/16773707/pexels-photo-16773707/free-photo-of-man-in-cap-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
      isLiked: true,
    },
    {
      user: "peggyissweet",
      tweet:
        "Just had a Eureka moment in the shower! 💡 Turns out, my best ideas are water-activated! Who needs a brainstorm when you can have a rainstorm of creativity? ☔️🚿 #ShowerThoughts #EurekaMoment #CreativeFlow",
      isVerified: false,
      imageUrl:
        "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      profileImage:
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "oddcoupleofbozos",
      tweet:
        "Life is like a box of chocolates 🍫❤️ You never know what you're gonna get, but I'm grateful to have you by my side through the sweet surprises and the nutty moments! 😘 #LifeIsSweet #GratefulHeart #LoveYou",
      isVerified: true,
      imageUrl:
        "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      profileImage:
        "https://images.pexels.com/photos/3754259/pexels-photo-3754259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "devin123",
      tweet: "CODING IS SO FUN🤪",
      isVerified: false,
      imageUrl:
        "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      profileImage:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "Todd123",
      tweet:
        "Just discovered the ultimate formula for successful software development: 90% perspiration, 10% inspiration, and 100% googling! 💻🔍 #CodingWisdom #SoftwareDevelopment",
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "wtfareyou30349",
      tweet:
        "Software development is like solving a puzzle where the pieces keep changing shape and the picture is a mystery. But fear not, because developers are the ultimate puzzle masters! 🧩💻 #CodeCrackers #SoftwareDevelopment",
      isVerified: false,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "ohcrapxoxo",
      tweet: `🚀 Unraveling the Epic Saga of Software Development 📚💻 Fellow developers, let us raise our keyboards to the never-ending adventure of coding, for in each line of code lies the potential to shape the future, and in each bug lies the opportunity to grow. Onward we go, crafting the magic of software, leaving our mark on the digital tapestry of the world. Together, we shall script the future! 🌟💻✨ #SoftwareSaga #CodingChronicles #SoftwareDevelopment`,
      isVerified: true,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "zodmaster",
      tweet: "I love to code!",
      isVerified: false,
      imageUrl: "",
      profileImage:
        "https://images.pexels.com/photos/1624111/pexels-photo-1624111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
    {
      user: "happy30to20",
      tweet:
        "In the world of software development, bugs are like puzzle pieces that only fit when you're half-asleep. ☕💻 #DeveloperLife #CodingHumor",
      isVerified: true,
      imageUrl:
        "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg",
      profileImage:
        "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
      isLiked: true,
    },
    {
      user: "destinedtocode40",
      tweet:
        "Embarking on the journey of software development may have its challenges, but remember, with every line of code you write, you're sculpting the future. Embrace the obstacles, celebrate the victories, and keep pushing forward. You've got this! 💪💻 #CodeOn #MotivationMonday #SoftwareDevelopment",
      isVerified: true,
      imageUrl:
        "https://images.pexels.com/photos/17651321/pexels-photo-17651321/free-photo-of-monumental-walls-in-temple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      profileImage:
        "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      likeAmount: randomNumber(),
      commentAmount: randomNumber(),
      repostAmount: randomNumber(),
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <div className="sideNav">
          <Link id="mainLogo" to="/">
            <img
              alt="mainlogo"
              id="mainlogo"
              className="ui mini image"
              src="https://www.edigitalagency.com.au/wp-content/uploads/twitter-logo-black-png.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="home" to="/">
            <img
              alt="home"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="explore" to="/explore">
            <img
              alt="explore"
              id="navlogo"
              className="ui mini image"
              src="https://static.thenounproject.com/png/101791-200.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="notify" to="/notify">
            <img
              alt="notify"
              id="navlogo"
              className="ui mini image"
              src="https://icon-library.com/images/twitter-notification-icon/twitter-notification-icon-5.jpg"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="message" to="/message">
            <img
              alt="message"
              id="navlogo"
              className="ui mini image"
              src="https://icon-library.com/images/message-icon-transparent/message-icon-transparent-7.jpg"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="lists" to="/lists">
            <img
              alt="lists"
              id="navlogo"
              className="ui mini image"
              src="https://static.thenounproject.com/png/1327293-200.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="community" to="/community">
            <img
              alt="community"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          <Link id="profile" to="/profile">
            <img
              alt="profile"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
              //onClick={()=>{}}
            ></img>
          </Link>
          {/* <Link id="music" to="/music"> */}
          <div
            onClick={() => {
              isMusic
                ? setIsMusic(false) && setIsPlaying(false)
                : setIsMusic(true);
              setIsPlaying(true);
            }}
          >
            <img
              alt="music"
              id="navlogo"
              className="ui mini image"
              src="https://cdn-icons-png.flaticon.com/512/4430/4430494.png"
              //onClick={()=>{}}
            ></img>
          </div>
          <Link id="post" to="/post">
            <img
              alt="post"
              id="postlogo"
              className="ui mini image"
              src="https://www.allpointsnorthfoundation.org/wp-content/uploads/2019/12/write-tweet.png"
              //onClick={()=>{}}
            ></img>
          </Link>
        </div>
        {isMusic ? (
          <div className="tofront">
            <Music isPlaying={isPlaying} />
          </div>
        ) : (
          ""
        )}
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home seedPosts={seedPosts} />} />
            <Route path="/explore" exact element={<Explore />} />
            <Route path="/notify" exact element={<Notify />} />
            <Route path="/lists" exact element={<Lists />} />
            <Route path="/message" exact element={<Message />} />
            <Route path="/community" exact element={<Community />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/music" exact element={<Music />} />
            <Route path="/post" exact element={<PostForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
