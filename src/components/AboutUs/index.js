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

function AboutUs() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderAbout drawer={drawer} action={drawerAction.toggle} />
      <HeroAbout />
      <ServicesAbout />
      <TeamHomeOne />
      <TeamAbout />
      <FooterHomeOne className="appie-footer-about-area" />
      <BackToTop />
    </>
  );
}

export default AboutUs;
