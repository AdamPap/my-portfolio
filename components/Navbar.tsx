import React from "react";
import styled from "styled-components";

interface NavbarProps {}

const StyledNavbar = styled.div`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
`;

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <StyledNavbar>
      <div>LOGO</div>
      <div>BURGER MENU</div>
    </StyledNavbar>
  );
};
