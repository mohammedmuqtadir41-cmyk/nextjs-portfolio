"use client";
// 6:02
import { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer
        inline-block relative font-semibold
        after:absolute after:bottom-0 after:left-1/2
        after:h-[2px] after:bg-[#0DB760]
        after:transition-all after:duration-300
        ${
          activeLink === item.id
            ? "text-[#0DB760] after:w-full after:-translate-x-1/2"
            : "text-black hover:text-[#0DB760] after:w-0 after:-translate-x-1/2 hover:after:w-full"
        }`}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all
                    ${scrollActive ? "shadow-md pt-0" : "pt-4"}`}
      >
        <nav
          className="max-w-screen-xl px-6 sm:px-8 lg:px-16
                        mx-auto grid grid-flow-col py-3 sm:py-4"
        >
          <div className="col-start-1 col-end-2 flex items-center">
            <div
              className="cursor-pointer flex gap-2 font-bold
                                items-center text-[20px] text-[#0DB760]"
            >
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                quality={100}
              />
            </div>
          </div>

          <ul
            className="hidden lg:flex col-start-4 col-end-8
                            text-black items-center"
          >
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>

          <div className="col-start-10 col-end-12 flex justify-end">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-2 px-5 border-2 border-green-600 text-green-600 
              font-semibold rounded-full text-xl hover:bg-gray-400 hover:text-white hover:shadow-lg
               transition-all duration-300 ease-in-out"
            >Contact Me</button>
          </div>
        </nav>
      </header>
    </>
  );
}
