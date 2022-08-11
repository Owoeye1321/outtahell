import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import PastingAllInformationFromHostels from "./fetching";

import { motion } from "framer-motion/dist/framer-motion"

function GetStarted() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <motion.div
    initial = {{opacity: 0 }}
    animate = {{opacity: 1 }}
    exit = {{ opacity: 0 }}
    >
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <PastingAllInformationFromHostels/>
      <FooterHomeOne />
      <BackToTop />
    </motion.div>
  );
}

export default GetStarted;
