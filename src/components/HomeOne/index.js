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

function HomeOne() {
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <HeroHomeOne />
      <ServicesHomeOne />
      <TrafficHomeOne />
      <TestimonialHomeOne />
      <FaqHomeOne />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default HomeOne;
