"use client";

import Card from "./Card";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <section id="projects" className="scroll-mt-10 md:scroll-mt-10 mb-28">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <SectionHeading>Projects</SectionHeading>
        <p className="mt-2 text-lg text-neutral-600 max-w-2xl mx-auto">
          Here are a few projects I've worked on recently. Each showcases my skills in creating 
          performant, responsive web applications with modern technologies.
        </p>
      </motion.div>
      <Card />
    </section>
  );
}