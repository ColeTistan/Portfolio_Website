import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer items-center px-12 py-4 mt-20">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://github.com/ColeTistan"
            target="_blank"
            className="flex flex-row items-center gap-x-2 text-3xl"
          >
            <IconContext.Provider value={{ className: "icon-lg" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.linkedin.com/in/coletistan/"
            target="_blank"
            className="flex flex-row items-center gap-x-2 text-3xl"
          >
            <IconContext.Provider value={{ className: "icon-lg" }}>
              <FaLinkedin />
            </IconContext.Provider>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
