import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searchMovie, setSearchedMovie] = useState([]);
  let params = useParams();
  console.log(params.search);
  const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const getSearched = async (title) => {
    const data = await fetch(`${API_URL}&s=${title}`);
    const movies = await data.json();
    console.log(movies);
    setSearchedMovie(movies);
  };
  useEffect(() => {
    getSearched(params.search);
  }, []);
  return <div>Searched</div>;
}

export default Searched;
