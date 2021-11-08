import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/Context";
import Photo from "./Photo";
const Photos = () => {
  const {loading, photos } = useGlobalContext();
  
  return (
    <Wrapper>
      {photos.map((image) => {
        // console.log(item);
        return <Photo key={image.id} {...image} />;
      })}      
      {loading && <h2>loading...</h2> }
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 7rem;
  margin-bottom: 1rem ;
`;
export default Photos;
