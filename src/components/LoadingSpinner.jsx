import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 z-50">
      <div className="relative w-48 h-48 mb-4">
        <div className="absolute inset-0 border-8 border-blue-800 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/swat.svg" alt="logo" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-blue-800 mt-4">Loading...</h2>
    </div>
  );
};

export default LoadingSpinner;
