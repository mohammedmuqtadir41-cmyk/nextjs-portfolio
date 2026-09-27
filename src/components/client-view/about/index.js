"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import about from "../../../assets/about.png";

export default function AboutClientView({ data }) {
  const aboutData = data?.[0];

  const skills = aboutData?.skills
    ? aboutData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    : [];

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#0DB760]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#19D879]">
            About Me
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why Hire Me For Your Next{" "}
          <span className="text-[#0DB760]">Project?</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {aboutData?.aboutme ||
            "I enjoy building modern, responsive and user-friendly web applications."}
        </p>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="
          mb-14
          grid
          grid-cols-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          py-5
        "
      >
        {/* CLIENTS */}
        <div className="border-r border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {aboutData?.noofclients || "0"}
            <span className="text-[#0DB760]">+</span>
          </h3>

          <p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-500 sm:text-xs">
            Clients
          </p>
        </div>

        {/* PROJECTS */}
        <div className="border-r border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {aboutData?.noofprojects || "0"}
            <span className="text-[#0DB760]">+</span>
          </h3>

          <p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-500 sm:text-xs">
            Projects
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {aboutData?.yearsofexperience || "0"}
            <span className="text-[#0DB760]">+</span>
          </h3>

          <p className="mt-1 text-[9px] uppercase tracking-wider text-zinc-500 sm:text-xs">
            Experience
          </p>
        </div>
      </motion.div>

      {/* ABOUT CONTENT */}
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[360px]">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-[#0DB760]/10 blur-[80px]" />

            {/* Image */}
            <div className="
              relative
              aspect-square
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#090909]
            ">
              <Image
                src={about}
                alt="About Mohammed Muqthadir Ahmed"
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm leading-7 text-zinc-400 sm:text-base">
            {aboutData?.aboutme ||
              "I build modern web applications with a focus on clean interfaces, responsive experiences and maintainable code."}
          </p>

          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold text-white">
              My Skills
            </h3>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={`${skill}-${index}`}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(13,183,96,0.5)",
                    backgroundColor: "rgba(13,183,96,0.05)",
                  }}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-3
                    py-3
                    text-center
                    text-xs
                    font-medium
                    text-zinc-400
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}