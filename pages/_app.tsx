import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../style/theme.config";
import "../app.css";
import { useEffect, useRef, useState } from "react";
import { Loader } from "../components/Loader";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const StyledSmoothScrollContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  const viewportRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const smoothScrollContainerRef =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 4000);
  }, []);

  useEffect(() => {
    let height: number;
    function setHeight() {
      height = smoothScrollContainerRef.current.clientHeight;
      document.body.style.height = height + "px";
    }
    ScrollTrigger.addEventListener("refreshInit", setHeight);

    gsap.to(smoothScrollContainerRef.current, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* {!isLoading ?  */}
        <StyledViewport ref={viewportRef}>
          <StyledSmoothScrollContainer ref={smoothScrollContainerRef}>
            <Component {...pageProps} />
          </StyledSmoothScrollContainer>
        </StyledViewport>
        {/* : <Loader />} */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
