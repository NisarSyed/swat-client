import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import DrivesCard from '../components/DrivesCard';
import { Ban } from 'lucide-react';

const driveData = [
  {
    id: 1,
    title: 'Jacob Javed Home Old Age Drive',
    description: 'Drive 1 Description',
    image: '2024-04-07_17-58-36_UTC_7.jpg',
  },
  {
    id: 2,
    title: 'Ramzan Drive',
    description: 'Drive 2 Description',
    image: '2024-04-07_17-58-36_UTC_7.jpg',
  },
  {
    id: 3,
    title: 'Ration Drive',
    description: 'Drive 3 Description',
    image: '2024-04-07_17-58-36_UTC_7.jpg',
  },
  {
    id: 4,
    title: 'Visit to Baitul Maal School',
    description: 'Drive 4 Description',
    image: '2024-04-07_17-58-36_UTC_7.jpg',
  },

];

const banner = {
  id: 1,
  src: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
  alt: 'Banner 1',
};

const Drives = () => {

  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <>
      <Banner banner={banner} text="Drives" />
      {/* <Banner src={banner.src} alt={banner.alt} /> */}
      <div className="text-left font-serif px-5 mt-10 underline-custom">
        <h2 className="text-5xl font-bold text-pretty antialiased accent-slate-200 text-indigo-900 px-32 font-raleway">Drives</h2>
      </div>
      <div className="flex justify-center items-center flex-row mt-10 mb-10">
        {
          driveData.map((drive) => (
            <DrivesCard key={drive.id} 
            title={drive.title}
            description={drive.description}
            image={drive.image}
            navigateTo={`/drives/${drive.id}`}
            />
          ))
        }
      </div>

    </>
  );
}

export default Drives;