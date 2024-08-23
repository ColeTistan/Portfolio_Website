import React from "react";

const Divider = ({ title }) => {
  return (
    <div className="flex flex-col w-full my-6">
      <div className="divider text-2xl">{title}</div>
    </div>
  );
};

export default Divider;
