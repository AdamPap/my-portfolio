import { createGlobalStyle } from "styled-components";

export interface MyTheme {
  bg: string;
  primary: string;
  white: string;
  wrapper: {
    regular: string;
    small: string;
  };
}

export interface ThemeProps {
  theme: MyTheme;
}

export const theme = {
  bg: "#111111",
  primary: "#08FDD9",
  white: "white",
  wrapper: {
    regular: "1200px",
    small: "400px",
  },
};

export const GlobalStyles = createGlobalStyle`
* {  
   box-sizing: border-box;
  }

html,
body {   
  margin: 0;   
  padding: 0;   
  background: ${({ theme }: ThemeProps) => theme.bg};   
  color: ${({ theme }: ThemeProps) => theme.primary};   
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, Segoe UI,
  Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
  sans-serif !important; 
  font-weight: 400;   
  font-style: normal;   
  transition: all 0.50s linear;
}
  
a {
  color: inherit;
  text-decoration: none;
}

input, textarea, button {
  font-family: inherit
}`;
