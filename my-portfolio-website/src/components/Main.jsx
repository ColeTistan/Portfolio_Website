import React from "react";

function Main() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-4 mx-auto">
      <div className="avatar">
        <div className="w-28 border-4 border-slate-300 corporate:border-slate-700 rounded-full hover:border-orange-500 transition-all duration-300">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex flex-col justify-center text-center gap-1 md:w-3/5">
        <p className="text-3xl leading-normal">
          <span className="font-medium">Howdy There!&nbsp;👋&nbsp;</span>
          <span className="hover:text-orange-500 transition-all duration-200 font-medium">
            Cole Tistan
          </span>
          &nbsp;Here!&nbsp;I'm a&nbsp;
          <span className="font-medium">Software Engineer</span>&nbsp;at&nbsp;
          <span className="font-medium">Spectrum Software Technology</span>
          &nbsp;near Atlantic City, NJ.&nbsp;My current tech stack is working
          with JavaScript, Express, MongoDB and Python.
        </p>
      </div>
    </div>
  );
}

export default Main;
