import React from "react";

const Divider = ({ title }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="divider text-2xl">{title}</div>
    </div>
  );
}

export default Divider;
