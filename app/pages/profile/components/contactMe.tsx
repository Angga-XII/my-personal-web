import styles from "./contactMe.module.css";
import * as ConstantString from "../../../shared/utils/constantString";
import type { Mode } from "../../../shared/utils/modeInterface";
import * as TextWrapper from "../../../shared/components/textWrapper";
import GithubIcon from "/assets/images/github.svg";
import InstaIcon from "/assets/images/instagram.svg";
import LinkedinIcon from "/assets/images/linkedin.svg";
import UpworkIcon from "/assets/images/upwork.svg";
import GmailIcon from "/assets/images/gmail.svg";
import clsx from "clsx";

let isMobile: boolean;

const Sosmed = (props: any) => {
  return (
    <a className={styles.sosmed} href={props.href}>
      <div>
        <img className={clsx(styles.img)} src={props.name} />
      </div>
    </a>
  );
};

const ContactMe = (props: Mode) => {
  isMobile = props.isMobile!;
  return (
    <div>
      <TextWrapper.Heading1>{ConstantString.getInTouch}</TextWrapper.Heading1>
      <TextWrapper.Paragraph>{ConstantString.businessInquiry}</TextWrapper.Paragraph>
      <div className="my-[128px] flex items-center justify-center">
        <Sosmed href={ConstantString.linkInstagram} name={InstaIcon} />
        <Sosmed href={ConstantString.linkGithub} name={GithubIcon} />
        <Sosmed href={ConstantString.linkEmail} name={GmailIcon} />
        <Sosmed href={ConstantString.linkLinkedin} name={LinkedinIcon} />
        <Sosmed href={ConstantString.linkUpwork} name={UpworkIcon} />
      </div>
    </div>
  );
};

export default ContactMe;
