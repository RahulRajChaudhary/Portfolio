"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { Scroller } from '@/components/Scroller'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function Intro() {
  const { scrollToSection } = useSmoothScroll();
  
  return (
    <section 
      id="home" 
      className ="mt-6 scroll-mt-16 flex flex-col justify-between min-h-screen max-w-[50rem] text-center mx-auto"
    >
      {/* Main content container */}
      <div className="flex flex-col items-center w-full mt-8 sm:mt-0">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10">
          <Image
            width={96}
            height={96}
            priority={true}
            className='rounded-full h-24 w-24 object-cover border-[0.30rem] border-white shadow-2xl'
            src="https://images5.alphacoders.com/941/941369.png"
            alt="Rahul profile picture"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1, stiffness: 125 }}
            className='text-4xl absolute bottom-0 right-0 '>👋</motion.span>
        </motion.div>

        {/* Name and title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-center z-10 !leading-[1.5] px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hi, I'm <span className="text-black">Rahul Raj</span>
          </h1>
          <h1 className="mt-2 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            A passionate  <span className="relative">
              full-stack developer
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-2 -right-2 bottom-0 translate-y-1 hidden md:block"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FACC15"
                  strokeWidth="3"
                />
              </svg>
            </span>{" "} crafting beautiful and scalable web
            experiences. I love building things that live on the internet.
          </h1>
        </motion.div>

        {/* Location and skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-center z-10 px-4">
          <p className="text-gray-600 text-lg">
            Based in <span className="text-gray-900">India</span>, I specialize in
            <span className="text-black font-medium"> React, Next.js, TypeScript, Tailwind CSS</span> and more.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 z-10 px-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="group bg-gray-900 text-white px-4 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            Contact Me
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </a>

          <a
            href="/Rahul_Raj_CV.pdf"
            download
            className="group bg-white text-gray-900 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 shadow-lg"
          >
            Download CV
            <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
          </a>

          <div className='flex flex-row gap-2'>
            <a className="group bg-white text-gray-900 px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 shadow-lg">
              <BsLinkedin className="opacity-70 group-hover:translate-y-0.5 transition" />
            </a>

            <a className="group bg-white text-gray-900 px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 shadow-lg">
              <BsGithub className="opacity-70 group-hover:translate-y-0.5 transition" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroller at bottom */}
      <div className="w-full flex justify-center pb-8 sm:pb-32 ">
        <Scroller />
      </div>
    </section>
  )
}