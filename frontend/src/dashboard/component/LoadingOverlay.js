import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-75 flex flex-col items-center justify-center">
      <ScaleLoader height={40} width={5} radius={10} margin={10} color="#fff" />
      <h1 className="text-xl text-white ml-3 antialiased mt-6">Loading ...</h1>
    </div>
  );
};

export default LoadingOverlay;
