import React from "react";
import styled from "styled-components";
import Search from "./component/Search";
import Photos from "./component/Photos";

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
