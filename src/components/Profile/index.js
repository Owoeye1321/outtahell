import React from "react";
import useToggle from "../../Hooks/useToggle";
import BackToTop from "../BackToTop";
import Drawer from "../Mobile/Drawer";
import HomeOneHeader from "../HomeOne/HomeOneHeader";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import UserProfile from "./UserProfile";

function Profile() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HomeOneHeader action={drawerAction.toggle} />
      <UserProfile />
      <FooterHomeOne />
      <BackToTop />
    </>
  );
}

export default Profile;
