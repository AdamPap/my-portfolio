import type { NextPage } from "next";
import styled from "styled-components";

const MyDiv = styled.div`
  color: yellow;
`;

const Home: NextPage = () => {
  return <MyDiv>INDEX</MyDiv>;
};

export default Home;
