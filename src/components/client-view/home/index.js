"use client";

import AnimationWrapper from "../animation-wrapper";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {FaFacebook, FaLinkedin, FaInstagram, FaTwitter} from "react-icons/fa";

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

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebook color="rgba(13,183,96,1)"
      className="w-10 h-10"/>
    )
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedin color="rgba(13,183,96,1)"
      className="w-10 h-10"/>
    )
  },
  {
    id: "instagram",
    icon: (
      <FaInstagram color="rgba(13,183,96,1)"
      className="w-10 h-10"/>
    )
  },
  {
    id: "twitter",
    icon: (
      <FaTwitter color="rgba(13,183,96,1)"
      className="w-10 h-10"/>
    )
  },
]


export default function HomeClientView({ data }) {
  console.log(data, "Client Home View");

  const setVariants = useMemo(() => variants(), []);

  return (
    <div className="max-w-7xl mt-24 px-8 xl:px-6 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col
        grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-10
        sm:py-20"
          variants={setVariants}
        >
          <div
            className="flex flex-col justify-center items-start
          row-start-2 sm:row-start-1"
          >
            <h1
              className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold 
            leading-snug"
            >
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-600"
                          : "text-gray-800"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>

            <p className="text-gray-700 mt-4 mb-8 text-lg leading-relaxed">
                  {data && data.length?data[0]?.summary : null}
            </p>

                  <motion.div className="flex gap-4">
                  {socialIcons.map((item) => (
                    <motion.div key={item.id}
                    initial={{ scale: 0 }}
                    animate= {{rotate:360 , scale: 1}}
                    transition={{
                      type:"spring",
                      damping:100,
                      stiffness:100,
                      duration:1.5
                    }}
                    whileHover={{scale:1.1 , rotate: 360}}
                    whileTap={{ scale:0.9 , rotate: -360, borderRadius: "100%"}}
                    className="cursor-pointer p-2 bg-white rounded-full shadow-lg"
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                  </motion.div>
            
          </div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
