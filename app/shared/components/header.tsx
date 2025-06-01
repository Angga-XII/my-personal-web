import { NavLink } from "react-router";
import { clsx } from "clsx";
import IsMobileHook from "../hooks/isMobileHook";
import { useState } from "react";
import DarkIcon from "/assets/images/dark.svg";
import styles from "./header.module.css";

const TailwindToggle = () => {
  const toggleDarkMode = (props: any) => {
    const theme = document.body.getAttribute("data-theme");
    if (theme == "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  return (
    <div className="container">
      <label className="text-dark group flex cursor-pointer select-none items-center">
        <div className="relative">
          <input type="checkbox" className="sr-only" onClick={toggleDarkMode} />
          <div className={clsx(styles["toggle-bg"], "block h-8 w-14 rounded-full")}></div>
          <div className={clsx(styles['toggle-circle'],"group-has-checked:translate-x-full absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full  transition")}>
            {/* DARK MODE LOGO */}
            <span className="group-has-checked:block hidden">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path
                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"                  fill="black"
                  stroke="black"
                  stroke-width="1"
                />
              </svg>
            </span>
            {/* DARK MODE LOGO */}
            <span className="group-has-checked:hidden">
              <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="white"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </span>
          </div>
        </div>
      </label>
    </div>
  );
};

const Header = () => {
  const isMobile = IsMobileHook();
  // const isMobile = true
  return (
    <header className={clsx(styles.header, "shadow-blue-200")}>
      <a className="container mx-auto flex items-center justify-between px-2 py-3">
        <TailwindToggle />
        <nav>
          <ul className={clsx("flex space-x-6 font-mono", isMobile ? "text-l" : "text-2xl")}>
            {["Profile", "Resume", "Portfolio", "Message"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Profile" ? "/" : `/${item.toLowerCase()}`}
                  className={({isActive}) => clsx(styles.link, "py-2 transition-colors", isActive ? "border-b-2" : "")}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </a>
    </header>
  );
};

export default Header;
