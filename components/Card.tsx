"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaDatabase, FaCloud, FaCogs, FaArrowRight } from "react-icons/fa";
import { projects, Project } from "../lib/data";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 px-4 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show only first 4 tags on front, show "+X more" if more
  const frontTags = useMemo(() => {
    const maxTags = 4;
    if (project.tags.length <= maxTags) {
      return { tags: project.tags, extraCount: 0 };
    }
    return {
      tags: project.tags.slice(0, maxTags),
      extraCount: project.tags.length - maxTags
    };
  }, [project.tags]);

  // Use the categorized techStack from data.ts if available, otherwise categorize tags
  const categorizedTags = useMemo(() => {
    // If techStack is provided in data, use it
    if (project.techStack) {
      return project.techStack;
    }

    // Otherwise, categorize based on tags (fallback)
    const categories: { [key: string]: string[] } = {
      frontend: [],
      backend: [],
      database: [],
      services: [],
      deployment: []
    };

    project.tags.forEach(tag => {
      const lowerTag = tag.toLowerCase();
      
      if (lowerTag.includes('next') || lowerTag.includes('react') || 
          lowerTag.includes('vue') || lowerTag.includes('angular') ||
          lowerTag.includes('tailwind') || lowerTag.includes('css') ||
          lowerTag.includes('html') || lowerTag.includes('javascript') ||
          lowerTag.includes('typescript')) {
        categories.frontend.push(tag);
      } else if (lowerTag.includes('node') || lowerTag.includes('express') || 
                 lowerTag.includes('nest') || lowerTag.includes('socket') ||
                 lowerTag.includes('server')) {
        categories.backend.push(tag);
      } else if (lowerTag.includes('mongo') || lowerTag.includes('prisma') ||
                 lowerTag.includes('postgres') || lowerTag.includes('redis') ||
                 lowerTag.includes('mysql') || lowerTag.includes('database')) {
        categories.database.push(tag);
      } else if (lowerTag.includes('aws') || lowerTag.includes('vercel') ||
                 lowerTag.includes('docker') || lowerTag.includes('render') ||
                 lowerTag.includes('ec2')) {
        categories.deployment.push(tag);
      } else if (lowerTag.includes('ai') || lowerTag.includes('gemini') ||
                 lowerTag.includes('stripe') || lowerTag.includes('razorpay') ||
                 lowerTag.includes('firebase') || lowerTag.includes('auth') ||
                 lowerTag.includes('jwt')) {
        categories.services.push(tag);
      }
    });

    // Remove empty categories
    Object.keys(categories).forEach(key => {
      if (categories[key].length === 0) {
        delete categories[key];
      }
    });

    return categories;
  }, [project]);

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'frontend': return <FaCode className="w-4 h-4" />;
      case 'backend': return <FaServer className="w-4 h-4" />;
      case 'database': return <FaDatabase className="w-4 h-4" />;
      case 'services': return <FaCogs className="w-4 h-4" />;
      case 'deployment': return <FaCloud className="w-4 h-4" />;
      default: return <FaCogs className="w-4 h-4" />;
    }
  };

  // Get category title
  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'frontend': return 'Frontend';
      case 'backend': return 'Backend';
      case 'database': return 'Database';
      case 'services': return 'Services';
      case 'deployment': return 'Deployment';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      className="relative w-full sm:w-[320px] md:w-[350px] h-[420px] cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card Container with 3D effect */}
      <motion.div
        className="w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - NO SCROLLING */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Media Section */}
          <div className="relative w-full h-[50%] bg-gray-900 overflow-hidden">
            {/* Image with gradient overlay */}
            {project.imageUrl && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: isHovered && project.videoUrl ? 0.3 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            )}
            
            {/* Video Preview */}
            {project.videoUrl && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            )}
            
            {/* Action Buttons Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black/80 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black transition-all"
                  title="View on GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-all"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </motion.a>
              )}
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 z-10">
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>
            </div>
          </div>

          {/* Content Section - NO SCROLLING */}
          <div className="p-6 h-[50%] flex flex-col">
            {/* Tags - Limited to 4 + show more */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {frontTags.tags.map((tag: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
                {frontTags.extraCount > 0 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + frontTags.tags.length * 0.05 }}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200"
                  >
                    +{frontTags.extraCount} more
                  </motion.span>
                )}
              </div>
            </div>

            {/* Description Preview - Fixed height with line clamp */}
            <motion.p
              className="text-gray-600 text-sm line-clamp-3 flex-1 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            {/* Flip Hint */}
            <motion.div
              className="flex items-center gap-2 text-blue-600 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <span>Click for details</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FaArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Back Side - WITH SCROLLING */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Scrollable container for back content */}
          <div className="h-full flex flex-col">
            {/* Header - Fixed */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Click card to return
              </motion.p>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 pt-4">
              {/* Full Description */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Description</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Categorized Tech Stack */}
              {Object.keys(categorizedTags).length > 0 && (
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-sm font-semibold text-gray-700 mb-4">Tech Stack</h4>
                  <div className="space-y-5">
                    {Object.entries(categorizedTags).map(([category, techs]: [string,readonly string[]]) => (
                      <div key={category} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100">
                            {getCategoryIcon(category)}
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            {getCategoryTitle(category)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-11">
                          {techs.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium border border-blue-100 hover:border-blue-200 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons - Fixed at bottom */}
            <div className="p-6 border-t border-gray-200 flex-shrink-0">
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-800 text-white py-2.5 rounded-lg text-sm font-medium text-center hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </motion.a>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
}