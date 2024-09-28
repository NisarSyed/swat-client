import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Collaborators = () => {
  const controls = useAnimation();
  const logos = [
    { id: 1, src: 'Logos/aku.png', alt: 'aku' },
    { id: 2, src: 'Logos/aqua.png', alt: 'aqua' },
    { id: 3, src: 'Logos/bosch.png', alt: 'bosch' },
    { id: 4, src: 'Logos/ebm.png', alt: 'ebm' },
    { id: 5, src: 'Logos/gd.png', alt: 'gd' },
    { id: 6, src: 'Logos/gulahmed.png', alt: 'gulahmed' },
    { id: 7, src: 'Logos/hbl.png', alt: 'hbl' },
    { id: 8, src: 'Logos/dressa.png', alt: 'dressa' },
    { id: 9, src: 'Logos/LU.png', alt: 'LU' },
    { id: 10, src: 'Logos/saylani.png', alt: 'saylani' },
    { id: 11, src: 'Logos/sk.png', alt: 'sk' },
    { id: 12, src: 'Logos/suzuki.png', alt: 'suzuki' },
    { id: 13, src: 'Logos/tapal.png', alt: 'tapal' },
    { id: 14, src: 'Logos/tdf.png', alt: 'tdf' },
  ];

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    });
  }, [controls, 40]);

  return (
    <section className="py-16 px-4 sm:px-0 lg:px-0 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="custom-underline font-semibold text-indigo-950 mb-6 text-center font-raleway text-4xl sm:text-5xl">
          Our Collaborators
        </h2>
        <div className="mt-12 relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={controls}
            style={{ width: `${logos.length * 2 * 100}px` }} // Ensure the container is wide enough
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-none sm:w-64 w-40 h-36 mx-4 bg-white flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[80%] max-h-[80%] object-contain sm:max-w-[60%] sm:max-h-[60%] md:max-w-[50%] md:max-h-[50%] lg:max-w-[70%] lg:max-h-[70%]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;