import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import DetailsService from './DetailsService';
import HeaderService from './HeaderService';
import HeroService from './HeroService';
import { motion } from "framer-motion/dist/framer-motion"

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <motion.div
        initial = {{width: 0 }}
        animate = {{width: "100%" }}
        exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
        >
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroService />
            <DetailsService />
            <FooterHomeOne />
            <BackToTop />
        </motion.div>
    );
}

export default Service;
