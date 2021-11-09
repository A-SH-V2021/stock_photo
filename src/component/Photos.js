import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/Context";
import Photo from "./Photo";
const Photos = () => {
  const { loading, photos } = useGlobalContext();

  return (
    <Wrapper>
      <div className="photo-center">
        {photos.map((image) => {
          return <Photo key={image.id} {...image} />;
        })}
      </div>
      {loading && <h2>loading...</h2>}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 2rem 0;
  .photo-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 0.5rem;
  }
  @media screen and (min-width: 576px) {
  .photo-center {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
}
`;
export default Photos;
