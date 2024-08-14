import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Serach from "../components/Serach";

const Homecomp = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="home_left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className="icon" />
          <Avatar className="avatar" />
        </div>
      </div>
      <div className="home_body">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" />
        <div className="home_inputcontainer">
          <Serach />
        </div>
      </div>
    </div>
  );
};

export default Homecomp;
