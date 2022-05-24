import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import Admin from './admin'
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import FooterHomeOne from "../HomeOne/FooterHomeOne";

function DashBoard() {
    const [drawer, drawerAction] = useToggle(false);
    return(
          <>
          <Drawer drawer={drawer} action={drawerAction.toggle} />
          <HomeOneHeader action={drawerAction.toggle} />
          <Admin/>
          <FooterHomeOne />
          <BackToTop />
          </>
    )
}

export default DashBoard