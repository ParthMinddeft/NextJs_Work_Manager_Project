// src/components/Testimonial.js
import React from "react";

const Testimonial = ({ author, content }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-gray-600">{content}</p>
        <p className="text-gray-800 font-semibold mt-4">{author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
