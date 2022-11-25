import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <Wrapper className="justify-content-center text-center">
      <div className="image">
        <img
          src={require("../images/logo-light.png")}
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
      <h5>Watch Movies Online Free</h5>
      <p>
        fmovies.to - Just a better place to watch movies online for free. It
        allows you to watch movies online in high quality for free. No
        registration is required. The content is updated daily with fast
        streaming servers, multi-language subtitles supported. Just open
        fmovies.to and watch your favorite movies, tv-shows. We have almost any
        movie, tv-shows you want to watch!
        <br /> Please help us by sharing this site with your friends. Thanks!
      </p>
      <a href="https://twitter.com/fmoviesdotto">
        <h6>
          <FaTwitter /> Connect with us on twitter
        </h6>
      </a>
      <button type="button" class="btn btn-outline-info">
        Go to fmovies.wtf
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 8%;
  img {
    width: 12rem;
  }
  p {
    margin-left: 12%;
    margin-right: 12%;
  }
  h6 {
    color: #42cef5;
  }
  button {
    background-color: none !important;
  }
`;

export default Home;
