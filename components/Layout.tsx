import React from "react";
import { WrapperVariant } from "./Box";
import { Navbar } from "./Navbar";
import { Wrapper } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <>
      <Wrapper variant={variant}>
        <Navbar />
        {children}
      </Wrapper>
    </>
  );
};
