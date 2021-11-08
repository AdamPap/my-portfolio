import React from "react";
import styled, { keyframes } from "styled-components";

export type ButtonVariant = "filled" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
}

const rotationAnimation = keyframes`
  from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
`;

const movementAnimation = keyframes`
  0% {
    top: 0px;
    left: 0px;
  }
  25% {
    top: 40px;
    left: 40px;
  }
  50% {
    top: 0px;
    left: 40px;
  }
  75% {
    top: 40px;
    left: 0px;
  }
  100%{
    top: 0px;
    left: 0px;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.primary};
  height: 130px;
  width: 130px;
  background-color: ${(props) =>
    props.variant === "filled" ? props.theme.primary : props.theme.bg};
  color: ${(props) =>
    props.variant === "filled" ? props.theme.bg : props.theme.primary};
  font-size: 18px;
  cursor: pointer;
  position: relative;

  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  animation: 7s linear infinite ${rotationAnimation},
    9s linear infinite ${movementAnimation};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
  }
`;

export const CircleButton: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
}) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
