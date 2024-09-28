import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import KPIs from '../components/KPIs';
import Banner from '../components/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';
import TimelineItem from '../components/TimelineItem';
import TestimonialCard from '../components/TestimonialCard';

const banner = {
  id: 1,
  image: 'banner.jpg',
  alt: 'Banner 1',
};

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const handleNavigate = () => navigate('/donate');

  return (
    <div className="font-raleway relative">
      <Banner banner={banner} text="About Us" data-aos="fade-up" />
      <div className="container mx-auto px-4 py-8 sm:py-16 w-full" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-16 sm:px-2 px-8 sm:py-0 py-2">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
            <img src="About_us.jpg" alt="Our mission" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12 ">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-indigo-950 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              <strong>SWAT</strong> is dedicated to work for humanity; we work for the common good and general welfare of the people. Over time, we will initiate programs in health, counseling, education, relief, rehabilitation, natural disasters and income-oriented vocational training.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              We are committed to raising funds and awareness to improve the living conditions of those less privileged in our community. Our goal is to help them sustain themselves and build a better society for all.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavigate}
              className="bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold flex items-center text-base sm:text-xl"
            >
              Get Involved <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        </div>

        <div className="my-8 sm:my-16" data-aos="fade-in">
          <KPIs isHome={false} />
        </div>
      
        <div className='flex items-start justify-center'>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-indigo-950 mb-6 sm:mb-0 flex flex-row text-center">Our Journey</h2>
        </div>
        <div className="flex item-center justify-center sm:pl-40">
          <div className="my-8 sm:my-16" data-aos="fade-out">
            <div className="space-y-4">
              {[
                { year: "2010", title: "SWAT Founded", description: "SWAT was established with a mission to serve humanity." },
                { year: "2015", title: "Expanded Operations", description: "Launched programs in health and education across multiple regions." },
                { year: "2020", title: "COVID-19 Response", description: "Initiated emergency relief efforts during the global pandemic." },
                { year: "2023", title: "Milestone Achievement", description: "Reached over 100,000 beneficiaries across all our programs." }
              ].map((item, index) => (
                <div key={index} data-aos="fade-up">
                  <TimelineItem year={item.year} title={item.title} description={item.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
 
        <div className="my-8 sm:my-16 bg-gray-100 py-8 sm:py-12 px-4 rounded-lg" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-6 sm:mb-10">Voices of Impact</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <TestimonialCard
              quote="SWAT's education program changed my life. I'm now the first in my family to attend university."
              author="Sarah K., Program Beneficiary"
            />
            <TestimonialCard
              quote="Working with SWAT has been incredibly rewarding. Their dedication to making a difference is truly inspiring."
              author="John D., Volunteer"
            />
          </div>
        </div>

        <div className="text-center my-8 sm:my-16 sm:p-10 p-6" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-6 sm:mb-10">Join Us in Making a Difference</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold flex items-center mx-auto text-base sm:text-xl"
            onClick={handleNavigate}
          >
            Get Involved <ChevronRight className="ml-2" />
            
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;