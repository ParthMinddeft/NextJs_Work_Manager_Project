"use client";
// src/components/TestimonialSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./TestiMonial";

const testimonialsData = [
  {
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    author: "Jane Smith",
    content:
      "Vivamus gravida dolor vel augue malesuada, eu consequat mi congue.",
  },
  {
    author: "Alice Johnson",
    content: "Sed non lectus id libero vulputate congue.",
  },
  {
    author: "Bob Brown",
    content:
      "In hac habitasse platea dictumst. Cras sed erat sed tellus malesuada condimentum.",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three testimonials at a time
    slidesToScroll: 1,
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-6">TestiMonials</h2>
        <div className="w-full max-w-screen-xl mx-auto p-4">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index}>
                <Testimonial {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
