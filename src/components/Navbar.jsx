import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = function (e) {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={require("../images/logo-light.png")}
            width="100"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Movies
              </a>
            </li>
            <Link to="/TVShows">
              <li className="nav-item">TV Show</li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Genre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Country
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Year
              </a>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0 ml-auto"
            onSubmit={submitHandler}
          >
            <Input
              className="form-control mr-sm-2 outline-none shadow-none input"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
const Input = styled.input`
  border-radius: 20px;
  border: 2px solid black;
  .input:focus,
  .input:active {
    outline: none !important;
    box-shadow: none !important;
  }
`;

export default Navbar;
