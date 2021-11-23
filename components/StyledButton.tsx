import styled from "styled-components";
import ArrowRight from "../components/ArrowRight";

interface StyledButtonProps {
  margin?: string;
  padding?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  /* display: inline-block; */
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.bg};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
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
