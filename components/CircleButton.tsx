import React from "react";
import styled, { keyframes } from "styled-components";

export type ButtonVariant = "filled" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  margin?: string;
}

const rotationIn = keyframes`
  from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(-45deg);
    }
`;

const rotationOut = keyframes`
  from{
        -webkit-transform: rotate(-45deg);
    }
    to{
        -webkit-transform: rotate(0deg);
    }
`;

const StyledButton = styled.button<ButtonProps>`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.primary};
  height: 130px;
  width: 130px;
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.variant === "filled" ? props.theme.primary : props.theme.bg};
  color: ${(props) =>
    props.variant === "filled" ? props.theme.bg : props.theme.primary};
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  animation: 0.4s linear forwards ${rotationIn};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
    animation: 0.3s linear forwards ${rotationOut};
  }
`;

export const CircleButton: React.FC<ButtonProps> = ({
  children,
  margin = "0",
  variant = "filled",
}) => {
  return (
    <StyledButton margin={margin} variant={variant}>
      {children}
    </StyledButton>
  );
};
