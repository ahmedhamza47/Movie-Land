import React, { useState } from "react";
import { useEffect } from "react";

function TVShows() {
  const [shows, setShows] = useState([]);
  const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const getTVShows = async () => {
    const api = await fetch(`${API_URL}&s=Superman`);
    const data = await api.json();
    console.log(data);
    setShows(data);
  };

  useEffect(() => {
    getTVShows();
  }, []);
  return <div>TVShows</div>;
}

export default TVShows;
