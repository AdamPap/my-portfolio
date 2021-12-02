import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../style/theme.config";
import "../app.css";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../components/Loader";
import { SmoothScrollContainer } from "../components/SmoothScrollContainer";

const StyledViewport = styled.div`
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const viewportRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {!isLoading ? (
          <StyledViewport ref={viewportRef}>
            <SmoothScrollContainer isLoading={isLoading}>
              <Component {...pageProps} />
            </SmoothScrollContainer>
          </StyledViewport>
        ) : (
          <Loader />
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
