import React from "react";
import styled from "styled-components";

const Photo = ({ urls: { regular }, user: { name }, alt_description }) => {
  return (
    <Wrapper>
      <div className="card">
        <img src={regular} alt={name} />
        <div className="container">
          <h3>{name}</h3>
          <p>{alt_description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 90%;
    margin: 2rem auto;
    border-radius: 1rem;
  }

  .card:hover {
    box-shadow: 10px 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card img {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  .container {
    padding: 2px 16px;
  }
`;
export default Photo;
