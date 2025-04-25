
import React from "react";

const TicketPreview = ({ formData, file }) => {
  return (
    <div className="max-w-md mx-auto mt-6 text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl font-800">
        Congrats,{" "}
        <span className="bg-gradient-to-r from-gradientTextStart to-gradientTextStop bg-clip-text font-extrabold text-transparent">
          {formData.fullname}!
        </span>{" "}
        Your ticket is ready
      </h1>
      <p className="mt-2 text-neutral-400">
        We've emailed your ticket to{" "}
        <span className="text-custom-orange-700">{formData.email}</span> and
        will send updates in the run-up to the event.
      </p>
      <div className="mt-6 bg-[url(/pattern-ticket.svg)] mix-blend-plus-darker bg-no-repeat py-4 px-6 w-full h-full bg-cover">
       
          <div className="flex items-center">
            <img src="/logo-mark.svg" alt="" className="h-6" />{" "}
            <div>
                <h3 className="text-2xl font-800">Coding Conf</h3>
                <p className="text-xs text-neutral-400 font-700 ml-3">Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>
       
        <div className="flex items-center mt-5">
          <div className="">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Avatar"
                className="w-10 h-10 rounded"
              />
            )}
          </div>
          <div className="ml-2">
            <h2 className="text-lg font-700 text-neutral-200">
              {formData.fullname}
            </h2>
            <p className="text-sm text-neutral-500 flex items-center">
              <a href="https://github.com/abok-cymk">
                <img src="/icon-github.svg" alt="" className="h-4 mr-1" />
              </a>
              {formData.githubUsername}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
