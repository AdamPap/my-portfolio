// import "../public/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../style/theme.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
