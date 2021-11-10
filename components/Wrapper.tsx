import React from "react";
import { Box, WrapperVariant } from "./Box";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box variant={variant} padding="0 60px">
      {children}
    </Box>
  );
};
