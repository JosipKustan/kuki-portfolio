import React from "react";
import {
  SectionContainer,
  SectionTitle,
  SectionParagraf,
  SocialMediaContainer,
  MailContainer,
  MailText,
} from "./ContactMeElements";

import {
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiMailLine,
} from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";
import { DivWrapper } from "../AboutMeSection/AboutMeElements";

const aVariants = {
  hover: { scale: 1.03, transition: { duration: 0.07 } },
};

const ContactMeComponent = () => {
  return (
    <SectionContainer id="contactMe_page">
      <DivWrapper>
        <SectionTitle> Where to find me? </SectionTitle>
        <SectionParagraf>
          {" "}
          You can find me on all these platforms and I am always willing to talk
          about anything!{" "}
        </SectionParagraf>
        <SocialMediaContainer>
          <motion.a
            variants={aVariants}
            whileHover="hover"
            className="nostyle_a"
            href="https://www.linkedin.com/in/josip-kuštan-452189201/"
          >
            <RiLinkedinBoxLine />
          </motion.a>
          <motion.a
            variants={aVariants}
            whileHover="hover"
            className="nostyle_a"
            href="https://www.instagram.com/kukicrafts/"
          >
            <IoLogoInstagram />{" "}
          </motion.a>
          <motion.a
            variants={aVariants}
            whileHover="hover"
            className="nostyle_a"
            href="https://www.youtube.com/channel/UC_hjOP9OjeNMn4LlVr2u3oA"
          >
            <RiYoutubeLine />{" "}
          </motion.a>
          <motion.a
            variants={aVariants}
            whileHover="hover"
            className="nostyle_a"
            href="https://www.facebook.com/josip.kustan.39"
          >
            <RiFacebookBoxLine />{" "}
          </motion.a>
        </SocialMediaContainer>
        <MailContainer>
          <RiMailLine />
          <MailText>josip.kustan@gmail.com</MailText>
        </MailContainer>
      </DivWrapper>
    </SectionContainer>
  );
};

export default ContactMeComponent;
