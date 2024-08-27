import React from 'react';
import { ChevronUp, Users, Package, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import aos from 'aos';
import 'aos/dist/aos.css';

const KPICard = ({ icon, title, value, increase }) => (
  <div className="bg-indigo-950 text-white text-center p-6 rounded-lg font-raleway shadow-lg flex-1 min-w-[200px] mb-4 md:mb-0 md:mr-4 last:mr-0" data-aos="fade-up">
    <div className="flex items-center justify-center mb-4">
      <div className="p-2 bg-red-700 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="sm:text-3xl font-bold mb-1 text-xl ">{value}</h3>
    <p className="text-indigo-200 sm:text-2xl text-sm">{title}</p>
  </div>
);

const KPISection = ({isHome}) => {
  const kpiData = [
    { icon: <Calendar size={24} />, title: "Drives Conducted", value: "150+", increase: 12 },
    { icon: <Package size={24} />, title: "Ration Bags Delivered", value: "10,000+", increase: 8 },
    { icon: <Users size={24} />, title: "Families Supported", value: "5,000+", increase: 15 },
  ];

  return (
    <section className="sm:py-8 py-4 font-raleway">
      
      <div className="container mx-auto" data-aos="fade-up">
      <h2 className={`text-indigo-950 mb-10 text-center font-raleway text-4xl sm:text-4xl md:text-5xl ${isHome ? 'custom-underline font-semibold text-indigo-950 mb-10 text-center font-raleway sm:text-5xl text-3xl' : 'font-bold mb-6 sm:mb-10'}`}> Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch sm:px-2 px-6 sm:py-2 py-8">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default KPISection;