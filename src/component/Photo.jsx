import React from "react";
import styled from "styled-components";

const Photo = ({
  urls: { regular },
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  alt_description,
}) => {
  console.log();
  return (
    <Wrapper>
      <div className="card">
        <img src={regular} alt={alt_description} />
        <div className="container">
          <div>
            <h4>{name}</h4>
            <p>{likes}likes</p>
          </div>
          <a href={portfolio_url}>
            <img src={medium} alt={name} className="user-img" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .card {
    height: 17.5rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 90%;
    margin: 2rem auto;
    border-radius: 1rem;
  }

  .card:hove {
    box-shadow: 10px 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .container {
    position: absolute;
    width: 100%;
    padding: 1rem;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    transform: translateY(100%);
    transition: var(--transition);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
  .card:hover .container {
    transform: translateY(0);
  }
`;
export default Photo;
