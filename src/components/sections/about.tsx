"use client";

import { motion } from "framer-motion";
import { GlobeAltIcon, BriefcaseIcon, AcademicCapIcon, LanguageIcon } from "@heroicons/react/24/outline";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold font-heading mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A versatile professional with expertise in Full-Stack Development, IT Management, and Real Estate,
              combining technical skills with business acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <BriefcaseIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Professional Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• IT Manager at Cybersun</li>
                <li>• Advisor at Croatian Parliament</li>
                <li>• Real Estate Manager (Self-Employed)</li>
                <li>• Web Developer Intern at EuroArt93</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <AcademicCapIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bachelor's in Information Technology - RIT Croatia</li>
                <li>• Mechanical Drafting and CAD/CADD - Tehnička Škola Sisak</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <GlobeAltIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Core Competencies</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-Stack Development (React, Node.js, Python)</li>
                <li>• IT Infrastructure Management</li>
                <li>• Project Management</li>
                <li>• Digital Marketing & Social Media</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card rounded-lg shadow-lg"
            >
              <LanguageIcon className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Croatian (Native)</li>
                <li>• English (Native)</li>
                <li>• Serbian (Native)</li>
                <li>• German, Italian, Spanish, Turkish (Limited Working)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 