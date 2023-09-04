"use client";
// src/components/ActionSection.js
import React from "react";
import imageBanner from "../../assets/signup.svg";
import Image from "next/image";

const ActionSection = () => {
  return (
    // <section
    //   className="bg-cover bg-center py-16"
    //   style={{
    //     backgroundImage: { imageBanner }, // Replace with the path to your image
    //   }}
    // >
    <div className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <Image
          src={imageBanner}
          alt="Banner Image"
          className="w-80 rounded-full"
        />
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-6">
            Take Action and Get Things Done
          </h2>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full focus:outline-none"
              onClick={() => {
                // Add your action logic here
              }}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
