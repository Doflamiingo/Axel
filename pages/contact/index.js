import Image from "next/image";
import { FaLinkedinIn, FaInstagram, CiLinkedin } from "react-icons/FA";
import { motion } from "framer-motion";
const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } }, // Augmentez la durée ici (2 secondes)
  };
  if (typeof window !== "undefined") {
    // Code CSS pour le filtre sombre
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`
        .dark-overlay {
          background-image: url('/background-page-contact.jpg');
          background-size: cover;
          background-position: bottom;
          background-repeat: no-repeat;
          filter: brightness(50%); /* Ajoute un filtre sombre (50% de luminosité) */
        }
      `)
    );
    document.head.appendChild(style);
  }

  return (
    <section className=" xl:container w-full h-full flex justify-center item-center">
      <div className="xl:w-2/4 flex flex-col items-center justify-center text-center z-10">
        <Image
          src="/main-image-page-contact.jpg"
          width={400}
          height={400}
          alt=""
          className="max-lg:hidden"
          exit="hidden"
        />
      </div>
      <div className=" xl:w-2/4 w-full h-full flex flex-col items-center justify-center mx-auto text-center  z-10">
        <div>
          <h1 className="font-nomark xl:text-7xl text-2xl  ">Contact</h1>
        </div>
        <div className="text-5xl flex flex-row gap-10 mt-10">
          <a
            href="https://www.linkedin.com/in/axel-dansicare-b841a8116?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/_cjvisuals_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-xl mt-5">cjvisuals.contact@gmail.com</p>
      </div>
      <div className="w-full h-full absolute right-0 bottom-0 z-100">
        {/* Utilisez motion.div pour appliquer l'animation sur le fond */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="bg-contacts bg-cover bg-opacity-80 bg-bottom bg-no-repeat w-full h-full object-fill xl:bg-center z-0 dark-overlay"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
