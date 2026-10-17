"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as LinkScroll, scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      to={item.id}
      spy
      smooth
      duration={800}
      offset={-90}
      onSetActive={() => setActiveLink(item.id)}
      className="relative cursor-pointer px-3 py-2 text-sm font-medium"
    >
      <span
        className={
          activeLink === item.id
            ? "text-white"
            : "text-zinc-400 transition-colors hover:text-white"
        }
      >
        {item.label}
      </span>

      {activeLink === item.id && (
        <motion.span
          layoutId="navbar-active"
          className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#0DB760]"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContact = () => {
    setMobileMenuOpen(false);

    scroller.scrollTo("contact", {
      duration: 800,
      smooth: true,
      offset: -90,
    });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Main Navbar: shares the same container as every section */}
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <div className="page-container">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              flex w-full items-center justify-between
              rounded-2xl px-3 py-3 sm:rounded-full sm:px-4
              transition-all duration-500
              ${
                scrollActive || mobileMenuOpen
                  ? "glass shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                  : "border border-transparent bg-transparent"
              }
            `}
          >
            {/* Logo */}
            <LinkScroll
              to="home"
              smooth
              duration={800}
              offset={-90}
              onClick={closeMobileMenu}
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

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              <CreateMenus
                setActiveLink={setActiveLink}
                activeLink={activeLink}
                getMenuItems={menuItems}
              />
            </div>

            {/* Desktop CTA */}
            <button
              onClick={handleContact}
              className="hidden rounded-full border border-[#0DB760]/30 bg-[#0DB760]/10 px-4 py-2 text-sm font-semibold text-[#19D879] transition-all duration-300 hover:border-[#0DB760]/60 hover:bg-[#0DB760]/20 hover:shadow-[0_0_25px_rgba(13,183,96,0.15)] md:block"
            >
              Lets Talk
            </button>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={handleContact}
                className="rounded-full border border-[#0DB760]/30 bg-[#0DB760]/10 px-3 py-2 text-xs font-semibold text-[#19D879]"
              >
                Contact
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-[#0DB760]/40 hover:bg-[#0DB760]/10"
              >
                <span className="flex w-4 flex-col gap-1.5">
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: 45, y: 4 }
                        : { rotate: 0, y: 0 }
                    }
                    className="h-[2px] w-4 rounded-full bg-current"
                  />
                  <motion.span
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      x: mobileMenuOpen ? 8 : 0,
                    }}
                    className="h-[2px] w-4 rounded-full bg-current"
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -4 }
                        : { rotate: 0, y: 0 }
                    }
                    className="h-[2px] w-4 rounded-full bg-current"
                  />
                </span>
              </button>
            </div>
          </motion.nav>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="glass mt-2 overflow-hidden rounded-2xl border border-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:hidden"
              >
                <div className="flex flex-col">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.035 }}
                    >
                      <LinkScroll
                        to={item.id}
                        spy
                        smooth
                        duration={800}
                        offset={-90}
                        onSetActive={() => setActiveLink(item.id)}
                        onClick={closeMobileMenu}
                        className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                          activeLink === item.id
                            ? "bg-[#0DB760]/10 font-semibold text-[#19D879]"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {activeLink === item.id && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#19D879]" />
                        )}
                      </LinkScroll>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}