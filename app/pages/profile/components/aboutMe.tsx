import styles from "./aboutMe.module.css";
import * as ConstantString from "../../../shared/utils/constantString";
import type { Mode } from "../../../shared/utils/modeInterface";
import ProfilePhoto from "/assets/images/profilephoto.png";

import { motion } from "framer-motion";
import { clsx } from "clsx";

let isMobile: boolean;

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const baseAnimation = {
  animate: "visible",
  initial: "hidden",
  variants: variants,
};

const HelloComponent = () => {
  return (
    <motion.div
      className={isMobile ? styles["hello-mobile"] : styles["hello-web"]}
      {...baseAnimation}
      transition={{ ease: "anticipate", duration: 0.75, delay: 0.25 }}>
      {ConstantString.hello}
    </motion.div>
  );
};

const NameComponent = () => {
  return (
    <motion.h1
      className={clsx(isMobile ? styles["name-mobile"] : styles["name-web"])}
      {...baseAnimation}
      transition={{ ease: "anticipate", duration: 0.5, delay: 0.5 }}>
      {ConstantString.name}
    </motion.h1>
  );
};

const TitleComponent = () => {
  return (
    <div className={clsx(isMobile ? styles["title-mobile"] : styles["title-web"], "flex flex-row items-baseline-last")}>
      <motion.div
        className={clsx(isMobile ? "text-[22px] mr-1" : "text-[30px] mr-2", "")}
        {...baseAnimation}
        transition={{ ease: "anticipate", duration: 0.5, delay: 0.5 }}>
        a
      </motion.div>
      <motion.h1
        className={clsx(isMobile ? "text-[32px]" : "text-[40px]", "")}
        {...baseAnimation}
        transition={{ ease: "anticipate", duration: 0.5, delay: 0.5 }}>
        {ConstantString.title}
      </motion.h1>
    </div>
  );
};

const DescriptionComponent = () => {
  return (
    <motion.div
      className={clsx(isMobile ? styles["exp-mobile"] : styles["exp-web"], "mb-[5%] text-justify")}
      {...baseAnimation}
      transition={{ ease: "anticipate", duration: 0.75, delay: 0.25 }}>
      {ConstantString.description}
    </motion.div>
  );
};

const ContactComponent = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.a
      onClick={scrollToBottom}
      className={clsx(styles["contact-button"])}
      rel="noreferrer"
      target="_blank">
      {ConstantString.talk}
    </motion.a>
  );
};

const MobileContainer = () => {
  return (
    <div className={clsx(styles["mobile"], "h-svh w-full")}>
      <div className={clsx(styles.wrapper, "mb-2.5 gap-2")}>
        <img src={ProfilePhoto} width={280} />
      </div>
      <div className={clsx("z-2 max-w-[90%] flex-2 gap-3 text-center", "mt-[8%] px-[2%]")}>
        <HelloComponent />
        <NameComponent />
        <TitleComponent />
        <DescriptionComponent />
        <ContactComponent />
      </div>
    </div>
  );
};

const WebContainer = () => {
  return (
    <div className={clsx(styles["web"])}>
      <div className={clsx(styles.wrapper)}>
        <img src={ProfilePhoto} width={420} />
      </div>
      <div className={clsx("z-2 max-w-[90%] flex-4 gap-3 text-center")}>
        <HelloComponent />
        <NameComponent />
        <TitleComponent />
        <DescriptionComponent />
        <ContactComponent />
      </div>
    </div>
  );
};

const AboutMe = (props: Mode) => {
  isMobile = props.isMobile!;
  if (isMobile) {
    return <MobileContainer />;
  }
  return <WebContainer />;
};

export default AboutMe;
