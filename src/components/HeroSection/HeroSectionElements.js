import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const VideoBgMobile = styled.video`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 70vw;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled(motion.h1)`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 4rem;
  }
`;

export const HeroP = styled(motion.p)`
  margin-top: 24px;
  color: #fff;
  font-size: 2vh;
  text-align: center;
  max-width: 600px;
`;

export const HeroBtnWrapper = styled(motion.div)`
  margin: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
