import React from "react";
import Image from "next/image";

const Guides = () => {
  return (
    <div className="my-10">
      <div className="flex space-x-2 justify-center">
        <div className="relative w-52 h-96 overflow-hidden group">
          <Image
            src="/Flats.jpg"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105 group-hover:filter-none filter brightness-125"
          />
          <div className="absolute inset-0 bg-blue-700 opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <h2 className="text-white text-2xl font-semibold">Buyer Guide</h2>
            <p className="text-white  text-sm pr-8 mt-2">
              Comprehensive step-by-step guide for simplifying the home buying
              process.
            </p>
          </div>
        </div>
        <div className="relative w-52 h-96 overflow-hidden group">
          <Image
            src="/Flats.jpg"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105 group-hover:filter-none filter brightness-125"
          />
          <div className="absolute inset-0 bg-blue-700 opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <h2 className="text-white text-2xl font-semibold">Buyer Guide</h2>
            <p className="text-white text-sm pr-4 mt-2">
              Comprehensive step-by-step guide for simplifying the home buying
              process.
            </p>
          </div>
        </div>
        <div className="relative w-52 h-96 overflow-hidden group">
          <Image
            src="/Flats.jpg"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105 group-hover:filter-none filter brightness-125"
          />
          <div className="absolute inset-0 bg-blue-700 opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <h2 className="text-white text-2xl font-semibold">Buyer Guide</h2>
            <p className="text-white text-sm pr-4 mt-2">
              Comprehensive step-by-step guide for simplifying the home buying
              process.
            </p>
          </div>
        </div>
        <div className="relative w-52 h-96 overflow-hidden group">
          <Image
            src="/Flats.jpg"
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105 group-hover:filter-none filter brightness-125"
          />
          <div className="absolute inset-0 bg-blue-700 opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-3">
            <h2 className="text-white text-2xl font-semibold">Buyer Guide</h2>
            <p className="text-white text-sm  pr-4 mt-2">
              Comprehensive step-by-step guide for simplifying the home buying
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;
