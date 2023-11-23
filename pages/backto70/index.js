import React, { useState, useEffect } from "react";


const backto70 = () => {
 

  return (
    <div className="scrollable-page bg-backto70 w-full h-full bg-local bg-cover bg-center">
      <h3 className="flex justify-center items-center text-4xl font-nomark mt-5">
        Back to 70's
      </h3>
      <div className="flex justify-center items-center m-5">
        <iframe
         src="https://open.spotify.com/embed/track/7swGurTfZlwx7mTOE8PpIc?utm_source=generator"
          width="500px"
          height="80px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <style jsx>{`
        .scrollable-page {
          overflow: auto;
          max-height: 100vh;
        }
      `}</style>

      <div className="flex item-center justify-center">
        <div className="grid grid-cols-2 grid-rows-3 gap-x-5 xl:gap-y-20 sm:gap-y-5 mt-2 px-3 mb-10">
        <div>
          <img
              src="../04. BACK TO 70_S/back-to-70s-1.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
               src="../04. BACK TO 70_S/back-to-70s-2.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
              src="../04. BACK TO 70_S/back-to-70s-3.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div> <div>
          <img
            src="../04. BACK TO 70_S/back-to-70s-4.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
            src="../04. BACK TO 70_S/back-to-70s-5.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
          <div>
          <img
           src="../04. BACK TO 70_S/back-to-70s-6.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
        
        </div>
        
      </div>
      <div className="flex item-center justify-center"  >
          <img
           src="../04. BACK TO 70_S/back-to-70s-7.jpg"
              alt="Image 1"
              className="xl:h-[650px] xl:w-[500px]"
            />
          </div>
      
    </div>
  );
};

export default backto70;
