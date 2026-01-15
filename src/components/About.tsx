"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./Heading";
import { useSectionInView } from "@/lib/hooks";
import { useRef } from "react";

export default function About() {
  const { ref: containerRef } = useSectionInView("ABOUT");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.section
      className="pt-32 sm:pt-40 w-full md:w-3/4"
      id="about"
      ref={containerRef}
    >
      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <Heading>About</Heading>

        <motion.div
          ref={ref}
          style={{ y }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-24"
        >
          {/* Left - Story */}
          <motion.div
            className="w-full "
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
              Back in 2019, I graduated with a Bachelor of Science (Hons) in
              Mathematics and pursued career opportunities in Singapore. I
              started as a management trainee at a cleaning company and later
              transitioned into the fast-paced F&B industry.
            </p>
            <br />
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
              Life brought me back to Malaysia in 2024, and I got married. Since
              then, I've been searching for the right path. It hasn't been easy,
              feeling lost and uncertain about what's next.
            </p>
            <br />
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
              Late 2024, I started chasing a dream of becoming a web developer.
              Coming from a math background and mixed work experiences, coding
              felt like an entirely new world.
            </p>
          </motion.div>

          {/* Right - Tech Stack & Stats */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Current Focus */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-600">
                Today
              </h3>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed text-justify">
                Building that dream step by step, writing code, solving
                problems, and bringing ideas to life using modern web
                technologies.
              </p>
            </div>

            {/* Tech Stack */}
            {/* <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-600">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Angular",
                  "React",
                  "Next.js",
                  "Vite",
                  "Node.js",
                  "Express.js",
                  "Prisma",
                  "Mongoose",
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Git",
                ].map((tech, i) => (
                  <motion.div
                    key={tech}
                    className="px-4 py-3 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:border-neutral-950 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div> */}

            {/* Stats */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-600">
                Journey
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-neutral-600">Years of Coding</span>
                  <span className="text-lg font-light text-neutral-950">
                    2+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Years of Experience</span>
                  <span className="text-lg font-light text-neutral-950">
                    1+
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <span className="text-neutral-600">Projects Built</span>
                  <span className="text-lg font-light text-neutral-950">
                    10+
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
