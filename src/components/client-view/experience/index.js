"use client";

import { motion, useReducedMotion } from "framer-motion";

function TimelineItem({ children, isLast, index, reduceMotion }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : 18,
        y: reduceMotion ? 0 : 8,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.1, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-4 sm:gap-5"
    >
      {/* TIMELINE */}
      <div className="relative flex w-4 shrink-0 justify-center">
        <span className="timeline-node relative z-10 mt-6 h-2.5 w-2.5 rounded-full" />

        {!isLast && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-9 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/50 via-emerald-400/15 to-transparent"
          />
        )}
      </div>

      {/* CARD (no trailing margin after the last card) */}
      <div className={`min-w-0 flex-1 ${isLast ? "" : "mb-6"}`}>
        {children}
      </div>
    </motion.div>
  );
}

function SectionIcon({ children }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-sm text-emerald-300 shadow-[0_0_24px_rgba(16,214,160,0.04)]">
      {children}
    </div>
  );
}

function TimelineCard({ children }) {
  return (
    <div className="timeline-glass-card group relative overflow-hidden rounded-2xl border border-white/[0.09] p-5 sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-5 h-10 w-px bg-emerald-400/0 transition-colors duration-300 group-hover:bg-emerald-400/80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/0 to-transparent transition-colors duration-300 group-hover:via-emerald-300/40"
      />
      {children}
    </div>
  );
}

export default function ExperienceAndEducationClientView({
  experience,
  education,
}) {
  const reduceMotion = useReducedMotion();

  const introAnimation = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: reduceMotion ? 0 : 0.6 },
  };

  return (
    <section id="experience" className="experience-showcase page-section">
      {/* BACKGROUND DECOR */}
      <div
        aria-hidden="true"
        className="experience-ambient-glow experience-ambient-glow-left"
      />
      <div
        aria-hidden="true"
        className="experience-ambient-glow experience-ambient-glow-right"
      />

      <div className="page-container relative z-10">
        {/* HEADER */}
        <motion.div
          {...introAnimation}
          className="page-section-header max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
              The journey so far
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experience <span className="experience-heading-amp">&</span>
            <br className="hidden sm:block" />{" "}
            <span className="experience-gradient-text">Education.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            The milestones, experiences and learning that continue to
            shape my journey as a developer.
          </p>
        </motion.div>

        {/* EXPERIENCE + EDUCATION */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12">
          {/* EXPERIENCE */}
          <motion.div {...introAnimation} className="min-w-0">
            <div className="mb-7 flex items-center gap-4">
              <SectionIcon>{"</>"}</SectionIcon>
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Experience
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
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
                    reduceMotion={reduceMotion}
                    isLast={index === experience.length - 1}
                  >
                    <TimelineCard>
                      <p className="mb-3 inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300 sm:text-xs">
                        {item.duration}
                      </p>

                      <h4 className="text-base font-semibold leading-snug text-white sm:text-lg">
                        {item.company}
                      </h4>

                      <p className="mt-2 text-sm font-medium text-emerald-100/80">
                        {item.position}
                      </p>

                      {item.jobprofile && (
                        <p className="mt-4 whitespace-pre-line text-sm leading-7 text-zinc-400">
                          {item.jobprofile}
                        </p>
                      )}

                      {item.location && (
                        <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-xs text-zinc-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {item.location}
                        </div>
                      )}
                    </TimelineCard>
                  </TimelineItem>
                ))}
              </div>
            ) : (
              <div className="timeline-glass-card rounded-2xl border border-white/[0.09] p-6">
                <p className="text-sm leading-7 text-zinc-400">
                  Experience details will be added here.
                </p>
              </div>
            )}
          </motion.div>

          {/* EDUCATION */}
          <motion.div {...introAnimation} className="min-w-0">
            <div className="mb-7 flex items-center gap-4">
              <SectionIcon>✦</SectionIcon>
              <div>
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Education
                </h3>
                <p className="mt-1 text-xs text-zinc-500">
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
                    reduceMotion={reduceMotion}
                    isLast={index === education.length - 1}
                  >
                    <TimelineCard>
                      <p className="mb-3 inline-flex rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-300 sm:text-xs">
                        {item.year}
                      </p>

                      <h4 className="text-base font-semibold leading-snug text-white sm:text-lg">
                        {item.college}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        {item.degree}
                      </p>
                    </TimelineCard>
                  </TimelineItem>
                ))}
              </div>
            ) : (
              <div className="timeline-glass-card rounded-2xl border border-white/[0.09] p-6">
                <p className="text-sm leading-7 text-zinc-400">
                  Education details will be added here.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}