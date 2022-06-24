import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import FaqHomeOne from "./FaqHomeOne";
import FooterHomeOne from "./FooterHomeOne";
import HeroHomeOne from "./HeroHomeOne";
import HomeOneHeader from "./HomeOneHeader";
import ServicesHomeOne from "./ServicesHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import TrafficHomeOne from "./TrafficHomeOne";
import { motion } from "framer-motion/dist/framer-motion"

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <motion.div
    initial = {{width: 0 }}
    animate = {{width: "100%" }}
    exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
    >
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <HeroHomeOne />
      <ServicesHomeOne />
      <TrafficHomeOne />
      <TestimonialHomeOne />
      <FaqHomeOne />
      <FooterHomeOne />
      <BackToTop />
    </motion.div>
  );
}

export default HomeOne;
