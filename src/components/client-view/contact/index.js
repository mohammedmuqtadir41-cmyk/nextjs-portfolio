"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactClientView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact Form Error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12"
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
        className="mb-12 text-center"
      >
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#0DB760]" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#19D879]">
            Get In Touch
          </span>

          <span className="h-px w-8 bg-[#0DB760]" />
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Let's build something{" "}
          <span className="text-[#0DB760]">
            together.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
          Have a project, opportunity, or idea you'd like to
          discuss? Send me a message and I'll get back to you.
        </p>
      </motion.div>

      {/* FORM */}
      <motion.div
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
          duration: 0.6,
          delay: 0.1,
        }}
        className="
          mx-auto
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.2)]
          sm:p-8
          md:p-10
        "
      >
        <form onSubmit={handleSubmit}>

          {/* NAME + EMAIL */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium text-zinc-400"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder:text-zinc-700
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#0DB760]/50
                  focus:bg-[#0DB760]/[0.03]
                  focus:ring-2
                  focus:ring-[#0DB760]/10
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium text-zinc-400"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-black/30
                  px-4
                  py-3
                  text-sm
                  text-white
                  placeholder:text-zinc-700
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#0DB760]/50
                  focus:bg-[#0DB760]/[0.03]
                  focus:ring-2
                  focus:ring-[#0DB760]/10
                "
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium text-zinc-400"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me a little about your project..."
              rows={7}
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-black/30
                px-4
                py-3
                text-sm
                leading-6
                text-white
                placeholder:text-zinc-700
                outline-none
                transition-all
                duration-300
                focus:border-[#0DB760]/50
                focus:bg-[#0DB760]/[0.03]
                focus:ring-2
                focus:ring-[#0DB760]/10
              "
            />
          </div>

          {/* STATUS */}
          {status && (
            <motion.p
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={`
                mt-5
                rounded-xl
                border
                px-4
                py-3
                text-sm
                ${
                  status.includes("successfully")
                    ? "border-[#0DB760]/20 bg-[#0DB760]/5 text-[#19D879]"
                    : "border-red-500/20 bg-red-500/5 text-red-400"
                }
              `}
            >
              {status}
            </motion.p>
          )}

          {/* SUBMIT */}
          <div className="mt-6 flex justify-end">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.02,
              }}
              whileTap={{
                scale: loading ? 1 : 0.98,
              }}
              className="
                rounded-full
                bg-[#0DB760]
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-[#19D879]
                hover:shadow-[0_0_30px_rgba(13,183,96,0.2)]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* BOTTOM ACCENT */}
      <div className="mx-auto mt-16 h-px max-w-4xl bg-gradient-to-r from-transparent via-[#0DB760]/30 to-transparent" />
    </section>
  );
}