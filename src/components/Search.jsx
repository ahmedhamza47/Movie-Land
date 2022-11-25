import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = function (e) {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler}>
      <SearchInput>
        <Input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Search.."
        />
      </SearchInput>
    </form>
  );
}
export default Search;

const SearchInput = styled.div`
  color: blue;

  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;
const Input = styled.input`
  background-color: black;
  width: 20rem;
  height: 2rem;
  font-size: 1.5rem;
  color: white;
`;
