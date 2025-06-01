import styles from "./Experience.module.css";
import * as ConstantString from "../../../shared/utils/constantString";
import type { Mode } from "../../../shared/utils/modeInterface";

import { motion } from "framer-motion";
import { clsx } from "clsx";

let isMobile: boolean;

const Experience = (props: Mode) => {
  isMobile = props.isMobile!;
  return <div className="h-[300px]"></div>;
};

export default Experience;
