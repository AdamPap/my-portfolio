import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface LoaderProps {}

const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 3rem;
  font-size: 6rem;
  color: ${(props) => props.theme.primary};
`;

const StyledLine = styled.div`
  width: 0%;
  border: 1px solid ${(props) => props.theme.primary};
  align-self: flex-start;
`;

export const Loader: React.FC<LoaderProps> = ({}) => {
  const counterRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const lineRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let counter = { val: 0 };
    let endVal = 100;

    gsap.to(counter, {
      val: endVal,
      duration: 4,
      roundProps: "val",
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.innerHTML = counter.val.toString();
        }
      },
    });

    let endWidth = "100%";

    gsap.to(lineRef.current, {
      width: endWidth,
      duration: 4,
    });
  }, []);

  return (
    <StyledLoader>
      <div ref={counterRef}>0</div>
      <StyledLine ref={lineRef} />
    </StyledLoader>
  );
};
