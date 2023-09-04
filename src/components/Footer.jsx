"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome To Work Manager</h1>
          <p>
            Welcome to our team! A good team is one that is helmed by a
            visionary, and I believe you are one who is needed to take the
            company to the next level.{" "}
          </p>
        </div>
        <div className="text-center">
          <h1>Important Links</h1>
          <br />
          <ul>
            <li>
              <a href="https://www.facebook.com/">Facebook</a>
            </li>
            <li>
              <a href="https://www.youtube.com/">YouTube</a>
            </li>
            <li>
              <a href="https://www.instagram.com/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
