"use client";

import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function HeroSection() {
  const words = [
    {
      text: "Full-Stack",
    },
    {
      text: "Developer",
    },
    {
      text: "&",
    },
    {
      text: "UI/UX",
    },
    {
      text: "Designer",
      className: "text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold">
          Hi, I&apos;m Adonis Borneo
        </h1>
        <div className="text-2xl md:text-3xl font-heading">
          <TypewriterEffect words={words} />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          A passionate developer specializing in creating modern web applications and beautiful user experiences.
          I transform ideas into elegant, functional solutions.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90"
          >
            Get in Touch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90"
          >
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
} 