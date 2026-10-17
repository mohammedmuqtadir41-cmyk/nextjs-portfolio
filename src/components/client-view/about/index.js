"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import about from "../../../assets/about.png";

export default function AboutClientView({ data }) {
  const aboutData = data?.[0];
  const reduceMotion = useReducedMotion();

  const skills = aboutData?.skills
    ? aboutData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    : [];

  const reveal = (x = 0, y = 24) => ({
    initial: {
      opacity: 0,
      x: reduceMotion ? 0 : x,
      y: reduceMotion ? 0 : y,
    },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section id="about" className="about-showcase page-section">
      <div aria-hidden="true" className="about-dots about-dots-left" />
      <div aria-hidden="true" className="about-dots about-dots-right" />

      <div className="page-container relative z-10">
        <motion.div {...reveal()} className="page-section-header max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
            <span className="h-px w-8 bg-emerald-400" />
            About me
          </span>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building ideas into{" "}
            <span className="about-gradient-text">digital experiences.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            {aboutData?.aboutme ||
              "I enjoy building modern, responsive and user-friendly web applications."}
          </p>
        </motion.div>

        <motion.div
          {...reveal(0, 18)}
          className="mb-[var(--section-header-gap)] grid grid-cols-3 border-y border-emerald-300/10 py-6"
        >
          {[
            { value: aboutData?.noofclients || "0", label: "Clients" },
            { value: aboutData?.noofprojects || "0", label: "Projects" },
            {
              value: aboutData?.yearsofexperience || "0",
              label: "Experience",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index !== 2 ? "border-r border-white/10" : ""
              }`}
            >
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                {stat.value}
                <span className="text-emerald-400">+</span>
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="about-composition relative grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:gap-12 lg:gap-16">
          <svg
            aria-hidden="true"
            className="about-circuit-line pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1200 560"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d="M 390 340 H 510 L 565 285 V 245 H 650"
              stroke="rgba(16,214,160,0.42)"
              strokeWidth="1.5"
            />
            <circle cx="390" cy="340" r="3" fill="#10d6a0" />
            <circle cx="650" cy="245" r="3" fill="#10d6a0" />
          </svg>

          <motion.div
            {...reveal(-24, 0)}
            className="relative mx-auto w-full max-w-[500px] max-md:my-8"
          >
            <div aria-hidden="true" className="about-portrait-glow" />
            <div aria-hidden="true" className="about-ring about-ring-outer" />
            <div aria-hidden="true" className="about-ring about-ring-middle" />
            <div aria-hidden="true" className="about-ring about-ring-inner" />

            {/* Portrait is 78% of the wrapper (390 / 500) so it always scales with the rings */}
            <div className="about-portrait relative z-10 mx-auto aspect-square w-[78%]">
              <Image
                src={about}
                alt="Portrait"
                fill
                sizes="(max-width: 768px) 70vw, 390px"
                className="about-portrait-image object-cover"
              />
            </div>

            <div className="about-role-chip about-role-chip-floating">
              <span className="about-status-dot" />
              <div>
                <p className="text-xs font-semibold text-white">
                  Software Developer
                </p>
                <p className="mt-1 text-[10px] text-zinc-400">
                  Building for the web
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal(24, 0)} className="relative z-10 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
              A little about me
            </p>

            <h3 className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Turning complex ideas into clean, useful products.
            </h3>

            <p className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base">
              {aboutData?.aboutme ||
                "I build modern web applications with a focus on clean interfaces, responsive experiences and maintainable code."}
            </p>

            <div className="mt-9">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h4 className="text-sm font-semibold text-white">My toolkit</h4>
                <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Technologies & tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={`${skill}-${index}`}
                    whileHover={
                      reduceMotion ? undefined : { y: -3, scale: 1.025 }
                    }
                    transition={{ duration: 0.2 }}
                    className="about-skill-pill"
                  >
                    <span className="about-skill-dot" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}