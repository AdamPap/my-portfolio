import type { NextPage } from "next";
import NextLink from "next/link";
import ArrowRight from "../components/ArrowRight";
import styled from "styled-components";
import { Box } from "../components/Box";
import { CircleButton } from "../components/CircleButton";
import { Layout } from "../components/Layout";
import StyledButton from "../components/StyledButton";
import { ProjectSection } from "../components/ProjectSection";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ContactSection } from "../components/ContactSection";
import { ContactSection2 } from "../components/ContactSection2";
import { Hero } from "../components/Hero";

gsap.registerPlugin(ScrollTrigger);

interface StyledProjectWrapperProps {
  numOfChildren: number;
}

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const StyledScrollDown = styled.div`
  border-top: 1px solid ${(props) => props.theme.primary};
  padding-top: 4px;
  transform: rotate(-90deg);
  transform-origin: top left;
  margin-top: 170px;
  width: 90px;
  font-size: 14px;
`;

const StyledProjectsWrapper = styled.div<StyledProjectWrapperProps>`
  /* width: ${(props) => props.numOfChildren * 100}vw; */
  width: 360vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
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
  const initialValues = [] as HTMLDivElement[];

  const projectSectionsRefs = useRef(initialValues);
  const projectsWrapperRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  projectSectionsRefs.current = [];

  useEffect(() => {
    let sections = gsap.utils.toArray(projectSectionsRefs.current);

    gsap.to(sections, {
      xPercent: -130 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: projectsWrapperRef.current,
        pin: true,
        scrub: 1.5,
        snap: 0,
        // markers: true,
        // base vertical scrolling on how wide the container is so
        // it feels more natural.
        end: "+=4500",
      },
    });

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(sections, "skewX", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    ScrollTrigger.create({
      // trigger: ".first",
      // start: "bottom bottom",
      // endTrigger: "last",
      // end: "bottom bottom",
      // scroller: projectsWrapperRef.current,
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);
        // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });

    // make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(sections, { transformOrigin: "right center", force3D: true });
  }, []);

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

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectSectionsRefs.current.includes(el)) {
      projectSectionsRefs.current.push(el);
    }
  };

  return (
    <>
      <MouseFollower className="mouseFollower">
        <MouseText className="mouseText">EMAIL ME</MouseText>
      </MouseFollower>
      <Layout>
        <StyledWrapper>
          <Hero />
        </StyledWrapper>

        <StyledProjectsWrapper ref={projectsWrapperRef} numOfChildren={3}>
          <div
            className="first"
            style={{ width: "100vw", marginLeft: "30vw" }}
            ref={addToRefs}
          >
            <ProjectSection>
              <h2>Ticketing</h2>
            </ProjectSection>
          </div>
          <div style={{ width: "100vw" }} ref={addToRefs}>
            <ProjectSection>
              <h2>Next Journey</h2>
            </ProjectSection>
          </div>
          <div className=".last" style={{ width: "100vw" }} ref={addToRefs}>
            <ProjectSection>
              <h2>Colorful</h2>
            </ProjectSection>
          </div>
        </StyledProjectsWrapper>
        {/* <ContactSection /> */}
        <ContactSection2 />
      </Layout>
    </>
  );
};

export default Home;
