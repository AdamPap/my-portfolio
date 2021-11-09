import type { NextPage } from "next";
import NextLink from "next/link";
import ArrowRight from "../components/ArrowRight";
import styled from "styled-components";
import { Box } from "../components/Box";
import { CircleButton } from "../components/CircleButton";
import { Layout } from "../components/Layout";
import StyledButton from "../components/StyledButton";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  /* width: fit-content; */
`;

const StyledScrollDown = styled.div`
  border-top: 1px solid ${(props) => props.theme.primary};
  padding-top: 4px;
  transform: rotate(-90deg);
  transform-origin: top left;
  margin-top: 170px;
  width: 90px;
  font-size: 14px;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Box
          width="80%"
          height="100%"
          // padding="0 40px"
          margin="0 auto"
          flex
          alignItems="center"
          justifyContent="start"
        >
          <Box flex flexDirection="column" alignItems="start">
            <StyledH1>
              <HeroText fontSize="3rem">Hey, I'm Adam.</HeroText>
              <HeroOutlinedText fontSize="4rem">
                Full Stack Web <br />
                Developer
              </HeroOutlinedText>
            </StyledH1>
            <HeroSubheader>
              I am currently focusing on building web apps <br />
              with React and TypeScript!
            </HeroSubheader>
            <StyledButton>
              View Projects <ArrowRight />
            </StyledButton>
            {/* <StyledScrollDown>Scroll down</StyledScrollDown> */}
          </Box>
          <NextLink href="/test" passHref>
            <a>
              {/* <CircleButton variant="outline">View Projects</CircleButton> */}
            </a>
          </NextLink>
        </Box>
      </Wrapper>
    </Layout>
  );
};

export default Home;
