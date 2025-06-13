"use client";

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, MotionValue, useSpring, useTransform, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { links as rawLinks } from "@/lib/data";


// Icons
import { RiHome6Line, RiGogglesLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { PiHandshakeLight } from 'react-icons/pi';
import { FaTools } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';

type LinkItem = {
  name: string;
  hash: string;
};

type ProcessedLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const getIconByName = (name: string, className: string = "w-6 h-6 text-neutral-600") => {
  switch (name) {
    case "Home":
      return <RiHome6Line className={className} />;
    case "About":
      return <BsPerson className={className} />;
    case "Projects":
      return <RiGogglesLine className={className} />;
    case "Skills":
      return <FaTools className={className} />;
    case "Experience":
      return <CgWorkAlt className={className} />;
    case "Contact":
      return <PiHandshakeLight className={className} />;
    default:
      return <RiHome6Line className={className} />;
  }
};


const DesktopNav = () => {
  const links: ProcessedLink[] = rawLinks.map((link: LinkItem) => ({
    name: link.name,
    href: link.hash,
    icon: getIconByName(link.name, "w-8 h-8 text-neutral-600"),
  }));

  const mouseX = useMotionValue(Infinity);

  const getRevealOrder = (index: number, total: number) => {
    const center = (total - 1) / 2;
    const distance = Math.abs(index - center);
    return Math.floor(distance);
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="hidden md:flex fixed bottom-10 mx-auto items-center gap-4 bg-[#dbd7fb]/[0.1]  w-fit px-6 py-4 justify-center rounded-2xl h-16 shadow-lg z-50 left-1/2 -translate-x-1/2 backdrop-blur-sm"
    >
      {links.map((el , index) => (
        <motion.div
          key={el.name}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: getRevealOrder(index, links.length) * 0.1,
            type: "spring",
            stiffness: 150,
            damping: 12,
            duration: 0.5,
          }}
          
        >
          <IconContainer key={el.name} mouseX={mouseX} el={el} />
        </motion.div>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  el,
}: {
  mouseX: any;
  el: ProcessedLink;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const widthIcon = useSpring(useTransform(distance, [-150, 0, 150], [25, 40, 25]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(useTransform(distance, [-150, 0, 150], [25, 40, 25]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={el.href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-white border border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs shadow-md"
            >
              {el.name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: widthIcon, height: heightIcon }} className="flex items-center justify-center">
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}


// Mobile Navigation Component
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links: ProcessedLink[] = rawLinks.map((link: LinkItem) => ({
    name: link.name,
    href: link.hash,
    icon: getIconByName(link.name),
  }));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden fixed bottom-6 right-6 z-50" ref={menuRef}>
      <motion.button
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <RiCloseLine className="w-6 h-6 text-neutral-600" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <RiMenu3Line className="w-6 h-6 text-neutral-600" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.8,
              transition: { duration: 0.2 }
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              staggerChildren: 0.05
            }}
            className="absolute bottom-16 right-0 mb-4 flex flex-col items-end space-y-2"
          >
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 300,
                  delay: index * 0.05
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="origin-right"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-end space-x-2 w-full bg-white rounded-full shadow-md px-4 py-2"
                >
                  <span className="text-neutral-600 text-sm font-medium">
                    {link.name}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    {link.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Header Component
export default function Header() {
  return (
    <motion.header
      id="main-header"
      className="h-16 fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <DesktopNav />
      <MobileMenu />
    </motion.header>
  );
}
