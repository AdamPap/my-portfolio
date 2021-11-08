import styled from "styled-components";

export type WrapperVariant = "small" | "regular";
export type JustifyContent =
  | "center"
  | "start"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type AlignItems =
  | "center"
  | "start"
  | "end"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface BoxProps {
  variant?: WrapperVariant;
  padding?: string;
  flex?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

const StyledBox = styled.div<BoxProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => props.padding};
  max-width: ${(props) => (props.variant === "small" ? "400px" : "1200px")};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const Box: React.FC<BoxProps> = ({
  children,
  variant = "regular",
  padding = "0px",
  flex,
  justifyContent,
  alignItems,
}) => {
  return (
    <StyledBox
      justifyContent={justifyContent}
      alignItems={alignItems}
      flex={flex}
      variant={variant}
      padding={padding}
    >
      {children}
    </StyledBox>
  );
};
