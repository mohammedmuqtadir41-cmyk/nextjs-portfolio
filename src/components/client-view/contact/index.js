"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animation-wrapper";

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
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("Contact Form Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 xl:px-6 py-20"
    >
      <AnimationWrapper>
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          {/* Heading */}

          <h2 className="text-4xl lg:text-5xl text-center font-medium mb-12">
            Contact{" "}
            <span className="text-green-600">
              Me
            </span>
          </h2>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto"
          >
            {/* Name */}

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                placeholder="Enter your name"
                className="
                  w-full
                  border-2
                  border-green-500
                  rounded-md
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-green-200
                "
              />
            </div>

            {/* Email */}

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
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
                placeholder="Enter your email"
                className="
                  w-full
                  border-2
                  border-green-500
                  rounded-md
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-green-200
                "
              />
            </div>

            {/* Message */}

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows={6}
                className="
                  w-full
                  border-2
                  border-green-500
                  rounded-md
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:ring-2
                  focus:ring-green-200
                "
              />
            </div>

            {/* Status */}

            {status && (
              <p className="mb-5 text-green-600 font-medium">
                {status}
              </p>
            )}

            {/* Submit Button */}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.03,
              }}
              whileTap={{
                scale: loading ? 1 : 0.97,
              }}
              className="
                bg-green-500
                hover:bg-green-600
                disabled:bg-green-300
                text-white
                font-semibold
                px-12
                py-4
                rounded-md
                transition-colors
                duration-300
                cursor-pointer
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </AnimationWrapper>
    </section>
  );
}