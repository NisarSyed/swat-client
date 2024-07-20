import React from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import DrivesCard from '../components/DrivesCard';
import { useNavigate } from 'react-router';
import { Ban } from 'lucide-react';


const banner = {
  id: 1,
  src: 'JacobJaviad_24/2024-04-14_16-53-03_UTC_5.jpg',
  alt: 'Banner 1',
};

const Drives = ({drives}) => {

  const navigate = useNavigate();

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 p-2 px-20">
  
        {
          drives.map((drive) => (
            <DrivesCard key={drive.id} 
            title={drive.title}
            description={drive.description}
            image={drive.images[0]}
            navigateTo = {()=>
              navigate(`/drives/${drive.id}`) }
            />
          ))
        }
      </div>

    </>
  );
}

export default Drives;