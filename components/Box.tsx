import styled from "styled-components";

export type WrapperVariant = "small" | "regular";

interface BoxProps {
  variant?: string;
  padding?: string;
}

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  max-width: ${(props) => (props.variant === "small" ? "400px" : "1200px")};
`;

export const Box: React.FC<BoxProps> = ({
  children,
  variant = "regular",
  padding = "0px",
}) => {
  return (
    <StyledBox variant={variant} padding={padding}>
      {children}
    </StyledBox>
  );
};
