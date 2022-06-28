<<<<<<< HEAD
import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import Drawer from "../Mobile/Drawer";
import HeaderNews from "../News/HeaderNews";
import HeroNews from "../News/HeroNews";
import Forms from "./Forms";

function Contact() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderNews drawer={drawer} action={drawerAction.toggle} />
      <HeroNews
        title="Blogs"
        breadcrumb={[
          { link: "/", title: "home" },
          { link: "/news", title: "Blogs" },
        ]}
      />
      <Forms />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
=======
import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';
import { motion } from 'framer-motion/dist/framer-motion'

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <motion.div
        initial = {{width: 0 }}
        animate = {{width: "100%" }}
        exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
        >
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Blogs"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/news', title: 'Blogs' },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </motion.div>
    );
>>>>>>> 4da28fb9f4c6f4120b02771001684aceee35b89a
}

export default Contact;
