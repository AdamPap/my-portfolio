import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Box } from "./Box";
import styled from "styled-components";
import StyledButton from "./StyledButton";

interface OldHeroProps {}

interface HeroTextProps {
  fontSize?: string;
}

const HeroOutlinedText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
`;

const HeroText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  /* text-transform: uppercase; */
`;

const HeroSubheader = styled.h3`
  font-size: 20px;
  font-weight: normal;
  display: inline-block;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  /* width: fit-content; */
`;

export const OldHero: React.FC<OldHeroProps> = ({}) => {
  return (
    <Box
      width="100%"
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
          <HeroOutlinedText fontSize="5rem">
            Full Stack Web <br />
            Developer
          </HeroOutlinedText>
        </StyledH1>
        <HeroSubheader>
          I am currently focusing on building web apps <br />
          with React and TypeScript!
        </HeroSubheader>
        <StyledButton padding="15px 20px">
          View Projects <ArrowRight />
        </StyledButton>
        {/* <StyledScrollDown>Scroll down</StyledScrollDown> */}
      </Box>
      {/* <NextLink href="/test" passHref>
      <a>
        <CircleButton variant="outline">View Projects</CircleButton>
      </a>
    </NextLink> */}
    </Box>
  );
};
