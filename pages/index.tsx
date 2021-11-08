import type { NextPage } from "next";
import NextLink from "next/link";
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

const HeroSubheader = styled.h3`
  font-size: 20px;
  font-weight: normal;
  display: inline-block;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
`;

const StyledH1 = styled.h1`
  display: inline-block;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Box height="100%" flex alignItems="center" justifyContent="start">
          <Box flex flexDirection="column">
            <StyledH1>
              <HeroText fontSize="5rem">Hey, I'm Adam.</HeroText>
              <HeroOutlinedText fontSize="5rem">
                Full Stack Web <br />
                Developer
              </HeroOutlinedText>
            </StyledH1>
            <HeroSubheader>
              I am currently focusing on building web apps <br />
              with React and TypeScript!
            </HeroSubheader>
          </Box>
          <NextLink href="/test" passHref>
            <a>
              <CircleButton variant="outline">View Projects</CircleButton>
            </a>
          </NextLink>
        </Box>
      </Wrapper>
    </Layout>
  );
};

export default Home;
