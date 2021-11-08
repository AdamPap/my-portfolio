import React from "react";
import styled from "styled-components";

export type ButtonVariant = "filled" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
}

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
`;

export const CircleButton: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
}) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
