"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'


const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className='mb-24 max-w-[53rem] scroll-mt-16 md:scroll-mt-20 text-center mx-auto px-4 py-8 sm:mb-28'
      id="skills">

      <SectionHeading>Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li key={index}
              variants={fadeInAnimationVariants}
              className='border border-black/[0.1] px-4 py-2 rounded-xl'
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}>
              {skill}

            </motion.li>
          ))
        }
      </ul>
    </motion.section>
  )
}