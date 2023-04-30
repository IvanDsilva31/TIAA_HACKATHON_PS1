import React from "react";

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img, video } }) => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-indigo-400 to-white h-auto w-auto">
        <div className="travigo-container grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h1 className="text-6xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg text-center my-4">
              {title}
            </h1>
            <h1 className="text-5xl font-bold lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-black filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">{text}</p>
            <div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full">
              <button type="button" className="button-indigo">
                {btn1}
              </button>
              <button type="button" className="button-light">
                {btn2}
              </button>
            </div>
          </div>
          <div className="homeImages flex items-center justify-center mb-11">
            <div className="videoDiv">
              <video loop autoPlay muted className="video">
                <source src={video} type="video/mp4"/>
              </video>
            </div>
            <img
              src={img}
              alt="dashbaord/img"
              className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald bus"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
