import React from 'react';
import { ChevronUp, Users, Package, Calendar } from 'lucide-react';

const KPICard = ({ icon, title, value, increase }) => (
  <div className="bg-indigo-950 text-white text-center p-6 rounded-lg font-raleway shadow-lg flex-1 min-w-[200px] mb-4 md:mb-0 md:mr-4 last:mr-0">
    <div className="flex items-center justify-center mb-4">
      <div className="p-2 bg-red-700 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-indigo-200 text-2xl">{title}</p>
  </div>
);

const KPISection = () => {
  const kpiData = [
    { icon: <Calendar size={24} />, title: "Drives Conducted", value: "150+", increase: 12 },
    { icon: <Package size={24} />, title: "Ration Bags Delivered", value: "10,000+", increase: 8 },
    { icon: <Users size={24} />, title: "Families Supported", value: "5,000+", increase: 15 },
  ];

  return (
    <section className="py-12 font-raleway">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-indigo-950 mb-10 text-left ">Our Impact</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;