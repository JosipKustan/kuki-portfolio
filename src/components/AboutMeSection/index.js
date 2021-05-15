import { motion } from "framer-motion";
import React from "react";
import {
  SectionContainer,
  SectionTitle,
  AboutMeImage,
  SectionParagraf,
  DivWrapper,
} from "./AboutMeElements";

const AboutMeComponent = () => {
  return (
    <SectionContainer id="aboutMe_page">
      <DivWrapper>
        <SectionTitle> Who am I? </SectionTitle>
        <AboutMeImage />
        <SectionParagraf>
          {" "}
          I am a passionate amature maker of things and Software Engineer
          student!{" "}
        </SectionParagraf>
      </DivWrapper>
    </SectionContainer>
  );
};

export default AboutMeComponent;
