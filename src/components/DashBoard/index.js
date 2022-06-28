import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import Admin from "./admin";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import { motion } from 'framer-motion/dist/framer-motion'

function DashBoard() {

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

}

export default DashBoard;
