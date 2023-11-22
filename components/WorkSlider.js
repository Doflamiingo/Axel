import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ABOVE THE SEA",
          path: "/P1052160.jpg",
          link: "/above",
        },
        {
          title: "INVISIBLE PAIN",
          path: "/P1097048.jpg",
          link: "/InvisiblePain",
        },
        {
          title: "MARE NOSTRUM",
          path: "/P1164439.jpg",
          link: "/marenostrum",
        },
        {
          title: "BACK TO 70'S",
          path: "/P1175260.jpg",
          link: "/marenostrum",
        },

        {
          title: "DEVIL'S CANYON",
          path: "/P1175057.jpg",
          link: "/marenostrum",
        },
        {
          title: "BLOODS",
          path: "/P1109304.jpg",
          link: "/marenostrum",
        },
        {
          title: "PARKING LOT",
          path: "/P1026015mix.jpg",
          link: "/marenostrum",
        },

        {
          title: "NXRAH",
          path: "/P1062449.jpg",
          link: "/marenostrum",
        },
      ],
    },
    {
      images: [
        {
          title: "ROAD TO RICHES",
          path: "/P1024751mix.jpg",
          link: "/marenostrum",
        },
        {
          title: "SILHOUETTE",
          path: "/P1153223.jpg",
          link: "/marenostrum",
        },
        {
          title: "SELF PORTRAIT",
          path: "/P1085072.jpg",
          link: "/marenostrum",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    // ...
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=" h-[100vh] "
      style={{
        "--pagination-margin-top": "10px",
        "--pagination-margin-bottom": "90px",
      }} // Ajout de la marge supérieure
    >
      // ...
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid xl:grid-cols-4 xl:gap-2  cursor-pointer gap-x-0 xl:mr-5 sm:grid-cols-2 sm:gap-4">
              {slide.images.map((image, index) => {
                const formattedIndex = (index + 1).toString().padStart(2, "0"); // Ajout du "0" avant le chiffre
                return (
                  <a key={index} href={image.link}>
                    <div className="relative overflow-hidden group">
                      <div className="absolute top-0 left-0 p-2 text-white z-10 xl:text-2xl sm:text-sm font-nomark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                        <div className="underline">{image.title}</div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-2 text-white z-10 xl:text-5xl sm:text-xl font-nomark transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                        <div className="underline">{formattedIndex}</div>
                      </div>
                      <div className="relative image-container group-hover:brightness-100">
                        <Image
                          src={image.path}
                          width={150}
                          height={150}
                          className="object-cover xl:h-[300px] xl:w-[230px] sm:h-[100px] sm:w-[300px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
