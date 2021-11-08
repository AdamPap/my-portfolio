import styled from "styled-components";

export type WrapperVariant = "small" | "regular";

interface BoxProps {
  variant?: string;
}

interface StyledBoxProps {
  variant?: string;
}

const StyledBox = styled.div<StyledBoxProps>`
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) => (props.variant === "small" ? "400px" : "1200px")};
`;

export const Box: React.FC<BoxProps> = ({ children, variant = "regular" }) => {
  return <StyledBox variant={variant}>{children}</StyledBox>;
};
