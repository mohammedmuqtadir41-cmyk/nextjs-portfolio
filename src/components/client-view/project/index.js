"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectClientView({ data }) {
  const reduceMotion = useReducedMotion();

  const projects = data || [];

  return (
    <section
      id="project"
      className="project-showcase relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* AMBIENT BACKGROUND */}
      <div
        aria-hidden="true"
        className="project-ambient-glow project-ambient-glow-left"
      />
      <div
        aria-hidden="true"
        className="project-ambient-glow project-ambient-glow-right"
      />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
        className="relative z-10 mb-12 sm:mb-14"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
            Selected work
          </span>
        </div>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Projects<span className="text-white/40">.</span>
              <br className="hidden sm:block" />
              <span className="project-gradient-text">
                {" "}Built with purpose.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              A collection of applications, experiments and solutions
              built through hands-on development and continuous learning.
            </p>
          </div>

          {projects.length > 0 && (
            <div className="flex shrink-0 items-center gap-3 self-start rounded-full border border-emerald-300/15 bg-emerald-300/[0.04] px-4 py-2.5 sm:self-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,214,160,0.8)]" />
              <span className="text-xs text-zinc-300">
                {String(projects.length).padStart(2, "0")}{" "}
                {projects.length === 1 ? "project" : "projects"}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* PROJECT GRID */}
      {projects.length > 0 ? (
        <div className="relative z-10 grid gap-5 md:grid-cols-2">
          {projects.map((item, index) => (
            <motion.article
              key={item._id || index}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 26,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                delay: reduceMotion ? 0 : Math.min(index * 0.09, 0.36),
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="project-glass-card group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.09] p-5 sm:p-7"
            >
              {/* TOP EDGE LIGHT */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/0 to-transparent transition-colors duration-500 group-hover:via-emerald-300/65"
              />

              {/* AMBIENT CARD GLOW */}
              <div
                aria-hidden="true"
                className="project-card-glow pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-50 transition-all duration-500 group-hover:opacity-100"
              />

              {/* PROJECT META */}
              <div className="relative mb-7 flex items-center justify-between gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-emerald-300/90">
                  PROJECT / {String(index + 1).padStart(2, "0")}
                </span>

                {item.createdAt && (
                  <time
                    dateTime={new Date(item.createdAt).toISOString()}
                    className="text-[10px] text-zinc-500 sm:text-xs"
                  >
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                )}
              </div>

              {/* PROJECT TITLE */}
              <h3 className="relative text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-100 sm:text-2xl">
                {item.name}
              </h3>

              {/* DIVIDER */}
              <div className="my-5 h-px bg-gradient-to-r from-emerald-300/20 via-white/[0.08] to-transparent" />

              {/* TECHNOLOGIES */}
              {item.technologies && (
                <div className="relative">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Built with
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies
                      .split(",")
                      .map((technology) => technology.trim())
                      .filter(Boolean)
                      .map((technology, techIndex) => (
                        <span
                          key={`${technology}-${techIndex}`}
                          className="project-tech-pill inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium sm:text-xs"
                        >
                          <span className="h-1 w-1 rounded-full bg-emerald-400" />
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              {/* ACTIONS */}
              <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-primary-link inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-black"
                  >
                    <FaExternalLinkAlt size={10} />
                    Live Preview
                  </a>
                )}

                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-emerald-300/30 hover:bg-emerald-300/[0.05] hover:text-white"
                  >
                    <FaGithub size={13} />
                    Source Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="relative z-10 rounded-2xl border border-white/[0.09] bg-white/[0.02] p-10 text-center">
          <p className="text-sm text-zinc-400">
            No projects available yet.
          </p>
        </div>
      )}

      {/* SECTION FOOTER */}
      <div className="relative z-10 mt-14 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-300/20" />
        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          End of selected work
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-300/20" />
      </div>
    </section>
  );
}
