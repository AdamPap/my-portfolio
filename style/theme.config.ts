import { createGlobalStyle, DefaultTheme } from "styled-components";

export const theme = {
  // body: "#fffff",
  // main: "#5C14DB",
  // mainColor: "#FFFFFF",
  // accent: "#E5DE17",
  // accentColor: "#161616",
  // secondary: "#FFFFFF",
  // secondaryColor: "#343434",
  // dullColor: "#343434",
  // ternary: "#000000",
  // codeColor: "#D121C5",
  bg: "#111111",
  primary: "#08FDD9",
  white: "white",
};

interface MyTheme {
  theme: typeof theme;
}

export const GlobalStyles = createGlobalStyle`
* {  
   box-sizing: border-box;
  }

html,
body {   
  margin: 0;   
  padding: 0;   
  background: ${({ theme }: MyTheme) => theme.bg};   
  color: ${({ theme }: MyTheme) => theme.primary};   
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
