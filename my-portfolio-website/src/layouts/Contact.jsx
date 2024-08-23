import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex justify-center md:p-5">
      {/* <div className="text-center lg:text-left text-xl">
            <p className="">
              Please contact me directly at&nbsp;
              <a
                className="link link-hover font-medium"
                href="mailto:coletistan@gmail.com"
              >
                coletistan@gmail.com
              </a>
              &nbsp;or through the contact form provided on the left.
            </p>
          </div> */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form
          className="card-body"
          action="https://formsubmit.co/coletistan@gmail.com"
          method="POST"
          target="_blank"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="full name"
              className="input input-bordered rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered rounded-md"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered rounded-md"
              placeholder="message"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn-primary-pill"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
