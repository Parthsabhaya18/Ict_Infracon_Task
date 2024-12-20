import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-[80vh] bg-gray-100 flex flex-col items-center justify-center p-4 md:flex-row md:p-8">
      <div className="relative bg-white p-6 md:p-8 rounded shadow-md w-[50vw] max-w-lg mx-4 md:mx-0 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-semibold mb-4">Track Application Status</h2>
        <p className="mb-4 text-blue-500">Enter details to find out your Application Status</p>
        <input
          type="text"
          placeholder="Enter GSC/ACK Number"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </div>
      <div className=" p-6 md:p-8 rounded shadow-md w-full max-w-4xl mx-4" id='hero'>
        <h1 className="text-4xl font-bold mb-4 text-white text-center md:text-left">Welcome to Excise Services</h1>
        <p className="text-gray-300 text-justify">
          Excise Department in Karnataka came into existence during the year 1968 after relaxation of prohibition in Karnataka State. The scope of the State Excise Administration covers commodities such as Spirit, Indian Made Liquor, Beer, Medicinal and Toilet preparations etc. The objectives of the department can be summed up as ensuring public health through regulated procurement of raw-materials, manufacture of various commodities by use of these raw-materials, their storage and distribution. These regulations ensure proper flow of revenues to the State exchequer. Thus, the Excise Department in Karnataka is the second largest revenue-earning department in the state functioning under the administrative control of the Finance Department.
        </p>
      </div>
    </div>
  );
};

export default Hero;
