import React from "react";
import { Navbar } from "./Navbar";
import { Wrapper } from "./Wrapper";

interface LayoutProps {
  variant?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Navbar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
