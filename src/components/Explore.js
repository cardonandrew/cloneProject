import "./home.css";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  return (
    <div className="pageDiv1">
      <div className="pageFeed">
        <header>
          <h1 className="pageHeader">Explore</h1>
        </header>
        <div id="inputdiv" className="ui action input">
          <input
            type="text"
            placeholder="Search..."
            className="inputtextclass"
          />
          <button className="ui button" id="inputbutton">
            <FaSearch />
          </button>
        </div>
      </div>
      <h1 className="ui header" id="comingSoon">
        COMING SOON
      </h1>
    </div>
  );
};

export default Explore;
