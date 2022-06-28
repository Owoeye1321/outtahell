import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import Admin from "./admin";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import { motion } from 'framer-motion/dist/framer-motion'

function DashBoard() {
<<<<<<< HEAD
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <Admin />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
=======
    const [drawer, drawerAction] = useToggle(false);
    return(
          <motion.div
          initial = {{width: 0 }}
            animate = {{width: "100%" }}
            exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
          >
          <Drawer drawer={drawer} action={drawerAction.toggle} />
          <HomeOneHeader action={drawerAction.toggle} />
          <Admin/>
          <FooterHomeOne />
          <BackToTop />
          </motion.div>
    )
>>>>>>> 4da28fb9f4c6f4120b02771001684aceee35b89a
}

export default DashBoard;
