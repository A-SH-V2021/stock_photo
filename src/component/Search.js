import React from "react";
import { FcSearch } from "react-icons/fc";
import { useGlobalContext } from "../context/Context";
import styled from "styled-components";

const Search = () => {
  const {submitHandle, query, setQuery } = useGlobalContext();

  return (
    <Wrapper>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FcSearch className="btn-search" onClick={submitHandle} />
    </Wrapper>
  );
};
const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 85% auto;
  height: 70%;
  margin-top: 3rem;
  input {
    padding: 0.7rem 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0.5rem;
  }
  .btn-search {
    font-size: 2.2rem;
    margin: 0px auto;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export default Search;
