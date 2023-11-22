import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Work = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    "../01. ABOVE THE SEA/above-the-sea-1.jpg",
    "../02. INVISIBLE PAIN/invisible-pain-wilfried-zahibo-4.jpg",
    "../03. MARE NOSTRUM/mare-nostrum-pereira-sarda-6.jpg",
    "../04. BACK TO 70_S/back-to-70s-1.jpg",
    "../05. DEVIL_S CANYON/devil-canyon-4.jpg",
    "../06. BL00DS/bloods-2.jpg",
    "../07. PARKING LOT/parking-lot-2.jpg",
    "../08. NXRAH/nxrah-5.jpg",
    "../09. ROAD TO RICHES/road-to-riches-2.jpg",
    "../10. SILHOUETTE/silhouette-1.jpg",
    "../11. SELF PORTRAIT/P1085072.jpg",
  ];

  const links = [
    "/above",
    "/InvisiblePain",
    "/marenostrum",
    "/backto70",
    "/devilcanyon",
    "/blood",
    "/parkinglot",
    "/nxrah",
    "/roadto",
    "/silhouette",
    "/self",
  ];

  const titles = [
    "ABOVE THE SEA",
    "INVISIBLE PAIN",
    "MARE NOSTRUM",
    "BACK TO 70'S",
    "DEVIL'S CANYON",
    "BLOODS",
    "PARKING LOT",
    "NXRAH",
    "ROAD TO RICHES",
    "SILHOUETTE",
    "SELF PORTRAIT",
  ];

  return (
    <div className="scrollable-page bg-bgabove w-full h-full bg-local bg-cover bg-center ">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
    
      </h3>

      <style jsx>{`
        /* Styles pour la page scrollable */
        .scrollable-page {
          overflow: auto;
          max-height: 100vh;
        }
        /* Styles pour le conteneur d'image */
        .image-container {
          position: relative;
          display: inline-block;
        }
        /* Styles pour le titre de l'image */
        .image-title {
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          font-weight: bold;
          text-decoration: underline;
          z-index: 10;
          transition: opacity 0.3s ease-in-out;
        }
        /* Styles pour le numéro de l'image */
        .image-number {
          position: absolute;
          bottom: 20px;
          left: 10px;
          color: white;
          font-weight: bold;
          text-decoration: underline;
          z-index: 10;
          transition: opacity 0.3s ease-in-out;
        }
        /* Styles pour l'overlay des images */
        .image-overlay {
          position: relative;
          display: inline-block;
        }
        .image-overlay::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Fond noir semi-transparent */
          opacity: 1; /* Par défaut visible */
          transition: opacity 0.3s ease-in-out; /* Transition en douceur */
        }
        .image-container:hover .image-overlay::before {
          opacity: 0; /* Disparaître au survol */
        }
        /* Styles pour masquer le titre et le numéro de l'image au survol */
        .image-container:hover .image-title,
        .image-container:hover .image-number {
          opacity: 0;
        }
      `}</style>

      <div className="flex item-center justify-center mb-24 xl:mb-0">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-10">
          {images.map((imageSrc, index) => (
            <div key={index} className="image-container">
              <a href={links[index]} rel="noopener noreferrer">
                <span className="image-title font-nomark xl:text-4xl text-2xl">
                  {titles[index]}
                </span>
                <div className="image-overlay">
                  <img
                    src={imageSrc}
                    alt={`Image ${String(index + 1).padStart(2, '0')}`}
                    className="xl:h-[650px] xl:w-[500px]"
                  />
                </div>
                <span className="image-number font-nomark xl:text-6xl text-2xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work
