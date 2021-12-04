import styled from "styled-components";
import React, { MutableRefObject, Ref, useEffect, useRef } from "react";
import StyledButton from "./StyledButton";
import ArrowRight from "../components/ArrowRight";
import gsap from "gsap";

interface StyledNumberProps {
  fontSize?: string;
}

const StyledProjectSection = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
`;

const StyledNumber = styled.div<StyledNumberProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  top: -20px;
  right: 0px;
  opacity: 0;
  /* transform: translate(0, -50%) rotate(-90deg); */
  position: absolute;
  z-index: 2;
  overflow: hidden;
`;
const StyledNumberFilled = styled.div<StyledNumberProps>`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  top: -20px;
  right: 0px;
  opacity: 0;
  /* transform: translate(0, -50%) rotate(-90deg); */
  position: absolute;
  z-index: 0;
  overflow: hidden;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  /* width: 70%; */
  /* height: 100%; */
  height: 60%;

  /*  */
  /* overflow: hidden; */
  position: relative;
`;

const StyledImageOverlay = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.bg};
  /* display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15rem; */
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
  position: absolute;
  z-index: 1;
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

const StyledDetails = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin-top: 85px;
`;

const StyledProjectContainer = styled.div`
  height: 100%;
  width: 85%;
`;

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ children }) => {
  const imgWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const imgRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const numberRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const numberFilledRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    gsap.to(overlayRef.current, {
      width: "0%",
      rotation: 0.01,
      duration: 1.4,

      ease: "Power2.easeInOut",
      scrollTrigger: imgRef.current,
      // onComplete: () => {
      //   gsap.to(overlayRef.current, { duration: 0.2, opacity: 0 });
      // },
    });
    gsap.to(numberRef.current, {
      duration: 0.7,
      rotation: 0.01,
      top: "-100px",
      opacity: 1,
      delay: 0.7,
      ease: "Power2.easeInOut",
      scrollTrigger: imgRef.current,
    });
    gsap.to(numberFilledRef.current, {
      duration: 0.7,
      rotation: 0.01,
      top: "-100px",
      opacity: 1,
      delay: 0.7,
      ease: "Power2.easeInOut",
      scrollTrigger: imgRef.current,
    });
    // gsap.to(numberRef.current, {
    //   duration: 1.2,
    //   rotation: 0.01,
    //   y: 0,
    //   opacity: 1,
    //   delay: 0.5,
    //   ease: "Power2.easeInOut",
    //   scrollTrigger: imgRef.current,
    // });
  }, []);

  return (
    <StyledProjectSection>
      <StyledProjectContainer>
        <StyledImageOverlay ref={overlayRef} />
        <StyledProjectHeader>Next Journey</StyledProjectHeader>
        <StyledImageWrapper ref={imgWrapperRef}>
          <StyledProjectImage ref={imgRef} />
          <StyledNumber ref={numberRef} fontSize="8rem">
            01
          </StyledNumber>
          <StyledNumberFilled ref={numberFilledRef} fontSize="8rem">
            01
          </StyledNumberFilled>
        </StyledImageWrapper>
        <StyledButtonWrapper>
          <StyledButton margin="0 30px 0 0" padding="10px 16px">
            Github <ArrowRight />
          </StyledButton>
          <StyledButton padding="10px 16px">
            Live <ArrowRight />
          </StyledButton>
          <StyledButton margin="0 0 0 auto" padding="10px 16px">
            View Details <ArrowRight />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledProjectContainer>
      {/* <StyledDetails>Details</StyledDetails> */}
    </StyledProjectSection>
  );
};
