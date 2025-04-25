# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot1.png)
![](./screenshot2.png)


### Links

- Solution URL: [Github](https://github.com/conference-ticket-generator)
- Live Site URL: [Conference Ticket Generator](https://conference-ticket-generator-gilt.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned


```React.js (jsx)

import React from "react";

const TicketPreview = ({ formData, file }) => {
  return (
    <div className="max-w-md mx-auto mt-6 text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl font-800">
        Congrats,{" "}
        <span className="text-custom-orange-700 font-800">
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

}
```

### Continued development
- Add database connectivity and use localStorage to persist user details on page reload.

### Useful resources

- [react-dropzone](https://react-dropzone.js.org/) - This helped me provides a simple way to create drag-and-drop file upload zones. It offers a hook called `useDropzone` that handles the necessary event listeners and logic for file dropping, and it returns functions to manage the drop zone's behavior.
- [tailwindcss](https://tailwindcss.com/) - This helped me with referencing css utility classes.

## Author

- Frontend Mentor - [@abok-cymk](https://www.frontendmentor.io/profile/abok-cymk)
- Twitter - [@abokallan22](https://www.x.com/abokallan22)


