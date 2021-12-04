import React from "react";
import styled from "styled-components";

interface NavbarProps {}

const StyledNavbar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <StyledNavbar>
      <div>LOGO</div>
      <div>CONTACT ME</div>
    </StyledNavbar>
  );
};
