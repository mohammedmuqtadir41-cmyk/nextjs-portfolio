"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import home from "../../../assets/home.png";

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: <FaGithub />,
    href: "#",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "#",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: <FaInstagram />,
    href: "#",
  },
];

export default function HomeClientView({ data }) {
  const homeData = data?.[0];

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        px-5
        pb-20
        pt-28
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        <AnimationWrapper>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              {/* Small badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0DB760]/20 bg-[#0DB760]/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#0DB760]" />

                <span className="text-xs font-medium tracking-wide text-zinc-400">
                  Available for opportunities
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {homeData?.heading ? (
                  homeData.heading
                    .split(" ")
                    .map((word, index) => (
                      <span
                        key={`${word}-${index}`}
                        className={
                          index === 2 || index === 3
                            ? "text-[#0DB760]"
                            : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    ))
                ) : (
                  <>
                    Building digital
                    <br />
                    <span className="text-[#0DB760]">
                      experiences
                    </span>
                    .
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
                {homeData?.summary ||
                  "I build modern, responsive and scalable web applications using React, Next.js and Node.js."}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <LinkScroll
                  to="project"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="
                    cursor-pointer
                    rounded-full
                    bg-[#0DB760]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-[#19D879]
                    hover:shadow-[0_0_30px_rgba(13,183,96,0.25)]
                  "
                >
                  View My Work
                </LinkScroll>

                <LinkScroll
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  className="
                    cursor-pointer
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#0DB760]/40
                    hover:bg-[#0DB760]/5
                  "
                >
                  Lets Talk
                </LinkScroll>
              </div>

              {/* Social links */}
              <div className="mt-9 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href !== "#"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:border-[#0DB760]/40
                      hover:bg-[#0DB760]/10
                      hover:text-[#19D879]
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Currently working with
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "JavaScript",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-xs
                        text-zinc-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative w-full max-w-[480px]">

                {/* Glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[280px]
                    w-[280px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#0DB760]/10
                    blur-[100px]
                  "
                />

                {/* Decorative card */}
                <div
                  className="
                    absolute
                    -bottom-4
                    -left-4
                    -right-4
                    top-4
                    rounded-3xl
                    border
                    border-[#0DB760]/20
                    bg-[#0DB760]/5
                  "
                />

                {/* Image container */}
                <div
                  className="
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#0a0a0a]
                    shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  "
                >
                  <Image
                    src={home}
                    alt="Mohammed Muqthadir Ahmed"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 480px"
                    className="object-cover"
                  />

                  {/* Image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating label */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-5
                    right-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0a0a0a]/90
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur-xl
                    sm:right-[-20px]
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0DB760]/10 text-[#19D879]">
                      {"</>"}
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Software Developer
                      </p>

                      <p className="text-[10px] text-zinc-500">
                        React • Next.js • Node
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}