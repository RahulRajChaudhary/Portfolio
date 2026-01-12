"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { Scroller } from "@/components/Scroller";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Intro() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section
      id="home"
      className="mt-6 scroll-mt-16 flex flex-col justify-between min-h-screen max-w-[50rem] text-center mx-auto"
    >
      <div className="flex flex-col items-center w-full mt-8 sm:mt-0">

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Image
            width={96}
            height={96}
            priority
            className="rounded-full h-24 w-24 object-cover border-[0.30rem] border-white shadow-2xl"
            src="https://images5.alphacoders.com/941/941369.png"
            alt="Rahul profile picture"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1, stiffness: 125 }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </motion.div>

        {/* Name & title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-center z-10 !leading-[1.5] px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hi, I&apos;m <span className="text-black">Rahul Raj</span>
          </h1>

          <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            I’m an early-career software developer focused on building{" "}
            <span className="relative inline-block font-medium text-gray-900">
              practical products
              {/* Decorative underline (safe) */}
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="pointer-events-none absolute -left-2 -right-2 bottom-0 translate-y-1 hidden md:block"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "}
            and learning how real systems behave beyond tutorials. I enjoy turning ideas into usable
            features, thinking from a user’s point of view, and understanding the trade-offs behind
            technical and product decisions.
          </p>
        </motion.div>


        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-center z-10 px-4"
        >
          <p className="text-gray-600 text-lg">
            Based in <span className="text-gray-900">India</span>, specializing in{" "}
            <span className="text-black font-medium">
              Javascript, React, Next.js, TypeScript, Tailwind CSS, Node.js,
              MongoDB , PostgresSQL , Redis .....
            </span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 px-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="group bg-gray-900 text-white px-4 py-3 flex items-center gap-2 rounded-full transition hover:scale-110"
          >
            Contact Me
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>

          <a
            href="/Rahul_Raj_Chaudhary_Resume.pdf"
            download
            className="group bg-white text-gray-900 px-4 py-3 flex items-center gap-2 rounded-full border border-black/10 shadow-lg transition hover:scale-110"
          >
            Download CV
            <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
          </a>

          <div className="flex gap-2">
            <a
              onClick={() =>
                window.open("https://www.linkedin.com/in/rahulraj01/", "_blank")
              }
              className="cursor-pointer pointer-events-auto group bg-white px-4 py-3 rounded-full border border-black/10 shadow-lg transition hover:scale-110"
            >
              <BsLinkedin />
            </a>

            <a
              href="https://github.com/RahulRajChaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white px-4 py-3 rounded-full border border-black/10 shadow-lg transition hover:scale-110"
            >
              <BsGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroller */}
      <div className="w-full flex justify-center pb-8 sm:pb-32">
        <Scroller />
      </div>
    </section>
  );
}
