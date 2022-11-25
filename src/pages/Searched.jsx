import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
//import Details from "./Details";
//import { useNavigate } from "react-router-dom";
function Searched() {
  const [searchMovie, setSearchedMovie] = useState([]);
  let params = useParams();
  //console.log(params.search);
  const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const getSearched = async (title) => {
    const data = await fetch(`${API_URL}&s=${title}`);
    const movies = await data.json();
    console.log(movies);
    setSearchedMovie(movies.Search);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  console.log(searchMovie);
  // const navigate = useNavigate();
  // function submitHandler() {
  // navigate(`/searched/${params.Search}/details`);
  // }
  return (
    <Grid>
      {searchMovie.map((item) => {
        return (
          <Items key={item.imdbID}>
            <Link to={"/details/" + item.imdbID}>
              <img src={item.Poster} alt={item.Title}></img>
              <h5 className="mt-3">{item.Title}</h5>
            </Link>
          </Items>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const Items = styled.div`
  width: 90%;
  h5 {
    font-size: 1rem;
  }
  img {
    margin-top: 10%;
    width: 90%;
    height: 15rem;
  }
`;
export default Searched;
