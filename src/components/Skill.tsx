"use client";

import Heading from "./Heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// const skillsCategories = {
//   " Programming Language": [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "TypeScript",
//     "SQL",
//   ],
//   Backend: ["Node.js", "Express.js", "SQL", "PostgreSQL", "Prisma"],
//   Tools: ["Git", "GitHub", "Vercel", "Docker", "Postman", "Figma"],
// };

export default function Skill() {
  const { ref } = useSectionInView("SKILL", 0.5);

  return (
    <section id="skill" className="pt-32 sm:pt-40 w-full md:w-3/4" ref={ref}>
      {/* Content */}
      <div className="mx-auto px-8 lg:px-12 gap-8 flex flex-col">
        <Heading>Skills</Heading>

        <div className="flex flex-col gap-8">
          <h3 className="text-sm font-medium tracking-widest uppercase text-neutral-600">
            Tech Stack
          </h3>
          <div className="grid grid-cols-4 gap-10">
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
                className="text-center border border-neutral-200 rounded-sm text-lg font-light text-neutral-700 hover:border-neutral-950 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
