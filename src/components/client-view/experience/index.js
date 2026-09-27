"use client";

import { motion } from "framer-motion";

function TimelineItem({
  children,
  isLast,
  side = "left",
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -25 : 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="relative flex gap-4"
    >
      {/* TIMELINE */}
      <div className="relative flex w-4 shrink-0 justify-center">
        <div className="relative z-10 mt-5 h-2.5 w-2.5 rounded-full bg-[#0DB760] shadow-[0_0_12px_rgba(13,183,96,0.6)]" />

        {!isLast && (
          <div className="absolute left-1/2 top-7 h-[calc(100%+1.25rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#0DB760]/60 to-white/5" />
        )}
      </div>

      {/* CARD */}
      <div className="mb-5 min-w-0 flex-1">
        {children}
      </div>
    </motion.div>
  );
}

export default function ExperienceAndEducationClientView({
  experience,
  education,
}) {
  return (
    <section
      id="experience"
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
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-14"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-7 bg-[#0DB760]" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#19D879]">
            My Journey
          </span>
        </div>

        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Experience &{" "}
          <span className="text-[#0DB760]">
            Education
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
          A look at the experience and education that have shaped my
          journey as a developer.
        </p>
      </motion.div>

      {/* EXPERIENCE + EDUCATION */}
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">

        {/* EXPERIENCE */}
        <div>
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0DB760]/20 bg-[#0DB760]/5">
              <span className="text-sm text-[#19D879]">
                {"</>"}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                My Experience
              </h3>

              <p className="text-xs text-zinc-600">
                Professional journey
              </p>
            </div>
          </div>

          {experience?.length ? (
            <div>
              {experience.map((item, index) => (
                <TimelineItem
                  key={item._id || index}
                  index={index}
                  side="left"
                  isLast={index === experience.length - 1}
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#0DB760]/30
                      hover:bg-[#0DB760]/[0.03]
                    "
                  >
                    {/* Duration */}
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#19D879]">
                      {item.duration}
                    </p>

                    {/* Company */}
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      {item.company}
                    </h4>

                    {/* Position */}
                    <p className="mt-1 text-sm font-medium text-zinc-300">
                      {item.position}
                    </p>

                    {/* Description */}
                    {item.jobprofile && (
                      <p className="mt-3 text-xs leading-6 text-zinc-500 sm:text-sm">
                        {item.jobprofile}
                      </p>
                    )}

                    {/* Location */}
                    {item.location && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0DB760]" />
                        {item.location}
                      </div>
                    )}
                  </div>
                </TimelineItem>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-zinc-500">
              Experience details will be added here.
            </div>
          )}
        </div>

        {/* EDUCATION */}
        <div>
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#0DB760]/20 bg-[#0DB760]/5">
              <span className="text-sm text-[#19D879]">
                ✦
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                My Education
              </h3>

              <p className="text-xs text-zinc-600">
                Academic background
              </p>
            </div>
          </div>

          {education?.length ? (
            <div>
              {education.map((item, index) => (
                <TimelineItem
                  key={item._id || index}
                  index={index}
                  side="right"
                  isLast={index === education.length - 1}
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#0DB760]/30
                      hover:bg-[#0DB760]/[0.03]
                    "
                  >
                    {/* Year */}
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#19D879]">
                      {item.year}
                    </p>

                    {/* College */}
                    <h4 className="text-base font-semibold text-white sm:text-lg">
                      {item.college}
                    </h4>

                    {/* Degree */}
                    <p className="mt-1 text-sm font-medium leading-6 text-zinc-400">
                      {item.degree}
                    </p>
                  </div>
                </TimelineItem>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-zinc-500">
              Education details will be added here.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}