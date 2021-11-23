import styled from "styled-components";
import React from "react";

interface StyledNumberProps {
  fontSize?: string;
}

const StyledProjectSection = styled.div`
  height: 90vh;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const StyledNumber = styled.div<StyledNumberProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
  font-weight: bolder;
  top: 50%;
  right: 0;
  transform: translate(0, -50%) rotate(-90deg);
  position: absolute;
`;

interface ProjectSectionProps {}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ children }) => {
  return (
    <StyledProjectSection>
      {children}
      <StyledNumber fontSize="15rem">
        <span>01</span>
      </StyledNumber>
    </StyledProjectSection>
  );
};
