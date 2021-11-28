import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

interface LoaderProps {}

const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: ${(props) => props.theme.primary};
`;

export const Loader: React.FC<LoaderProps> = ({}) => {
  const counterRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    let counter = { val: 0 };
    let endVal = 100;

    gsap.to(counter, {
      val: endVal,
      duration: 3,
      roundProps: "val",
      onUpdate: function () {
        if (counterRef.current) {
          counterRef.current.innerHTML = counter.val.toString();
        }
      },
    });
  }, []);

  return (
    <StyledLoader>
      <div id="counter" ref={counterRef}>
        0
      </div>
    </StyledLoader>
  );
};
