import type { NextPage } from "next";
import NextLink from "next/link";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { ContactSection2 } from "../components/ContactSection2";
import { Hero } from "../components/Hero";
import { ProjectSection } from "../components/OldProjectSection";

gsap.registerPlugin(ScrollTrigger);

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const StyledProjectsWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* align-items: center; */
`;

const MouseFollower = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.primary}60;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MouseText = styled.div`
  color: ${(props) => props.theme.bg};
  visibility: hidden;
  font-size: 8px;
  text-align: center;
`;

const Home: NextPage = () => {
  useEffect(() => {
    gsap.set(".mouseFollower", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".mouseFollower");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }, []);

  return (
    <>
      <MouseFollower className="mouseFollower">
        <MouseText className="mouseText">EMAIL ME</MouseText>
      </MouseFollower>
      <Layout>
        <StyledWrapper>
          <Hero />
        </StyledWrapper>

        <StyledProjectsWrapper>
          <ProjectSection />
          <ProjectSection />
        </StyledProjectsWrapper>
        <ContactSection2 />
      </Layout>
    </>
  );
};

export default Home;
