import React from "react";
import { Box } from "./Box";

interface WrapperProps {
  variant?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box variant={variant} padding="10px 30px">
      {children}
    </Box>
  );
};
