import React from 'react'
import { useState } from 'react'

const useProjects = () => {
  
    const [projects] = useState(
    [
    {
        id:1,
        title: "Social Development Project",
        shortDescription: "Empowering individuals to carve their own paths. Meet Mustafa Rafiq, a driven entrepreneur...",
        fullDescription: "At the heart of genuine progress lies the empowerment of individuals to carve their own paths. We're thrilled to unveil our newest SD endeavor! Allow us to introduce Mustafa Rafiq, a driven entrepreneur whose tenacity and vision have brought forth his very own children's garments kiosk. These initiatives enable individuals like Mustafa to ignite their potential for earnings and embody the ethos of empowerment and community betterment. Equipping Mustafa with the essential tools and support not only transforms his life but also enriches the lives of those around him.",
        images: 
        [
        "SDProject_24/2024-05-24_16-03-34_UTC_1.jpg",
        "SDProject_24/2024-05-24_16-03-34_UTC_2.jpg",
        "SDProject_24/2024-05-24_16-03-34_UTC_3.jpg"
        ]
    },
    {
        id:2,
        title: "Social Development Project",
        shortDescription: "Unveiling our latest SD project! Meet Abdul Wakil, an inspiring entrepreneur...",
        fullDescription: "We proudly unveil our latest SD project! Meet Abdul Wakil, an inspiring entrepreneur whose determination and vision have led to the establishment of his very own home-based convenience store. These projects empower individuals like Abdul to kickstart their earning potential and embody the spirit of empowerment and community upliftment. By providing Abdul Wakil with the tools and resources he needs to succeed, we're not only transforming his life but also making a positive impact on the lives of those around him.",
        images: 
        [
        "SDProject_24/2024-05-21_16-03-40_UTC_1.jpg",
        "SDProject_24/2024-05-21_16-03-40_UTC_2.jpg",
        "SDProject_24/2024-05-21_16-03-40_UTC_3.jpg"
        ]
    },
    {
        id:3,
        title: "Social Development Project",
        shortDescription: "New earning opportunity for Mr. Usman Ahmed by providing Bike for Bykea services...",
        fullDescription: "Glad to share that the social development department has unlocked a new earning opportunity for Mr. Usman Ahmed by providing Bike for Bykea services. Such initiatives not only empower individuals like Usman but also foster independence within our community. We are wholeheartedly thankful for the people who helped in this good cause. We continue to acknowledge SWATs admiration and support through such means.",
        images:
        [
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_1.jpg",
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_2.jpg",
        "SDProject2_24_Bike/2024-02-20_16-06-52_UTC_3.jpg"
        ]
    }
])

    const getProjectById = (id) => {
        
        const project = projects.find((project) => project.id === id);
        console.log(project);
        return project;
    }


    console.log(projects);
    return { projects, getProjectById }
    
}

export default useProjects