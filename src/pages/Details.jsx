import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Details() {
  const [details, setDetails] = useState([]);
  const params = useParams();
  console.log(params.detail);
  const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const getDetails = async (id) => {
    const api = await fetch(`${API_URL}&i=${id}`);
    const data = await api.json();
    console.log(data);
    setDetails(data);
  };

  useEffect(() => {
    getDetails(params.detail);
  }, []);
  return (
    <>
      <Container>
        <Image>
          <img src={details.Poster} alt="" />
        </Image>
        <Description>
          <Title>{details.Title}</Title>
          <Imdb>
            {" "}
            {details.imdbRating} {details.Runtime}
          </Imdb>

          <Plot> {details.Plot}</Plot>
          <List>
            <ul>
              <li> Country : {details.Country}</li>
              <li> Genre : {details.Genre}</li>
              <li> Release : {details.Released}</li>
              <li> Director : {details.Director}</li>
              <li> Production : {details.Production}</li>
              <li> Cast : {details.Actors}</li>
            </ul>
          </List>
        </Description>
      </Container>
    </>
  );
}

export default Details;
const Container = styled.div`
  margin: 2rem;
  display: flex;
`;
const Image = styled.div`
  img {
    height: 20rem;
  }
`;
const Description = styled.div`
  margin-left: 5%;
`;
const Title = styled.div``;
const Imdb = styled.div``;
const Plot = styled.div``;
const List = styled.div``;
