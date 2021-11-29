import React from "react";
import styled from "styled-components";
import { CircleButton } from "./CircleButton";

interface HeroProps {}

const StyledHeroWrapper = styled.div`
  width: 100%;
  margin-top: -10%;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 1rem 4rem;
`;

const StyledHeroHeader = styled.h1`
  font-size: 10rem;
  line-height: 10rem;
  font-weight: normal;
  margin: 0;
  letter-spacing: 0.2rem;
`;

const StyledHeroText = styled.p`
  font-size: 1.6rem;
  margin: 0;
  text-transform: uppercase;
`;

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <StyledHeroWrapper>
      <StyledRow>
        <StyledHeroHeader>Full Stack</StyledHeroHeader>
      </StyledRow>
      <StyledRow>
        <StyledHeroHeader>Web</StyledHeroHeader>
        <StyledCol>
          <StyledHeroText>Hey, I am Adam.</StyledHeroText>
          <StyledHeroText>I enjoy crafting web applications</StyledHeroText>
          <StyledHeroText>with Typescript and React.</StyledHeroText>
        </StyledCol>
        <CircleButton variant="outline">View projects</CircleButton>
      </StyledRow>
      <StyledRow>
        <CircleButton margin="0 4rem" variant="outline">
          Contact me
        </CircleButton>
        <StyledHeroHeader>Developer</StyledHeroHeader>
      </StyledRow>
    </StyledHeroWrapper>
  );
};
