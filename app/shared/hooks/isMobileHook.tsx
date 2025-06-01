import { useState, useEffect } from "react";

const IsMobileHook = () => {
  const [isClient, setIsClient] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(1280);

  useEffect(() => {
    // document.documentElement.classList.toggle(
    //   "dark",
    //   localStorage.theme === "dark" ||
    //     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    // );
    // console.log(localStorage.theme)
    // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = "light";
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return isMobile;
};

export default IsMobileHook;
