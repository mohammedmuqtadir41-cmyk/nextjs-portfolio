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

export default function ProjectClientView({ data }) {
  console.log(data, "Project Client View");

  const setVariants = useMemo(() => variants(), []);

  return (
    <section
      id="project"
      className="max-w-7xl mx-auto px-8 xl:px-6 py-20"
    >
      <AnimationWrapper>
        <motion.div variants={setVariants}>

          {/* ==================== HEADING ==================== */}

          <h2 className="text-4xl lg:text-5xl text-center font-medium">
            My{" "}
            <span className="text-green-600">
              Projects
            </span>
          </h2>

          {/* ==================== LOADING CIRCLE ==================== */}

          <div className="flex justify-center mt-8 mb-16">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 border-[8px] border-black rounded-full"
            />
          </div>

          {/* ==================== PROJECT CARDS ==================== */}

          {data && data.length > 0 ? (
            <div
              className="
                flex
                gap-4
                overflow-x-auto
                pb-5
                px-1
                snap-x
                snap-mandatory
              "
            >
              {data.map((item, index) => (
                <motion.div
                  key={item._id || index}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    group
                    flex
                    flex-col
                    min-w-[280px]
                    sm:min-w-[300px]
                    lg:min-w-0
                    lg:w-[calc(25%-12px)]
                    min-h-[225px]
                    border-2
                    border-green-500
                    rounded-lg
                    p-4
                    bg-white
                    shadow-sm
                    hover:shadow-lg
                    transition-shadow
                    duration-300
                    snap-start
                  "
                >

                  {/* ==================== PROJECT NAME ==================== */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-gray-800
                      leading-tight
                      mb-2
                    "
                  >
                    {item.name}
                  </h3>

                  {/* ==================== DATE ==================== */}

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-gray-500
                      mb-4
                    "
                  >
                    {item.createdAt
                      ? new Date(
                          item.createdAt
                        ).toLocaleDateString("en-US")
                      : ""}
                  </p>

                  {/* ==================== TECHNOLOGIES ==================== */}

                  <div className="flex flex-wrap gap-2">
                    {item.technologies
                      ? item.technologies
                          .split(",")
                          .map((technology, techIndex) => (
                            <span
                              key={techIndex}
                              className="
                                border
                                border-green-500
                                rounded-md
                                px-4
                                py-2
                                text-xs
                                font-medium
                                text-gray-700
                                whitespace-nowrap
                              "
                            >
                              {technology.trim()}
                            </span>
                          ))
                      : null}
                  </div>

                  {/* ==================== BUTTONS ==================== */}

                  <div className="flex justify-center gap-2 mt-6">

                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-green-600
                          text-white
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          hover:bg-green-700
                          transition-colors
                        "
                      >
                        Website
                      </a>
                    )}

                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          bg-green-600
                          text-white
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          hover:bg-green-700
                          transition-colors
                        "
                      >
                        Github
                      </a>
                    )}

                  </div>

                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No projects available.
            </p>
          )}

          {/* ==================== BOTTOM LINE ==================== */}

          <div
            className="
              w-full
              h-[4px]
              bg-green-700
              mt-4
              rounded-full
            "
          />

        </motion.div>
      </AnimationWrapper>
    </section>
  );
}