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

export type FlexDirection = "column" | "row";

interface BoxProps {
  width?: string;
  variant?: WrapperVariant;
  padding?: string;
  margin?: string;
  flex?: boolean;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  height?: string;
  minHeight?: string;
  flexDirection?: FlexDirection;
}

const StyledBox = styled.div<BoxProps>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => (props.variant === "small" ? "400px" : "1200px")};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  flex-direction: ${(props) => props.flexDirection};
`;

export const Box: React.FC<BoxProps> = ({
  children,
  variant = "regular",
  padding = "0px",
  margin = "0px",
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  height,
  width,
  minHeight,
}) => {
  return (
    <StyledBox
      justifyContent={justifyContent}
      alignItems={alignItems}
      flex={flex}
      flexDirection={flexDirection}
      variant={variant}
      padding={padding}
      margin={margin}
      height={height}
      width={width}
      minHeight={minHeight}
    >
      {children}
    </StyledBox>
  );
};
