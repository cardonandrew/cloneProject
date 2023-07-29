import "./home.css";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  return (
    <body>
      <div className="pageDiv">
        <div className="pageFeed">
          <header>
            <h1 className="pageHeader">Explore</h1>
          </header>
          <div id="inputdiv" className="ui action input">
            <input type="text" placeholder="Search..." id="inputtext" />
            <button className="ui button" id="inputbutton">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Explore;
