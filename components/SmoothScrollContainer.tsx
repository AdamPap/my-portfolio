import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface SmoothScrollContainerProps {
  isLoading: boolean;
}

gsap.registerPlugin(ScrollTrigger);

const StyledSmoothScrollContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

export const SmoothScrollContainer: React.FC<SmoothScrollContainerProps> = ({
  children,
  isLoading,
}) => {
  const smoothScrollContainerRef =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let height: number;
    setHeight();

    function setHeight() {
      height = smoothScrollContainerRef.current.clientHeight;
      document.body.style.height = height + "px";
    }

    ScrollTrigger.addEventListener("refreshInit", setHeight);

    gsap.to(smoothScrollContainerRef.current, {
      y: () => -(height - document.documentElement.clientHeight),
      // y: () => -1000,
      ease: "none",
      rotation: 0.01,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, [isLoading]);

  return (
    <StyledSmoothScrollContainer ref={smoothScrollContainerRef}>
      {children}
    </StyledSmoothScrollContainer>
  );
};
