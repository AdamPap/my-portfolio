import gsap from "gsap";
import React, { useEffect } from "react";
import NextLink from "next/link";
import { Github } from "react-bootstrap-icons";
import styled from "styled-components";
import { theme } from "../style/theme.config";

interface ContactSection2Props {}

const StyledContactSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  color: ${(props) => props.theme.primary};
`;

const StyledEmail = styled.a`
  font-size: 4rem;
  font-weight: bolder;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin-top: 2rem;
`;

const GithubWrapper = styled.div`
  /* TODO: */
`;

export const ContactSection2: React.FC<ContactSection2Props> = ({}) => {
  useEffect(() => {
    document
      .querySelector(".emailContainer")
      ?.addEventListener("mouseleave", () => {
        // gsap.to(".emailContainer", { duration: 0.3, height: 150, width: 150 });
        gsap.to(".mouseFollower", {
          duration: 0.3,
          scale: 1,
          x: 0,
          y: 0,
          background: "transparent",
        });
        gsap.to(".mouseText", { visibility: "hidden" });
      });

    document
      .querySelector(".emailContainer")
      ?.addEventListener("mouseenter", () => {
        // gsap.to(".emailContainer", { duration: 0.3, height: 200, width: 200 });
        gsap.to(".mouseFollower", {
          duration: 0.3,
          scale: 2.4,
          background: theme.primary,
        });
        gsap.to(".mouseText", { visibility: "visible" });
      });

    // document.querySelector(".emailContainer").mousemove(function (e) {
    //   callParallax(e);
    // });

    // function callParallax(e) {
    //   parallaxIt(e, ".email", 80);
    // }

    // function parallaxIt(e, target, movement) {
    //   var cont = document.querySelector(".container");
    //   var relX = e.pageX - cont.offset().left;
    //   var relY = e.pageY - cont.offset().top;

    //   TweenMax.to(target, 0.3, {
    //     x: ((relX - $this.width() / 2) / $this.width()) * movement,
    //     y: ((relY - $this.height() / 2) / $this.height()) * movement,
    //     ease: Power2.easeOut,
    //   });
    // }
  }, []);

  return (
    <StyledContactSection>
      <div>
        <StyledH2>Are you interested in my work ?</StyledH2>
        <div className="emailContainer">
          <StyledEmail className="email" href="mailto:adampapamast@gmail.com">
            adampapamast@gmail.com
          </StyledEmail>
        </div>
        <StyledIconsWrapper>
          {/* <NextLink href="https://github.com/AdamPap"> */}
          <a
            target="_blank"
            href="https://github.com/AdamPap"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          {/* </NextLink> */}
        </StyledIconsWrapper>
      </div>
    </StyledContactSection>
  );
};
