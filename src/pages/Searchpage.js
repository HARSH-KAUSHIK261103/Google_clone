import React from "react";
import "./searchpage.css";
import { useStatevalue } from "../components/StateProvider.js";
import { useGoogleSearch } from "../useGoogleSearch.js";
import response from "../response.js";
import { Link } from "react-router-dom";
// import Serach from "../components/Serach.js";
import SearchIcon from "@mui/icons-material/Search";
import { Description } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { LocalOffer } from "@mui/icons-material";
import { Room } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import Search from "../components/search2.js";
const Searchpage = () => {
  const [{ term }, dispatch] = useStatevalue();

  // live api call
  const { data } = useGoogleSearch(term);

  // for practice
  // const data = response;

  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage_header">
        <Link to={"/"}>
          <img
            className="searchpage_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="searchpage_headerbody">
          <Search />
          <div className="searchpage_options">
            <div className="options_left">
              <div className="searchpage_option">
                <SearchIcon />
                <Link to={"/all"}>All</Link>
              </div>
              {/* <div className="searchpage_option">
                <Description/>
                <Link to={"/all"}>all</Link>
              </div> */}
              <div className="searchpage_option">
                <Description />
                <Link to={"/news"}>news</Link>
              </div>
              <div className="searchpage_option">
                <Image />
                <Link to={"/images"}>images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOffer />
                <Link to={"/shoping"}>shoping</Link>
              </div>
              <div className="searchpage_option">
                <Room />
                <Link to={"/maps"}>maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVert />
                <Link to={"/more"}>more</Link>
              </div>
            </div>
            <div className="options_right">
              <div className="searchpage_option">
                <Link to={"/Settings"}>Settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to={"/tool"}>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage_results">
          {/* <p className="searchpage_resultcount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p> */}
          {data?.items.map((item) => (
            <div className="searchpage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage_result_image"
                      src={item.pagemap.cse_image[0].src}
                    />
                  )}

                {item.displayLink}
              </a>
              <a className="searchpage_result_title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage_result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchpage;
