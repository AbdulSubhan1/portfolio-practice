import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const Navbar = () => {
  return (
    <>
      <header className="bg-blue-500">
        <div className="container mx-auto flex justify-between ">
          <nav className="flex">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex item-center py-5 px-3 mr-4 text-white text-4xl font-bold cursive tracking-widest"
                  : "inline-flex item-center py-5 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest"
              }
            >
              Abdul Subhan
            </NavLink>
            <NavLink
              to={"/posts"}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex item-center py-3 px-3 my-4 rounded text-white bg-blue-300"
                  : "inline-flex item-center py-3 px-3 my-4  text-blue-200 hover:text-blue-800"
              }
            >
              Blog Posts
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex item-center py-3 px-3 my-4 rounded text-white bg-blue-300"
                  : "inline-flex item-center py-3 px-3 my-4  text-blue-200 hover:text-blue-800"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "inline-flex item-center py-3 px-3 my-4 rounded text-white bg-blue-300"
                  : "inline-flex item-center py-3 px-3 my-4  text-blue-200 hover:text-blue-800"
              }
            >
              About Me!
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-3">
            <SocialIcon
              url="https://www.linkedin.com/"
              className="mr-4"
              target={"_blank"}
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.youtube.com/"
              className="mr-4"
              target={"_blank"}
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              className="mr-4"
              target={"_blank"}
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
