"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectClientView({ data }) {
  return (
    <section
      id="project"
      className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
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
          duration: 0.6,
        }}
        className="mb-12"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#0DB760]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#19D879]">
            My Work
          </span>
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Featured{" "}
              <span className="text-[#0DB760]">
                Projects
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              A selection of applications and projects I've built while
              developing my skills across the modern web stack.
            </p>
          </div>

          {data?.length > 0 && (
            <span className="shrink-0 text-xs text-zinc-600">
              {data.length}{" "}
              {data.length === 1 ? "project" : "projects"}
            </span>
          )}
        </div>
      </motion.div>

      {/* PROJECTS */}
      {data?.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {data.map((item, index) => (
            <motion.article
              key={item._id || index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-5
                transition-all
                duration-300
                hover:border-[#0DB760]/30
                hover:bg-white/[0.035]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* Green glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#0DB760]/5
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#0DB760]/10
                "
              />

              {/* Project number */}
              <div className="relative mb-6 flex items-center justify-between">
                <span className="text-xs font-medium tracking-[0.2em] text-[#0DB760]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.createdAt && (
                  <span className="text-[10px] text-zinc-600">
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-US"
                    )}
                  </span>
                )}
              </div>

              {/* Project name */}
              <h3 className="relative text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {item.name}
              </h3>

              {/* Divider */}
              <div className="my-5 h-px bg-white/10" />

              {/* Technologies */}
              <div className="relative flex flex-wrap gap-2">
                {item.technologies
                  ? item.technologies
                      .split(",")
                      .map((technology, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            text-zinc-400
                            transition-colors
                            duration-300
                            group-hover:border-[#0DB760]/20
                          "
                        >
                          {technology.trim()}
                        </span>
                      ))
                  : null}
              </div>

              {/* Buttons */}
              <div className="relative mt-7 flex flex-wrap gap-3">
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#0DB760]
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-black
                      transition-all
                      duration-300
                      hover:bg-[#19D879]
                      hover:shadow-[0_0_25px_rgba(13,183,96,0.2)]
                    "
                  >
                    <FaExternalLinkAlt size={10} />
                    Website
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-zinc-300
                      transition-all
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      hover:text-white
                    "
                  >
                    <FaGithub size={12} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-sm text-zinc-500">
            No projects available yet.
          </p>
        </div>
      )}

      {/* Bottom accent */}
      <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#0DB760]/40 to-transparent" />
    </section>
  );
}