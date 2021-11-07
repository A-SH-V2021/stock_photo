import React from "react";
import styled from "styled-components";
import Search from "./component/Search";
import Photos from "./component/Photos";
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;
const accessKey = `cf2JcO11pfORR6zIiPrAR8_y8PlwcxWeUixmHxKNzao`;
const App = () => {
  return (
    <Wrapper>
      <Search />
      <Photos />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-rows: 10% 85%;
  
`;
export default App;
