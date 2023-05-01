import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import menu from "../../images/menu.svg";
import PopupMenu from "../MainPage/PopupMenu";

const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  // console.log(popupState)

  return (
    <>
      <header
        className={`
          nav-default ${navState && "nav-sticky"}
        `}
      >
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={`/`} className="flex items-center">
            {/* <img src={logo} alt='logo/img' className='w-22 h-9 object-fill' /> */}
            <h1 className="text-lg text-slate-900 font-bold">Swift Travel</h1>
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((val, i) => (
              <li key={i}>
                <NavLink
                  to={"#"}
                  className="text-lg text-slate-900 transition duration-300 hover:bg-primary hover:text-white rounded-md px-4 py-2"
                >
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button
                type="button"
                className="btn btn-primary rounded-full px-7 text-base"
              >
                Register
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-outline rounded-full px-7 text-base"
              >
                Login
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                onClick={onTriggerPopup}
              >
                <img
                  src={menu}
                  alt="menu/svg"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
    </>
  );
};

export default Navbar;
