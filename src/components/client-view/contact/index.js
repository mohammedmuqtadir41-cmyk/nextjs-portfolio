"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactClientView() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status) {
      setStatus("");
      setSuccess(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Message sent successfully! I'll be in touch soon.");
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatus("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const fieldClass =
    "contact-input w-full rounded-xl border bg-black/25 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300";

  const reveal = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="contact"
      className="contact-showcase relative isolate mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* AMBIENT LIGHTING */}
      <div
        aria-hidden="true"
        className="contact-ambient-glow contact-ambient-glow-left"
      />
      <div
        aria-hidden="true"
        className="contact-ambient-glow contact-ambient-glow-right"
      />

      {/* HEADER */}
      <motion.div
        {...reveal}
        className="relative z-10 mb-12 text-center sm:mb-14"
      >
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-emerald-400" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-300 sm:text-xs">
            Get in touch
          </span>

          <span className="h-px w-8 bg-emerald-400" />
        </div>

        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Have an idea?
          <br />
          <span className="contact-gradient-text">
            Lets build it together.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Have a project, opportunity, or idea to discuss? Send me a
          message and lets explore what we can create.
        </p>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div
        {...reveal}
        transition={{
          ...reveal.transition,
          delay: reduceMotion ? 0 : 0.1,
        }}
        className="contact-glass-panel relative z-10 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/[0.09] p-5 sm:p-8 md:p-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
        />

        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06] text-emerald-300">
            <FaPaperPlane size={15} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              Send a message
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              I will get back to you as soon as I can.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* NAME + EMAIL */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2.5 block text-xs font-medium text-zinc-300"
              >
                Your name <span className="text-emerald-400">*</span>
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                placeholder="John Doe"
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2.5 block text-xs font-medium text-zinc-300"
              >
                Email address <span className="text-emerald-400">*</span>
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mt-6">
            <div className="mb-2.5 flex items-center justify-between gap-3">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium text-zinc-300"
              >
                Your message <span className="text-emerald-400">*</span>
              </label>

              <span className="text-[10px] tabular-nums text-zinc-600">
                {formData.message.length}/2000
              </span>
            </div>

            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
              placeholder="Tell me about your idea, project, or opportunity..."
              rows={6}
              className={`${fieldClass} resize-y leading-7`}
            />
          </div>

          {/* STATUS */}
          {status && (
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 6,
              }}
              animate={{ opacity: 1, y: 0 }}
              role={success ? "status" : "alert"}
              aria-live={success ? "polite" : "assertive"}
              className={`mt-5 flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm ${
                success
                  ? "border-emerald-300/20 bg-emerald-300/[0.05] text-emerald-300"
                  : "border-red-400/20 bg-red-400/[0.05] text-red-300"
              }`}
            >
              {success && (
                <FaCheckCircle className="mt-0.5 shrink-0" />
              )}
              <p>{status}</p>
            </motion.div>
          )}

          {/* SUBMIT */}
          <div className="mt-7 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-5 text-zinc-500">
              Your details will only be used to respond to your message.
            </p>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={
                reduceMotion || loading ? undefined : { y: -2 }
              }
              whileTap={
                reduceMotion || loading ? undefined : { scale: 0.98 }
              }
              className="contact-submit-button inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/25 border-t-black" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane size={12} />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* FOOTER ACCENT */}
      <div className="relative z-10 mx-auto mt-16 flex max-w-4xl items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-300/20" />
        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          Lets connect
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-300/20" />
      </div>
    </section>
  );
}
