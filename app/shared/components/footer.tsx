import type { Mode } from "../utils/modeInterface";
import { version } from "../../../package.json";
import { clsx } from "clsx";
import IsMobileHook from "../hooks/isMobileHook";

const Footer = (props: Mode) => {
  const isMobile = IsMobileHook();

  return (
    <footer className="px-[5%] font-bold font-mono container">
      {`Dev - v${version}`}
    </footer>
  );
};

export default Footer;
