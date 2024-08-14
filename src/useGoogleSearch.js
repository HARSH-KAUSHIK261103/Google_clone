import React, { useState, useEffect } from "react";

const Context_key = " ";
const API_KEY = " ";

export const useGoogleSearch = (term) => {
  const [data, setgdata] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAk8bxzH-_Z8ff9VZJSWRUapXgsAU1VnpE&cx=d7d3ed1f167d7468b&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setgdata(result);
        });
    };
    fetchdata();
  }, [term]);

  // https://www.googleapis.com/customsearch/v1?key=AIzaSyAk8bxzH-_Z8ff9VZJSWRUapXgsAU1VnpE&cx=1245372c9fc964a8b$&q=lectures
  //
  //
  return { data };
};
