import React, { useEffect, useRef } from "react";
import s1 from '../../public/s1.png'
import s2 from '../../public/s2.png'
import s3 from '../../public/s3.png'
import s4 from '../../public/s4.png'
import s5 from '../../public/s5.png'

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10" id="service">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600 animate-bounce">SERVICES</h1>
        <p className="text-xl text-gray-700">
          Check our <span className="text-blue-600">Services</span>
        </p>
      </div>
      <div
        ref={sectionRef}
        className="bg-blue-100 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl h-auto md:h-[395px] mb-10 hover:bg-blue-200 transition-colors duration-300"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Service Category
        </h2>
        <p className="text-gray-700 mb-6">
          The objectives of the department can be summed up as ensuring public
          health through regulated procurement of raw materials, manufacture of
          various commodities by use of these raw materials, their storage and
          distribution. A "service category" is simply a group of related
          services within a larger offering, like different types of food on a
          restaurant menu, where you might have categories like "appetizers,"
          "main courses," and "desserts"; each category represents a distinct
          set of options with similar characteristics. Service management
          systems and tools. Technology architectures and management systems.
          Processes, roles and capabilities. Measurement methods and metrics.
        </p>
        <button className="bg-blue-600 mt-5 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
          Explore
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:bg-gray-50 transition-colors duration-300 animate-fade-in">
          <div className="text-blue-600 mr-4 flex items-center justify-center rounded-2xl border-2 border-blue-600 w-[65px] h-[65px]">
            <img src={s1} className="w-[45px] h-[45px]" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Manufacturer Related
            </h3>
            <p className="text-gray-600">
              Find all Manufacturer related services here.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:bg-gray-50 transition-colors duration-300 animate-fade-in">
          <div className="text-blue-600 mr-4 flex items-center justify-center rounded-2xl border-2 border-blue-600 w-[65px] h-[65px]">
            <img src={s2} className="w-[45px] h-[45px]" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Export Related
            </h3>
            <p className="text-gray-600">
              Find all Export related services here.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:bg-gray-50 transition-colors duration-300 animate-fade-in">
          <div className="text-blue-600 mr-4 flex items-center justify-center rounded-2xl border-2 border-blue-600 w-[65px] h-[65px]">
            <img src={s3} className="w-[45px] h-[45px]" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Retail Related
            </h3>
            <p className="text-gray-600">
              Find all Retail related services here.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:bg-gray-50 transition-colors duration-300 animate-fade-in">
          <div className="text-blue-600 mr-4 flex items-center justify-center rounded-2xl border-2 border-blue-600 w-[65px] h-[65px]">
            <img src={s4} className="w-[45px] h-[45px]" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              Import Related
            </h3>
            <p className="text-gray-600">
              Find all Import related services here.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center hover:bg-gray-50 transition-colors duration-300 animate-fade-in">
          <div className="text-blue-600 mr-4 flex items-center justify-center rounded-2xl border-2 border-blue-600 w-[65px] h-[65px]">
            <img src={s5} className="w-[45px] h-[45px]" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              NDPS Related
            </h3>
            <p className="text-gray-600">
              Find all NDPS related services here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
