"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  videoUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      className="relative w-full sm:w-[300px] md:w-[330px] h-[400px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Media Container */}
          <div className="relative w-full h-[60%] overflow-hidden">
            {/* Image Background - FIXED VISIBILITY */}
            {project.imageUrl && (
              <motion.img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                style={{ zIndex: 10 }} // Ensure image stays on top
              />
            )}

            {/* Video Overlay */}
            <AnimatedVideoPreview
              videoUrl={project.videoUrl}
              isHovered={isHovered && !isFlipped}
            />
          </div>

          {/* FIXED: Gradient overlay with proper z-index */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-20">
            <motion.h3
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>

            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="bg-black/30 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <motion.div
              className="mt-4 text-white/80 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>Click to see details</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex-1">
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-between items-center mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="text-gray-400 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>Click to return</span>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ←
              </motion.div>
            </motion.div>
            
            <div className="flex gap-4">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function AnimatedVideoPreview({ videoUrl, isHovered }: { videoUrl?: string; isHovered: boolean }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-t from-black/20 to-transparent">
      {videoUrl && (
        <motion.video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ zIndex: 5 }} // Lower z-index than image
        />
      )}
    </div>
  );
}