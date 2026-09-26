"use client";

import AnimationWrapper from "../animation-wrapper";
import { useMemo } from "react";
import { motion } from "framer-motion";

function variants() {
  return {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: ({ duration = 1 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function ExperienceAndEducationClientView({
  experience,
  education,
}) {
  console.log(experience, "Experience");
  console.log(education, "Education");

  const setVariants = useMemo(() => variants(), []);

  return (
    <div
      id="experience"
      className="max-w-7xl mx-auto px-8 xl:px-6 py-20"
    >
      <AnimationWrapper>
        <motion.div variants={setVariants}>

          {/* MAIN HEADINGS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

            <h2 className="text-4xl lg:text-5xl text-center font-medium">
              My{" "}
              <span className="text-green-600">
                Experience
              </span>
            </h2>

            <h2 className="text-4xl lg:text-5xl text-center font-medium">
              My{" "}
              <span className="text-green-600">
                Education
              </span>
            </h2>

          </div>

          {/* EXPERIENCE + EDUCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* EXPERIENCE */}
            <div>
              {experience?.map((item, index) => (
                <motion.div
                  key={item._id || index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="flex"
                >

                  {/* TIMELINE */}
                  <div className="flex flex-col items-center mr-5">

                    {/* DOT */}
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-4" />

                    {/* LINE */}
                    {index !== experience.length - 1 && (
                      <div className="w-[2px] bg-green-500 h-full min-h-[120px]" />
                    )}

                  </div>

                  {/* CARD */}
                  <div className="border-2 border-green-500 rounded-lg p-5 mb-5 w-full">

                    <p className="font-semibold text-gray-800 mb-2">
                      {item.duration}
                    </p>

                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.company}
                    </h3>

                    <h4 className="font-bold text-gray-900 mt-1">
                      {item.position}
                    </h4>

                    <p className="text-gray-700 mt-2">
                      {item.jobprofile}
                    </p>

                    {item.location && (
                      <p className="text-gray-500 text-sm mt-1">
                        {item.location}
                      </p>
                    )}

                  </div>

                </motion.div>
              ))}
            </div>

            {/* EDUCATION */}
            <div>
              {education?.map((item, index) => (
                <motion.div
                  key={item._id || index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="flex"
                >

                  {/* TIMELINE */}
                  <div className="flex flex-col items-center mr-5">

                    {/* DOT */}
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-4" />

                    {/* LINE */}
                    {index !== education.length - 1 && (
                      <div className="w-[2px] bg-green-500 h-full min-h-[120px]" />
                    )}

                  </div>

                  {/* CARD */}
                  <div className="border-2 border-green-500 rounded-lg p-5 mb-5 w-full">

                    <p className="font-semibold text-gray-800 mb-2">
                      {item.year}
                    </p>

                    <h3 className="font-bold text-gray-900 text-lg">
                      {item.college}
                    </h3>

                    <h4 className="font-bold text-gray-900 mt-1">
                      {item.degree}
                    </h4>

                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </motion.div>
      </AnimationWrapper>
    </div>
  );
}