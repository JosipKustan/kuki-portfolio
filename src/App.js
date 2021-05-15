import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { useState, useEffect } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import { useViewportScroll, motion, useTransform } from "framer-motion";

function App() {
  return (
    <Router>
      <Home />
      <Work />
      <AboutMe />
      <ContactMe />
      <ParallaxBackground />
    </Router>
  );
}

const max = 0.9;
const min = 0.5;
const max2 = 0.3;
const min2 = 0.05;
function getRandom() {
  return 1 + Math.random() * (max - min) + min;
}
function getRandomOffset() {
  return 1 + Math.random() * (max2 - min2) + min2;
}

export default App;

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return {
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function ParallaxBackground() {
  const { height } = useWindowDimensions();
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y2 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y3 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y4 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y5 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y6 = useTransform(
    scrollY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );

  return (
    <>
      <div className="bodyDiv">
        <motion.div className="box" style={{ y: y1, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954462/LadyVLineArt_0002_-ShipOuter_yebwgq.png"
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y2, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954461/LadyVLineArt_0001_ShipInner_akdkfd.png"
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y3, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954461/LadyVLineArt_0003_ShipMasts_ocrl7d.png"
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y4, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954461/LadyVLineArt_0000_ShipSailsFront_zys3iq.png"
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y5, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954461/LadyVLineArt_0004_ShipSailsBack_qjb8tv.png"
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y6, x: 0 }}>
          <img
            alt="LadyV"
            src="https://res.cloudinary.com/josip-kuki/image/upload/v1620954461/LadyVLineArt_0005_LadyV_u2pn5w.png"
          ></img>
        </motion.div>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ParallaxBackground />, rootElement);
