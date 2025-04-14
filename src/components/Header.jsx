import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Button, NavLink, NavbarBrand } from "reactstrap";
import images from "../constants/images";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { BiDownArrow } from "react-icons/bi";
import { FiArrowDown } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/actions/userActions";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  // Flyoutcontent for desktop browsers

  const PagesLink = ({ children, href, Content }) => {
    const [open, setOpen] = useState(false);
    const showContent = open && Content;
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="group relative h-fit w-fit"
      >
        {/* Link animation and stuff */}
        <button className="pl-6">
          {children}
          <span
            style={{
              transform: showContent ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-1 -right-2 left-4 h-1 origin-left rounded-full bg-sky-600 transition-transform duration-500 ease-out"
          />
        </button>
        {/* Flyout Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ x: "-50%" }}
              className="absolute left-10 top-12  bg-transparent text-black"
            >
              <div className="absolute -top-6 left-0 right-0 bg-transparent h-6"></div>
              <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 bg-slate-300 rotate-45"></div>
              <Content />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const PagesLinkMob = ({ children, ContentMob }) => {
    const [open, setOpen] = useState(false);
    const showContent = open && ContentMob;
    return (
      <div
        onTouchEnd={() => setOpen(true)}
        onMouseOut={() => setOpen(false)}
        className="group relative h-fit w-fit"
      >
        {/* Link animation and stuff */}
        <button className="pl-3">
          {children}
          <span
            style={{
              transform: showContent ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-1 -right-2 left-4 h-1 origin-left rounded-full bg-sky-600 transition-transform duration-500 ease-out"
          />
        </button>
        {/* Flyout Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ x: "-50%" }}
              className="absolute left-[74px] top-9  bg-transparent text-black z-50"
            >
              <div className="absolute -top-6 left-0 right-0 bg-transparent h-6"></div>
              <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 bg-slate-300 rotate-45"></div>
              <ContentMob />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // FlyoutContent for Pages is designed here and rendered in the children area

  const pageContent = () => {
    return (
      <div className="w-36 h-[90px] flex flex-col bg-slate-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl">
        <button className="pl-3 border-b pb-2 pt-3 mt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300 hover:transition-colors hover:bg-dark-hard hover:text-white">
          About
        </button>
        <button className="pl-3 py-2  rounded-md hover:transition-colors hover:bg-dark-hard hover:text-white">
          Contact
        </button>
      </div>
    );
  };
  const profileButton = () => {
    const logoutHandler = () => {
      dispatch(userLogout());
    };
    return (
      <div className="w-36 h-[90px] bg-slate-300 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-xl flex flex-col justify-center items-center">
        <button className="w-full border-b pb-2 pt-2 border-b-gray-300 rounded-md hover:transition-colors hover:bg-dark-hard hover:text-white hover:duration-200 text-center">
          Dashboard
        </button>
        <button
          className="w-full py-2 rounded-md hover:transition-colors hover:bg-dark-hard hover:text-white hover:duration-200 text-center"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    );
  };
  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <Navbar className=" md:pb-0 pb-4 flex w-full h-full justify-between backdrop-blur-0 border border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300 bg-slate-50 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        {/* Desktop navbar */}
        <div>
          <div className="flex">
            <NavbarBrand className="">
              <NavLink href="/">
                <img
                  src={images.logo}
                  alt="MindLog-Png"
                  className="w-24 pt-4"
                />
              </NavLink>
            </NavbarBrand>
            <div className="my-4 hidden md:flex">
              <div className="pl-6">
                {" "}
                <NavLink href="/blog/:id">Blog</NavLink>
              </div>
              {/* Children and the content is passed through here to PagesLink CONSTANT */}
              <PagesLink Content={pageContent}>
                Pages{" "}
                <IoIosArrowDown className="absolute left-16 top-1 ml-1 pl-0.5" />
              </PagesLink>
              <div className="pl-8">FAQ</div>
            </div>
            <div className="md:flex hidden pr-3 lg:right-2 right-4 fixed top-1.5">
              {userState.userInfo ? (
                <PagesLink Content={profileButton}>
                  <button className="mr-2 mt-2.5 flex flex-row">
                    Profile <IoIosArrowDown className="mt-1.5" />{" "}
                  </button>
                </PagesLink>
              ) : (
                <>
                  <Button className="text-[#15bbd8] border border-[#15bbd8] rounded-lg px-3 py-2 mr-3 hover:transition-colors hover:bg-[#15bbd8] hover:font-semibold hover:text-white hover:duration-300">
                    <NavLink href="/login">Login</NavLink>
                  </Button>
                  <Button className="text-[#1565D8] border border-[#1565D8] rounded-lg px-3 py-2 hover:transition-colors hover:bg-[#1565D8] hover:font-semibold hover:text-white hover:duration-300">
                    <NavLink href="/register">Sign Up</NavLink>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className="md:hidden absolute top-1 right-1 cursor-pointer"
          onClick={handleClick}
        >
          {!nav ? (
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          ) : (
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          )}
        </div>
      </Navbar>
      {/* dropdown menu for mobiles */}
      <AnimatePresence>
        {nav && (
          <motion.div
            key="mobile-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full pt-2 pr-2 bg-slate-50 shadow-md fixed"
          >
            <div className="pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300">
              <NavLink href="/blog/:id">Blog</NavLink>
            </div>
            <PagesLinkMob href="javaScript:;" ContentMob={pageContent}>
              Pages
              <IoIosArrowDown className="absolute left-14 top-1/4 pl-0.5" />
            </PagesLinkMob>
            <div className="pl-3 border-b pb-3 font-bold border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300"></div>
            <div className="pl-3 border-b pb-3 pt-2 border-b-gray-300 rounded-md border-l-gray-300 border-r-gray-300">
              FAQ
            </div>
            {userState.userInfo ? (
              <PagesLinkMob ContentMob={profileButton}>
                <div className="flex flex-col justify-end items-end">
                  <button className="w-full mt-2.5 flex flex-row mb-4">
                    Profile <IoIosArrowDown className="mt-1.5" />
                  </button>
                </div>
              </PagesLinkMob>
            ) : (
              <>
                <Button className="text-[#15bbd8] border border-[#15bbd8] rounded-lg px-3 py-2 mr-3 hover:transition-colors hover:bg-[#15bbd8] hover:font-semibold hover:text-white hover:duration-300">
                  <NavLink href="/login">Login</NavLink>
                </Button>
                <Button className="text-[#1565D8] border border-[#1565D8] rounded-lg px-3 py-2 hover:transition-colors hover:bg-[#1565D8] hover:font-semibold hover:text-white hover:duration-300">
                  <NavLink href="/register">Sign Up</NavLink>
                </Button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
