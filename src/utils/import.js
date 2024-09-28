// src/utils/importImages.js

export const getImages = () => {
    const images = import.meta.glob('/public/Logos/*.{png,jpg,jpeg,svg}', { eager: true });
    console.log(images); // Check if images object is populated correctly
    const imageMap = [];
  
    for (const path in images) {
      const fileName = path.split('/').pop();
      imageMap.push({
        id: fileName,
        src: path.replace('/public', ''), // Adjust the path for the public directory
        alt: fileName.split('.')[0]
      });
    }
  
    console.log(imageMap);
  
    return imageMap;
  };