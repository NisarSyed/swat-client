import React, { useEffect } from 'react';
import Banner from '../components/Banner';

const About = () => {

  const banner = 
    { id: 3, src: "2024-04-07_17-58-36_UTC_7.jpg", alt: "Banner 3" }
  
  return (
    <>
    <div className='relative'>
      <Banner banner={banner} text="About Us" />
      <div className="text-left font-serif px-5 mt-10 underline-custom">
        <h2 className="text-5xl font-bold text-pretty antialiased accent-slate-200 text-indigo-900 px-32 font-raleway">About Us</h2>
      </div>
      <div className="flex flex-row mt-10 px-20 h-full mb-10">
        <div className="basis-1/3 px-10">
          <img src="2024-04-07_17-58-36_UTC_7.jpg" alt="Our mission" className="w-full h-48 object-cover mb-4 rounded" />
        </div>
        <div className="basis-2/3 py flex-wrap text-wrap font-raleway text-2xl tracking-wide" >
          <p>
        <strong>SWAT</strong> is dedicated to work for humanity; we work for the common good and general welfare of the people. 
        </p>
          <br/>
         <p>Over a period of time, we will initiate programs in health, counseling, education, relief, rehabilitation, natural disasters and income oriented vocational training. 
        </p>
        <br/>
        <p>
         SWAT is committed to raising funds and awareness to improve the living conditions of those members of the community who are less privileged and deserve more. We hope that our future projects and endeavors will enable us to improve the living standards of the underprivileged and help them to eventually sustain on their own and hence build a better society and future for all of us.
         </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
