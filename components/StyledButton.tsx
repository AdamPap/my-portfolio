import styled from "styled-components";
import ArrowRight from "../components/ArrowRight";

const StyledButton = styled.button`
  /* display: inline-block; */
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.bg};
  padding: 15px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.bg};
  }
  &:hover ${ArrowRight} {
    margin-left: 20px;
    margin-right: 0px;
  }
`;

export default StyledButton;
