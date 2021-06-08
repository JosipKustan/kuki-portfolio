import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  justify-content: center;
  padding-top: 4vh;
  padding-bottom: 4vh;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
`;
export const DivWrapper = styled(motion.div)`
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4vh;
  padding-bottom: 4vh;
  align-items: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 2.7rem;
  text-align: center;
  text-shadow: 2px 2px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 3.3rem;
  }
`;

export const AboutMeImage = styled.img`
  height: 330px;
  width: 200px;
  background-image: url("https://res.cloudinary.com/josip-kuki/image/upload/c_scale,q_61,w_565/v1621066406/myFace_uefskw.webp");
  background-size: cover;
`;

export const SectionParagraf = styled.p`
  color: #fff;
  font-size: 2vh;
  text-align: center;
  max-width: 600px;
  margin-top: 4vh;
`;
