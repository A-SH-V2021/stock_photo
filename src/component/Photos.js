import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/Context";
import Photo from "./Photo";
const Photos = () => {
  const { photos } = useGlobalContext();
  console.log(photos);
  return (
    <Wrapper>
      <h2>photos</h2>
      <Photo />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid red;

  margin-top: 7rem;
`;
export default Photos;
