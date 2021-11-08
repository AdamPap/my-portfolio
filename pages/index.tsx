import type { NextPage } from "next";
import styled from "styled-components";
import { Box } from "../components/Box";
import { CircleButton } from "../components/CircleButton";
import { Layout } from "../components/Layout";

interface HeroTextProps {
  fontSize: string;
}

const HeroOutlinedText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
`;

const HeroText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Box />
      <h1>
        <HeroText fontSize="5rem">Hey, I'm Adam.</HeroText>
        <HeroOutlinedText fontSize="5rem">
          <div>Full Stack Web</div>
          <div>Developer</div>
        </HeroOutlinedText>
      </h1>
      <CircleButton variant="outline">See Projects</CircleButton>
    </Layout>
  );
};

export default Home;
