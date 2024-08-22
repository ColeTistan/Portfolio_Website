import React from "react";

const Education = () => {
  return (
    <div className="w-full md:w-2/5 flex flex-col gap-2">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Rowan University - Master of Science
        </div>
        <div className="collapse-content">
          <ul className="list-none">
            <li>testing</li>
            <li>testing</li>
            <li>testing</li>
            <li>testing</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Rowan University - Bachelor of Science
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
