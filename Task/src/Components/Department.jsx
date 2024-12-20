import React from 'react';
import p1 from '../../public/p1.jpg';
import p2 from '../../public/p2.png';
import p3 from '../../public/p3.png';
import p4 from '../../public/p4.png';
import p5 from '../../public/p5.png';
import p6 from '../../public/p6.png';
import p7 from '../../public/p7.png';

const services = [
  {
    title: "Grant of Occasional License [See Rule 3(5)]",
    icon: <img src={p1} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Grant of Licenses",
    icon: <img src={p1} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Renewal of Discontinued Licences",
    icon: <img src={p2} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Relaxation as per Rule 5",
    icon: <img src={p3} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Approval of Blueprint",
    icon: <img src={p4} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Shifting of licenses as per Karnataka Excise (General Conditions of licenses) rules, 1966 in accordance with the rule 23.",
    icon: <img src={p5} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "Transfer of licenses as per rule 17(A) & 17(B) of Karnataka Excise (General Conditions of Licenses) rules, 1967",
    icon: <img src={p6} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
  {
    title: "To authorize by a general or special order to possess, import or transport of opium derivatives and medicinal hemp, for eligible persons as per Rule-29 of NDPS (Karnataka) Rules, 1985",
    icon: <img src={p7} alt="License Icon" className="w-16 h-16 object-contain" />,
  },
];

const ServiceCard = ({ title, icon }) => (
  <div className="flex flex-col items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="mb-2">{icon}</div>
    <p className="text-center">{title}</p>
  </div>
);

const Department = () => (
  <div className="container mx-auto px-4 md:px-8" id='dashboard'>
    <h2 className="text-2xl font-bold text-center my-16">Find some quick Links and Public Department Services</h2>
    <div className="grid grid-cols-1 pb-4 md:pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} title={service.title} icon={service.icon} />
      ))}
    </div>
  </div>
);

export default Department;
