"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/section-heading'

export default function About() {
  return (
    <motion.section
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-28 py-6 px-4"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>


      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electrical Engineering</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB, SQL (Prisma)
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. For upskilling, I{" "}
        <span className="font-medium">learning new things in tech industry</span>. I&apos;m currently
        learning about{" "}
        <span className="font-medium">Machine Learning , Docker and AWS</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}