"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { Link as LinkScroll } from "react-scroll";
import home from "../../../assets/home.png";

const socialLinks = [
  { id: "github", label: "GitHub", icon: <FaGithub />, href: "#" },
  { id: "linkedin", label: "LinkedIn", icon: <FaLinkedin />, href: "#" },
  { id: "instagram", label: "Instagram", icon: <FaInstagram />, href: "#" },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

export default function HomeClientView({ data }) {
  const homeData = data?.[0];
  const reduceMotion = useReducedMotion();

  const enterFrom = (x, y = 0) => ({
    initial: {
      opacity: 0,
      x: reduceMotion ? 0 : x,
      y: reduceMotion ? 0 : y,
    },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="home-ambient-glow home-ambient-glow-left"
      />
      <div
        aria-hidden="true"
        className="home-ambient-glow home-ambient-glow-right"
      />
      <div
        aria-hidden="true"
        className="home-corner-dots home-corner-dots-left"
      />
      <div
        aria-hidden="true"
        className="home-corner-dots home-corner-dots-right"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <AnimationWrapper>
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* INTRODUCTION */}
            <motion.div
              {...enterFrom(-35, 0)}
              className="order-2 lg:order-1"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2.5 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-100/80 sm:text-xs">
                  Available for opportunities
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {homeData?.heading ? (
                  homeData.heading.split(" ").map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className={
                        index === 2 || index === 3
                          ? "home-gradient-text"
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
                    <span className="home-gradient-text">
                      experiences.
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base sm:leading-8">
                {homeData?.summary ||
                  "I build modern, responsive and scalable web applications using React, Next.js and Node.js."}
              </p>

              {/* CALL TO ACTION */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <LinkScroll
                  to="project"
                  smooth
                  duration={800}
                  offset={-80}
                  className="home-primary-button group inline-flex cursor-pointer items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-black"
                >
                  View My Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </LinkScroll>

                <LinkScroll
                  to="contact"
                  smooth
                  duration={800}
                  offset={-80}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/40 hover:bg-emerald-300/[0.06]"
                >
                  Lets Talk
                  <span className="text-emerald-400">↗</span>
                </LinkScroll>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-9 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href !== "#" ? "_blank" : undefined
                    }
                    rel={
                      social.href !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-emerald-300/[0.07] hover:text-emerald-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* TECHNOLOGY STACK */}
              <div className="mt-11 border-t border-emerald-100/10 pt-6">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-500 sm:text-xs">
                  Currently working with
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        delay: reduceMotion ? 0 : 0.4 + index * 0.07,
                      }}
                      whileHover={
                        reduceMotion ? undefined : { y: -3 }
                      }
                      className="home-tech-pill"
                    >
                      <span className="home-tech-dot" />
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* PORTRAIT COMPOSITION */}
            <motion.div
              {...enterFrom(35, 0)}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="order-1 flex justify-center lg:order-2"
            >
              <div className="relative w-full max-w-[450px]">
                <div
                  aria-hidden="true"
                  className="home-portrait-halo"
                />

                <div
                  aria-hidden="true"
                  className="home-portrait-ring home-portrait-ring-outer"
                />
                <div
                  aria-hidden="true"
                  className="home-portrait-ring home-portrait-ring-inner"
                />

                {/* CORNER ACCENTS */}
                <div
                  aria-hidden="true"
                  className="home-frame-corner home-frame-corner-tl"
                />
                <div
                  aria-hidden="true"
                  className="home-frame-corner home-frame-corner-br"
                />

                {/* IMAGE */}
                <div className="home-portrait-frame relative z-10 aspect-square overflow-hidden rounded-[28px]">
                  <Image
                    src={home}
                    alt="Mohammed Muqthadir Ahmed"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 450px"
                    className="home-portrait-image object-cover"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020807]/65 via-transparent to-emerald-300/[0.04]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,214,160,0.9)]" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/80">
                      Developer portfolio
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                      Design · Develop · Deliver
                    </p>
                  </div>
                </div>

                {/* FLOATING DEVELOPER CARD */}
                <motion.div
                  animate={
                    reduceMotion ? undefined : { y: [0, -7, 0] }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="home-developer-card absolute -bottom-7 right-1 z-20 sm:-right-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.08] text-sm font-semibold text-emerald-300">
                      {"</>"}
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Software Developer
                      </p>
                      <p className="mt-1 text-[10px] text-zinc-400">
                        React · Next.js · Node
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* DECORATIVE CODE LABEL */}
                <div className="home-code-label absolute -left-2 top-[17%] z-20 hidden rounded-xl border border-emerald-300/15 bg-[#04100d]/90 px-3 py-2.5 font-mono text-[10px] text-emerald-200/80 backdrop-blur-xl sm:block sm:-left-7">
                  <span className="text-zinc-500">const</span> future ={" "}
                  <span className="text-emerald-300">building</span>;
                </div>
              </div>
            </motion.div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
