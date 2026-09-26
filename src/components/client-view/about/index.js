"use client";

import AnimationWrapper from "../animation-wrapper";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "../../../assets/about.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function AboutClientView({ data }) {
  console.log(data, "Client About View");

  const setVariants = useMemo(() => variants(), []);

  const aboutData = data?.[0];

  const skills = aboutData?.skills ? aboutData.skills.split(",") : [];

  return (
    <div id="about" className="max-w-7xl mx-auto px-8 xl:px-6 py-20">
      <AnimationWrapper>
        <motion.div variants={setVariants}>
          {/* STATS */}
          <div className="grid grid-cols-3 mb-16">
            {/* CLIENTS */}
            <div className="text-center border-r border-green-500">
              <h2 className="text-4xl font-bold text-green-600">
                {aboutData?.noofclients || "0"}+
              </h2>

              <p className="mt-2 font-semibold text-gray-800">Clients</p>
            </div>

            {/* PROJECTS */}
            <div className="text-center border-r border-green-500">
              <h2 className="text-4xl font-bold text-green-600">
                {aboutData?.noofprojects || "0"}+
              </h2>

              <p className="mt-2 font-semibold text-gray-800">Projects</p>
            </div>

            {/* EXPERIENCE */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-green-600">
                {aboutData?.yearsofexperience || "0"}+
              </h2>

              <p className="mt-2 font-semibold text-gray-800">Experience</p>
            </div>
          </div>

          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
              Why Hire Me For Your Next{" "}
              <span className="text-green-600">Project</span>?
            </h2>

            <p className="mt-4 font-semibold text-gray-800">
              {aboutData?.aboutme || ""}
            </p>
          </div>

          {/* ABOUT CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-[350px] h-[350px]">
                <Image
                  src={about}
                  alt="About Mohammed Muqthadir Ahmed"
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* SKILLS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  className="border-2 border-green-500
                  rounded-lg px-4 py-3
                  text-center font-semibold
                  text-gray-800
                  shadow-sm"
                >
                  {skill.trim()}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
