import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "../ButtonElements";
import MyWorkArrowComponent from "../ArrowElement/index";
import {
  HeroContainer,
  HeroBg,
  VideoBgMobile,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import VideoDesktop from "../../videos/webreel_medium.mp4";
import VideoMobile from "../../videos/WeebReelMobile.mp4";
import useWindowDimensions from "../../useWindow";
// const VideoDesktopLazy = React.lazy(()=>import("../../videos/webreel_medium.mp4"));

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const {width}= useWindowDimensions();

  return (
    <HeroContainer id="home_page">
      <HeroBg>
        {
          width<=768?
          <VideoBgMobile autoPlay loop muted src={VideoMobile} type="video/mp4" />:
          <VideoBg autoPlay loop muted src={VideoDesktop} type="video/mp4" />
        }
      </HeroBg>

      <HeroContent>
        <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
          <HeroH1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Make your imagination real!
          </HeroH1>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={600} classNames="fade">
          <HeroP
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Contact me and let's make it real!
          </HeroP>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={1200} classNames="fade">
          <HeroBtnWrapper
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            <Button
              to="contactMe_page"
              smooth="true"
              duration={450}
              spy={true}
              exact="true"
              offset={-60}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Let's Talk! {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </CSSTransition>
      </HeroContent>

      <MyWorkArrowComponent />
    </HeroContainer>
  );
};

export default HeroSection;
