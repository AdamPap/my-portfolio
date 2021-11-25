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

gsap.registerPlugin(ScrollTrigger);

interface HeroTextProps {
  fontSize?: string;
}

interface StyledProjectWrapperProps {
  numOfChildren: number;
}

const HeroOutlinedText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  -webkit-text-fill-color: ${(props) => props.theme.bg};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
`;

const HeroText = styled.div<HeroTextProps>`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.fontSize};
`;

const HeroSubheader = styled.h3`
  font-size: 20px;
  font-weight: normal;
  display: inline-block;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const StyledH1 = styled.h1`
  display: inline-block;
  /* width: fit-content; */
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
        markers: true,
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

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !projectSectionsRefs.current.includes(el)) {
      projectSectionsRefs.current.push(el);
    }
  };

  return (
    <>
      <Layout>
        <Wrapper>
          <Box
            width="100%"
            height="100%"
            // padding="0 40px"
            margin="0 auto"
            flex
            alignItems="center"
            justifyContent="start"
          >
            <Box flex flexDirection="column" alignItems="start">
              <StyledH1>
                <HeroText fontSize="3rem">Hey, I'm Adam.</HeroText>
                <HeroOutlinedText fontSize="4rem">
                  Full Stack Web <br />
                  Developer
                </HeroOutlinedText>
              </StyledH1>
              <HeroSubheader>
                I am currently focusing on building web apps <br />
                with React and TypeScript!
              </HeroSubheader>
              <StyledButton padding="15px 20px">
                View Projects <ArrowRight />
              </StyledButton>
              {/* <StyledScrollDown>Scroll down</StyledScrollDown> */}
            </Box>
            {/* <NextLink href="/test" passHref>
            <a>
              <CircleButton variant="outline">View Projects</CircleButton>
            </a>
          </NextLink> */}
          </Box>
        </Wrapper>

        <StyledH1>
          <HeroOutlinedText fontSize="4rem">Projects</HeroOutlinedText>
        </StyledH1>
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
        <ContactSection />
      </Layout>
    </>
  );
};

export default Home;
