import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import Drawer from "../Mobile/Drawer";
import HeaderAbout from "./HeaderAbout";
import HeroAbout from "./HeroAbout";
import ServicesAbout from "./ServicesAbout";
import TeamAbout from "./TeamAbout";
import TeamHomeOne from "./TeamHomeOne";
import { motion } from 'framer-motion/dist/framer-motion'

function AboutUs() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <motion.div
    initial = {{width: 0 }}
    animate = {{width: "100%" }}
    exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
    >
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
      <HeroAbout />
      {/* <ServicesAbout /> */}
      <TeamHomeOne />
      {/* <TeamAbout /> */}
      <FooterHomeOne className="appie-footer-about-area" />
      <BackToTop />
    </motion.div>
  );
}

export default AboutUs;
