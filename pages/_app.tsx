import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../style/theme.config";
import "../app.css";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
