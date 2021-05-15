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
          I am a passionate amateur maker of fantasy and realistic models and
          miniatures. I also study Software Engineering! This Website is not
          only show of my artistic skills but my software engineering skills
          too!{" "}
        </SectionParagraf>
      </DivWrapper>
    </SectionContainer>
  );
};

export default AboutMeComponent;
