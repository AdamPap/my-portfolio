import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../style/theme.config";
import "../app.css";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {!isLoading ? <Component {...pageProps} /> : <Loader />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
