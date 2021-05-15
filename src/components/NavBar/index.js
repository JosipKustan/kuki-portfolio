import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
//installed react-icons
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLink,
} from "./NavBarElements";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Josip Kuštan
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home_page"
                smooth="true"
                duration={450}
                spy={true}
                exact="true"
                offset={-60}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="work_page"
                smooth="true"
                duration={450}
                spy={true}
                exact="true"
                offset={-60}
              >
                My Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="aboutMe_page"
                smooth="true"
                duration={450}
                spy={true}
                exact="true"
                offset={-60}
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contactMe_page"
                smooth="true"
                duration={450}
                spy={true}
                exact="true"
                offset={-60}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
