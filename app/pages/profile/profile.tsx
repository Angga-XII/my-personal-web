// pages/ProfilePage.js
import IsMobileHook from "../../shared/hooks/isMobileHook";
import BodyWrapper from "../../shared/components/bodyWrapper";
import AboutMe from "./components/aboutMe";
import Experience from "./components/Experience";
import ContactMe from "./components/contactMe";
import styles from "./profile.module.css";
import { useEffect } from "react";

const Profile = () => {
  const isMobile = IsMobileHook();

  return (
    <BodyWrapper isMobile={isMobile}>
      <AboutMe isMobile={isMobile} />
      <Experience isMobile={isMobile} />
      <ContactMe isMobile={isMobile} />
    </BodyWrapper>
  );
};

export default Profile;
