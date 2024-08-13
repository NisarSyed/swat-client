import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, X } from 'lucide-react';
import { useState } from 'react';
import { useProjects } from '../components/useProjects';
import ImageGallery from '../components/ImageGallery';

const ProjectDetail = () => {

  const { id } = useParams();

  const { getProjectById } = useProjects();
  const project = getProjectById(id);
 

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project.description);

  const textSplit = project.description.split('\n');
  console.log(textSplit);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen font-raleway">
      <div className="bg-indigo-950 h-64 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 to-red-700 opacity-75"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">{project.title}</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative mt-20">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden -mt-16 relative z-20">
          <div className="p-8">
            <p className="text-indigo-950 text-xl tracking-wide leading-relaxed mb-6">{
              textSplit.map((text, index) => (
                <span key={index}>{text}<br /></span>
              ))
              }
            </p>
            <div className="flex flex-wrap gap-6 text-indigo-950">
              <div className="flex items-center">
                <Calendar className="mr-2 text-red-700" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-red-700" />
                <span>{project.location}</span>
              </div>

            </div>
          </div>
        </div>

        
        <ImageGallery images={project.images} />
        </div>
      </div>
  );
};

export default ProjectDetail;