import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DrivesContext = createContext();

export const DrivesProvider = ({ children }) => {
  const [drives, setDrives] = useState([]);


  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drives');
        setDrives(response.data);
        
      } catch (error) {
        console.error('Error fetching drives:', error);
       
      }
    };
    fetchDrives();
  }, []);

  const getDriveById = (id) => {
    const drive = drives.find((drive) => drive._id === id);
    return drive;
  };

  return (
    <DrivesContext.Provider value={{ drives, getDriveById }}>
      {children}
    </DrivesContext.Provider>
  );
};

export const useDrives = () => {
  return useContext(DrivesContext);
};