import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { useState, useEffect } from "react";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import {
  useViewportScroll,
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

function App() {
  return (
    <Router>
      <Home />
      <Work />
      <AboutMe />
      <ContactMe />
      <ParallaxBackground />
      <motion.div className="footer">
        This Website is still in development.
      </motion.div>
    </Router>
  );
}
export default App;

/*Background Parallax effect paramiters*/
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
  const motionVal = useMotionValue(0);
  const springY = useSpring(scrollY, { bounce: 0.6, mass: 0.2, damping: 5.2 });

  console.log("motionValue");
  console.log(motionVal);
  onscroll = () => {
    // console.log("viewport scroll");
    // console.log(scrollY);
    // console.log("useSpring");
    // console.log(springY);
  };

  const y1 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y2 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y3 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y4 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y5 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );
  const y6 = useTransform(
    springY,
    [height * getRandom(), height * 3],
    [-(height * getRandomOffset()), 0]
  );

  const imageOptimisation = "c_scale,q_39:420,w_1300";
  return (
    <>
      <div className="bodyDiv">
        <motion.div className="box" style={{ y: y1, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954462/LadyVLineArt_0002_-ShipOuter_yebwgq.webp`}
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y2, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954461/LadyVLineArt_0001_ShipInner_akdkfd.webp`}
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y3, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954461/LadyVLineArt_0003_ShipMasts_ocrl7d.webp`}
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y4, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954461/LadyVLineArt_0000_ShipSailsFront_zys3iq.webp`}
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y5, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954461/LadyVLineArt_0004_ShipSailsBack_qjb8tv.webp`}
          ></img>
        </motion.div>
        <motion.div className="box" style={{ y: y6, x: 0 }}>
          <img
            alt="LadyV"
            src={`https://res.cloudinary.com/josip-kuki/image/upload/${imageOptimisation}/v1620954461/LadyVLineArt_0005_LadyV_u2pn5w.webp`}
          ></img>
        </motion.div>
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ParallaxBackground />, rootElement);
