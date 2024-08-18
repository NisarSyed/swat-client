import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  console.log(projects);

  const getProjectById = (id) => {
    const project = projects.find((project) => project._id === id);
    return project
  };

  return (
    <ProjectsContext.Provider value={{ projects, getProjectById }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  return useContext(ProjectsContext);
};