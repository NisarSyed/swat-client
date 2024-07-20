import {useState} from 'react';

const useDrives = () => {

    const [drives] = useState([
            {
              id: 1,
              title: 'Ramzan Drive',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              images: ["IftarDrive2_24/2024-03-21_17-30-21_UTC_2.jpg", 'IftarDrive2_24/2024-03-21_17-30-21_UTC_3.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_4.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_5.jpg', 'public/IftarDrive2_24/2024-03-21_17-30-21_UTC_6.jpg'],
              date: '15th April 2024',
              location: 'City Center',
              volunteers: 50,
            },
            {
              id: 2,
              title: 'Blood Donation Drive',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              images: ['contactus.jpg', "IftarDrive2_24/2024-03-21_17-30-21_UTC_2.jpg", 'IftarDrive2_24/2024-03-21_17-30-21_UTC_3.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_4.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_5.jpg', 'public/IftarDrive2_24/2024-03-21_17-30-21_UTC_6.jpg'],
              date: '15th April 2024',
              location: 'City Center',
              volunteers: 50,
            },
            {
              id: 3,
              title: 'Ration Drive',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              images: ['contactus.jpg', "IftarDrive2_24/2024-03-21_17-30-21_UTC_2.jpg", 'IftarDrive2_24/2024-03-21_17-30-21_UTC_3.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_4.jpg', 'IftarDrive2_24/2024-03-21_17-30-21_UTC_5.jpg', 'public/IftarDrive2_24/2024-03-21_17-30-21_UTC_6.jpg'],
              date: '15th April 2024',
              location: 'City Center',
              volunteers: 50,
            },
    ]);

    const getDriveById = (id) => {
        //console.log(id);
        const drive = drives.find((drive) => drive.id === parseInt(id));
        return drive;
    }

    return {drives, getDriveById};
}

export default useDrives;