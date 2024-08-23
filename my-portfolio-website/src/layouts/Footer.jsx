import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-neutral text-slate-50 p-10 mt-10">
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <p className="text-base">Email: coletistan@gmail.com</p>
          <p className="text-base">Phone #: (856) 535-1401</p>
        </nav>
        <nav>
          <h6 className="footer-title">Pages</h6>
          <a className="link-base" href="#portfolio">Portfolio</a>
          <a className="link-base" href="#skills">Skills</a>
          <a className="link-base" href="#experience">Experience</a>
          <a className="link-base" href="#contact">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/coletistan/" target="_blank">
              <IconContext.Provider value={{ className: "icon-lg" }}>
                <FaLinkedin />
              </IconContext.Provider>
            </a>
            <a href="https://github.com/ColeTistan" target="_blank">
              <IconContext.Provider value={{ className: "icon-lg" }}>
                <FaGithub />
              </IconContext.Provider>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
