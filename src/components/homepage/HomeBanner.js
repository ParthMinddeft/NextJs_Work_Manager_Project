import React from "react";
import bannerImage from "../../assets/login.svg";
import Image from "next/image";
const BannerSection = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <Image
          src={bannerImage} // Replace with your image URL
          alt="Banner Image"
          className="w-80 rounded-full"
        />
        <h1 className="text-4xl font-semibold mb-4">Welcome To Task Manager</h1>
        <p className="text-lg mb-6">
          Organize your tasks efficiently with our task manager app.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
