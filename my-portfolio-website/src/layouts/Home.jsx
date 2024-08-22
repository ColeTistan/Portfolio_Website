import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="avatar" id="portfolio">
        <div className="w-32 z-0 border-[5px] border-secondary border-opacity-35 hover:border-primary rounded-full transition-all duration-300">
          <img src="/images/profile.png" />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center gap-1 md:w-3/5">
        <p className="text-3xl leading-normal my-2">
          Howdy There!&nbsp;👋&nbsp;
          <span className="hover-primary">Cole Tistan</span>
          &nbsp;Here!&nbsp;I'm a&nbsp;
          <span className="hover-primary">Software Engineer</span>
          &nbsp;at&nbsp;
          <span className="hover-primary">Spectrum Software Technology</span>
          &nbsp;near Atlantic City, NJ.&nbsp;My current tech stack is working
          with JavaScript, Express, MongoDB and Python.
        </p>
      </div>
      <div className="flex md:flex-row flex-col join md:gap-x-2 gap-3">
        <a
          href="https://github.com/ColeTistan"
          target="_blank"
          className="btn hover:shadow-md btn-primary text-slate-50 px-7 rounded-full text-base"
        >
          Github
          <IconContext.Provider value={{ className: "icon-lg" }}>
            <FaGithub />
          </IconContext.Provider>
        </a>
        <a
          href="https://www.linkedin.com/in/coletistan/"
          target="_blank"
          className="btn hover:shadow-md btn-primary text-slate-50 px-7 rounded-full text-base"
        >
          Linkedin
          <IconContext.Provider value={{ className: "icon-lg" }}>
            <FaLinkedin />
          </IconContext.Provider>
        </a>
        <a
          href="../../public/images/resume.pdf"
          target="_blank"
          type="application/pdf"
          className="btn hover:shadow-md btn-primary text-slate-50 px-7 rounded-full text-base"
        >
          Resume
          <IconContext.Provider value={{ className: "icon-lg" }}>
            <IoIosDocument />
          </IconContext.Provider>
        </a>
      </div>
    </>
  );
};

export default Home;