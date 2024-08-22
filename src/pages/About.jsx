import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Award, Users } from 'lucide-react';
import KPIs from '../components/KPIs';
import Banner from '../components/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router';

const banner = {
  id: 1,
  image: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
  alt: 'Banner 1',
};

const TimelineItem = ({ year, title, description }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-px h-full bg-indigo-300"></div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm sm:text-base">{year}</span>
      </div>
    </div>
    <div className="pb-8">
      <h3 className="text-xl sm:text-2xl font-bold text-indigo-700">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <p className="text-sm sm:text-base text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-sm sm:text-base text-indigo-700 font-semibold">- {author}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="font-raleway relative">
      <Banner banner={banner} text="About Us" data-aos="fade-up" />
      <div className="container mx-auto px-4 py-8 sm:py-16 w-full" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center mb-8 sm:mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="2024-04-07_17-58-36_UTC_7.jpg" alt="Our mission" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-950 mb-4 sm:mb-6">Our Mission</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              <strong>SWAT</strong> is dedicated to work for humanity; we work for the common good and general welfare of the people. Over time, we will initiate programs in health, counseling, education, relief, rehabilitation, natural disasters and income-oriented vocational training.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              We are committed to raising funds and awareness to improve the living conditions of those less privileged in our community. Our goal is to help them sustain themselves and build a better society for all.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/donate')}
              className="bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold flex items-center text-base sm:text-xl"
            >
              Get Involved <ChevronRight className="ml-2" />
            </motion.button>
          </div>
        </div>

        <div className="my-8 sm:my-16" data-aos="fade-in">
          <KPIs />
        </div>

        <div className="my-8 sm:my-16" data-aos="fade-out">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-950 mb-8 sm:mb-12 flex flex-row">Our Journey</h2>
          <div className="space-y-4">
            <div data-aos="fade-up ">
              <TimelineItem year="2010" title="SWAT Founded" description="SWAT was established with a mission to serve humanity." />
            </div>
            <div data-aos="fade-up">
              <TimelineItem year="2015" title="Expanded Operations" description="Launched programs in health and education across multiple regions." />
            </div>
            <div data-aos="fade-up">
              <TimelineItem year="2020" title="COVID-19 Response" description="Initiated emergency relief efforts during the global pandemic." />
            </div>
            <div data-aos="fade-up">
              <TimelineItem year="2023" title="Milestone Achievement" description="Reached over 100,000 beneficiaries across all our programs." />
            </div>
          </div>
        </div>
 
        <div className="my-8 sm:my-16 bg-gray-100 py-8 sm:py-12 px-4 rounded-lg" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-6 sm:mb-8 text-center">Voices of Impact</h2>
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

        <div className="text-center my-8 sm:my-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4 sm:mb-6">Join Us in Making a Difference</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold flex items-center mx-auto text-base sm:text-xl"
            onClick={() => navigate('/donate')}
          >
            Get Involved <ChevronRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;