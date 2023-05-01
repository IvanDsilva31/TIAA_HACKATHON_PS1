import React from "react";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className="bg-gradient-to-b from-indigo-400 to-indigo-300 pt-24 pb-7">
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2023{" "}
              <span className="font-semibold">
                TEAM A - FR.CRCE,BANDRA WEST
              </span>
            </p>
            <div className="flex items-center gap-3">
              {sociallinks?.map((val, i) => (
                <img
                  key={i}
                  src={val.icon}
                  alt="social/icons"
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
