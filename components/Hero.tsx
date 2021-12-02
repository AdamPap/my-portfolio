import gsap from "gsap";
import React, { useEffect, useRef } from "react";
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
  overflow: hidden;
`;

const StyledHeroText = styled.p`
  font-size: 1.6rem;
  margin: 0;
  text-transform: uppercase;
  overflow: hidden;
`;

const StyledSpan = styled.span`
  display: inline-block;
  /* transform: translateY(100%); */
  /* opacity: 0; */
`;

export const Hero: React.FC<HeroProps> = ({}) => {
  const initialValues = [] as HTMLSpanElement[];
  const spanRefs = useRef(initialValues);
  spanRefs.current = [];

  const addToRefs = (el: HTMLSpanElement) => {
    if (el && !spanRefs.current.includes(el)) {
      spanRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power4" },
    });

    tl.fromTo(
      spanRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        rotation: 0.01,
        opacity: 1,
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <StyledHeroWrapper>
      <StyledRow>
        <StyledHeroHeader>
          <StyledSpan ref={addToRefs}>Full Stack</StyledSpan>
        </StyledHeroHeader>
      </StyledRow>
      <StyledRow>
        <StyledHeroHeader>
          <StyledSpan ref={addToRefs}>Web</StyledSpan>
        </StyledHeroHeader>
        <StyledCol>
          <StyledHeroText>
            <StyledSpan ref={addToRefs}>Hey, I am Adam.</StyledSpan>
          </StyledHeroText>
          <StyledHeroText>
            <StyledSpan ref={addToRefs}>
              I enjoy crafting web applications
            </StyledSpan>
          </StyledHeroText>
          <StyledHeroText>
            <StyledSpan ref={addToRefs}>with Typescript and React.</StyledSpan>
          </StyledHeroText>
        </StyledCol>
        <CircleButton variant="outline">View projects</CircleButton>
      </StyledRow>
      <StyledRow>
        <CircleButton margin="0 4rem" variant="outline">
          Contact me
        </CircleButton>
        <StyledHeroHeader>
          <StyledSpan ref={addToRefs}>Developer</StyledSpan>
        </StyledHeroHeader>
      </StyledRow>
    </StyledHeroWrapper>
  );
};
