import React from "react";
import styled from "styled-components";

interface ContactSectionProps {}

const StyledContactSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledSectionWrapper = styled.div`
  width: 100%;
`;

const StyledSmallTitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
`;

const StyledBigTitle = styled.h3`
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: 4rem;
  margin: 8px 0;
  line-height: 3.4rem;
`;

const StyledEmail = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
  margin: 2rem 0;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  color: white;
  font-size: 16px;
  text-align: center;
  margin-left: 1rem;
  flex-grow: 1;
  ::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;

const StyledText = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
`;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
  margin-top: 3rem;
`;

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <StyledContactSection>
      <StyledSectionWrapper>
        <StyledSmallTitle>Are you interested in my work?</StyledSmallTitle>
        <StyledBigTitle>Contact Me!</StyledBigTitle>
        {/* <StyledEmail>adampapamast@gmail.com</StyledEmail> */}
        <StyledForm>
          <StyledText>Hello,</StyledText>
          <StyledWrapper>
            <StyledText>my name is</StyledText>
            <StyledInput placeholder="Enter your name here" />
          </StyledWrapper>
          <StyledWrapper>
            <StyledText>this is my email</StyledText>
            <StyledInput placeholder="Enter your email here" />
          </StyledWrapper>
          <StyledWrapper>
            <StyledText>I am interested in</StyledText>
            <StyledInput placeholder="Enter your project idea here" />
          </StyledWrapper>
        </StyledForm>
      </StyledSectionWrapper>
    </StyledContactSection>
  );
};
