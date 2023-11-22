import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }, // Augmentez la durée ici (2 secondes)
  };
  // Configuration de l'animation d'entrée pour les images à droite (plus rapide)
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const fadeInRight2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };
  // Configuration de l'animation d'entrée pour le titre à gauche (plus rapide)
  const fadeInTitle = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Configuration de l'animation d'entrée pour le texte à gauche avec un délai de 0.5 seconde (plus rapide)
  const fadeInText = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  // Configuration de l'animation d'entrée pour le bouton à gauche avec un délai de 1 seconde (plus rapide)
  const fadeInButton = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.9 } },
  };
  if (typeof window !== "undefined") {
    // Code CSS pour le filtre sombre
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`
        .dark-overlay {
          background-image: url('/background-image-a-propos.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(50%); /* Ajoute un filtre sombre (50% de luminosité) */
        }
      `)
    );
    document.head.appendChild(style);
  }
  return (
    <section className="xl:container h-full mx-auto flex flex-col-reverse  lg:flex-row sm:px-14  xl:mt-0 xl:px-0 ">
      <div className="w-full h-full relative lg:w-1/2 lg:pl-10 flex flex-col items-center justify-center text-center z-10 ">
        <h2 className="w-full mb-2  flex justify-center  ">
          <div className="sm:w-1/2">
            <motion.h1
              variants={fadeInTitle}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="font-nomark xl:text-5xl text-2xl"
            >
              À propos
            </motion.h1>
          </div>
        </h2>

        <motion.p
          variants={fadeInText}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="text-white text-base xl:text-xl "
        >
          La musique est ma principale source d'inspiration, celle qui donne vie
          à chacune de mes œuvres visuelles. C'est cette passion pour la musique
          qui anime et donne vie à mes photographies et vidéos. L'une des
          expériences uniques que je souhaite offrir à mes visiteurs est la
          possibilité d'explorer mes projets tout en étant bercés par la musique
          qui les a inspirés. Chaque page de mon portfolio vous permettra donc
          de plonger dans une ambiance musicale spécifique correspondant à
          l'essence du projet présenté.
        </motion.p>
        <motion.button
          variants={fadeInButton}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="bg-gray-700 hover:bg-gray-600 text-white mt-5 py-2.5 px-5 rounded-full xl-text-2xl"
        >
          Mes projets
        </motion.button>
      </div>
      <div className="w-full lg:w-1/2 flex items-start justify-center z-10 relative">
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-16 right-24 z-50"
        >
          <Image
            src="/a-propos-image-dessus.jpg"
            width={300}
            height={300}
            alt=""
            className="max-lg:hidden"
          />
        </motion.div>
        <motion.div
          variants={fadeInRight2}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-48 left-16"
        >
          <Image
            src="/image-dessous-a-propos.jpg"
            width={300}
            height={300}
            alt=""
            className="max-lg:hidden"
          />
        </motion.div>
      </div>

      <div className="w-full h-full absolute right-0 bottom-0 z-100">
        {/* Utilisez motion.div pour appliquer l'animation sur le fond */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="bg-propos bg-cover bg-opacity-80 bg-bottom bg-no-repeat w-full h-full object-fill xl:bg-center z-0 dark-overlay"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
