import React from "react";

const Experience = () => {
  return (
    <div className="md:mx-16">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <div className="text-lg font-medium">Self Learning</div>
            Strive to continue learning new languages and frameworks to
            provide mentorship and guidance to new comers aspiring to become
            software developers or engineer.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">08/2020-05/2021</time>
            <div className="text-lg font-medium">Web Developer</div>
            <div className="text-lg font-medium">
              M-Tac Trucking Compliance LLC.
            </div>
            Developed and Maintained User Interface for company website using
            HTML5, CSS3, JavaScript and Bootstrap 5. During development, I
            worked closely with the clients and manager to address reported
            defects and adding new user interface features to the website.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">05/2021-09/2023</time>
            <div className="text-lg font-medium">Technical Analyst</div>
            <div className="text-lg font-medium">Greenphire Inc.</div>
            Cross-functionally supporting tickets and writing efficent code
            using various tools such as Python, Django, Jupyter Notebook, Pandas
            and Angular 8. Collaborated with Operations/Support teams to
            understand, Identify / address defects to complete production
            support (Tier 2 and 3) tickets with custom scripts to written,
            tested and executed.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">09/2023-Present</time>
            <div className="text-lg font-medium">
              Full Stack Developer - Contractor
            </div>
            <div className="text-lg font-medium">
              M-Tac Trucking Compliance LLC.
            </div>
            Refactor current website with dynamic routing using Bootstrap 5,
            JavaScript and the eJS template engine. In addition, an
            authentication system was integrated to allow employees to log in
            for access to internal business services to add, update and remove
            trucking logistic services for consumers to stay informed on current
            news related to logistics using MongoDB, ExpressJS and NodeJS. Prior
            to the web application upgrades, M-Tac averaged 68 visits per month.
            Following the deployment of the upgrades added to the web
            application, the company is averaging 285 hits per month.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">08/2024-Present</time>
            <div className="text-lg font-medium">Software Engineer</div>
            <div className="text-lg font-medium">
              Spectrum Software Technology Inc.
            </div>
            Develop / maintain current code written in Python and MATLAB to
            create new web-tools for daily monitoring. Using these web tools
            assist with analyzing and quantifing data using basic statistics as
            well as understand the data results presenting them with tables and
            plots with in-depth reports written based on the analysis of the
            data.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
