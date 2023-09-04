// src/components/FeatureSection.js
import React from "react";
import { FaTasks, FaCheck, FaCalendar } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-black-800 mb-6">
          Manage Your Tasks Effortlessly
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Task Creation */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaTasks className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Task Creation
            </h3>
            <p className="text-gray-600">
              Easily create and organize tasks with our intuitive interface.
            </p>
          </div>

          {/* Task Completion */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaCheck className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Task Completion
            </h3>
            <p className="text-gray-600">
              Mark tasks as complete when you finish them, keeping your list
              up-to-date.
            </p>
          </div>

          {/* Calendar Integration */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <FaCalendar className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Calendar Integration
            </h3>
            <p className="text-gray-600">
              Sync your tasks with your calendar to manage your schedule
              effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
