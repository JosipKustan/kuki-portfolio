import React from "react";
import theme from "../stylesheet";
import { ThemeProvider } from "styled-components";
import { MyWorkArrow, Arrow, MyWork } from "./ArrowElements";

const MyWorkArrowComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyWorkArrow
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.14 }}
      >
        <Arrow>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/5a84aade-b6b0-434a-b51e-4d181e644355.svg"
          />
        </Arrow>
        <MyWork
          to="work_page"
          smooth="true"
          duration={800}
          spy={true}
          exact="true"
          offset={-60}
        >
          My Work
        </MyWork>
      </MyWorkArrow>
    </ThemeProvider>
  );
};

export default MyWorkArrowComponent;
