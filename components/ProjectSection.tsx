import styled from "styled-components";
import React, { MutableRefObject, Ref } from "react";
import StyledButton from "./StyledButton";
import ArrowRight from "../components/ArrowRight";

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
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bolder;
  top: 50%;
  right: -30px;
  transform: translate(0, -50%) rotate(-90deg);
  position: absolute;
`;

const StyledImageWrapper = styled.div`
  width: 70%;
  height: 50%;
  max-height: 80vh;
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
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ children }) => {
  return (
    <StyledProjectSection>
      {children}
      <StyledImageWrapper>
        <StyledProjectImage />
      </StyledImageWrapper>
      <StyledButtonWrapper>
        <StyledButton margin="0 30px 0 0" padding="10px 16px">
          Github <ArrowRight />
        </StyledButton>
        <StyledButton padding="10px 16px">
          Live <ArrowRight />
        </StyledButton>
      </StyledButtonWrapper>
      <StyledNumber fontSize="15rem">01</StyledNumber>
    </StyledProjectSection>
  );
};
