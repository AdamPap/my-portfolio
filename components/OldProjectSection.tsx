import styled from "styled-components";
import React, { MutableRefObject, Ref, useEffect, useRef } from "react";
import StyledButton from "./StyledButton";
import ArrowRight from "../components/ArrowRight";
import gsap from "gsap";

interface StyledNumberProps {
  fontSize?: string;
}

const StyledProjectSection = styled.div`
  height: 90vh;
  width: 100%;
  max-width: 90vw;
  /* min-width: 50vw; */
  position: relative;
  /* overflow-x: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledNumber = styled.div<StyledNumberProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bolder;
  top: 50%;
  right: -30px;
  transform: translate(0, -50%) rotate(-90deg);
  position: absolute;
  overflow: hidden;
`;

const StyledImageWrapper = styled.div`
  width: 70%;
  height: 50%;
  max-height: 80vh;
  /*  */
  overflow: hidden;
  position: relative;
`;

const StyledImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.bg};
`;

const StyledProjectImage = styled.div`
  background-image: url("images/mountain.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-style: none !important;
  outline: none;
  /* TODO: */
  /* background-attachment: fixed; */
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StyledSpan = styled.span`
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
`;

const StyledProjectHeader = styled.h1`
  /* font-size: 1rem; */
  text-transform: uppercase;
`;

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ children }) => {
  const imgWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const imgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const numberRef = useRef() as React.MutableRefObject<HTMLSpanElement>;

  useEffect(() => {
    gsap.to(overlayRef.current, {
      width: "0%",
      duration: 1.4,
      ease: "Power2.easeInOut",
      scrollTrigger: imgRef.current,
    });
    gsap.to(numberRef.current, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      delay: 0.8,
      ease: "Power2.easeInOut",
      scrollTrigger: imgRef.current,
    });
  }, []);

  return (
    <StyledProjectSection>
      {children}
      <StyledProjectHeader>Next Journey</StyledProjectHeader>
      <StyledImageWrapper ref={imgWrapperRef}>
        <StyledImageOverlay ref={overlayRef} />
        <StyledProjectImage ref={imgRef} />
      </StyledImageWrapper>
      <StyledButtonWrapper>
        <StyledButton margin="0 30px 0 0" padding="10px 16px">
          Github <ArrowRight />
        </StyledButton>
        <StyledButton padding="10px 16px">
          Live <ArrowRight />
        </StyledButton>
      </StyledButtonWrapper>
      <StyledNumber fontSize="15rem">
        <StyledSpan ref={numberRef}>01</StyledSpan>
      </StyledNumber>
    </StyledProjectSection>
  );
};
