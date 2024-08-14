import React, { useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { actionTypes } from "../reducer";

const Serach = ({ hideButton = false }) => {
  const [{}, dispatch] = useStatevalue();

  const [input, setinput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("./search");
    // navigate("../search", { replace: true });
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <MicNoneIcon />
      </div>
      {!hideButton ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="hide">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Serach;
