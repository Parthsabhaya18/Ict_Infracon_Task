import React from "react";
import { FaList, FaPen, FaMoneyBill, FaCamera, FaDownload } from "react-icons/fa";

export default function Apply() {
  const steps = [
    { id: 1, title: "Select Service", icon: FaList },
    { id: 2, title: "Fill the Form", icon: FaPen },
    { id: 3, title: "Make Payment where applicable", icon: FaMoneyBill },
    { id: 4, title: "Application Verification", icon: FaCamera },
    { id: 5, title: "Avail the service", icon: FaDownload },
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-8">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-700">
        How do you apply for a <span className="text-blue-600">Service?</span>
      </h2>
      <div className="flex flex-wrap justify-around items-center">
        {steps.map((step) => (
          <div key={step.id} className="text-center m-4">
            <div className="bg-white p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center mx-auto">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-semibold mt-3 text-gray-700">Step {step.id}</p>
            <p className="text-gray-500 w-40">{step.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition duration-300">
          Go to Services
        </button>
      </div>
    </div>
  );
}
