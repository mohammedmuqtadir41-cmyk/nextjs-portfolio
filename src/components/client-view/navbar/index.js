"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as LinkScroll, scroller } from "react-scroll";
import { motion } from "framer-motion";

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
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({
  activeLink,
  getMenuItems,
  setActiveLink,
}) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      to={item.id}
      spy={true}
      smooth={true}
      duration={800}
      offset={-80}
      onSetActive={() => setActiveLink(item.id)}
      className="relative cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-300"
    >
      <span
        className={
          activeLink === item.id
            ? "text-white"
            : "text-zinc-400 hover:text-white"
        }
      >
        {item.label}
      </span>

      {activeLink === item.id && (
        <motion.span
          layoutId="navbar-active"
          className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#0DB760]"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      smooth: true,
      offset: -80,
    });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            mx-auto flex max-w-6xl items-center justify-between
            rounded-full px-4 py-3
            transition-all duration-500
            ${
              scrollActive
                ? "glass shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                : "border border-transparent bg-transparent"
            }
          `}
        >
          {/* Logo */}
          <LinkScroll
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/logo.png"
                  alt="Mohammed Muqthadir Ahmed"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">
                  Muqthadir Ahmed
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Software Developer
                </p>
              </div>
            </div>
          </LinkScroll>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </div>

          {/* Contact CTA */}
          <button
            onClick={handleContact}
            className="
              hidden rounded-full
              border border-[#0DB760]/30
              bg-[#0DB760]/10
              px-4 py-2
              text-sm font-semibold
              text-[#19D879]
              transition-all duration-300
              hover:border-[#0DB760]/60
              hover:bg-[#0DB760]/20
              hover:shadow-[0_0_25px_rgba(13,183,96,0.15)]
              md:block
            "
          >
            Lets Talk
          </button>

          {/* Mobile button */}
          <button
            onClick={handleContact}
            className="
              rounded-full
              border border-[#0DB760]/30
              bg-[#0DB760]/10
              px-4 py-2
              text-xs font-semibold
              text-[#19D879]
              md:hidden
            "
          >
            Contact
          </button>
        </motion.nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div
          className="
            glass
            mx-auto flex max-w-md
            items-center justify-between
            rounded-2xl
            px-2 py-2
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {menuItems.map((item) => (
            <LinkScroll
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={800}
              offset={-80}
              onSetActive={() => setActiveLink(item.id)}
              className="flex flex-1 cursor-pointer justify-center"
            >
              <div
                className={`
                  rounded-xl px-3 py-2 text-xs font-medium
                  transition-all duration-300
                  ${
                    activeLink === item.id
                      ? "bg-[#0DB760]/10 text-[#19D879]"
                      : "text-zinc-500"
                  }
                `}
              >
                {item.label}
              </div>
            </LinkScroll>
          ))}
        </div>
      </nav>
    </>
  );
}