"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// ProjectData props type declaration
type ProjectDataProps = (typeof projectsData)[number];

// Declare ProjectData component
export default function ProjectData({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectDataProps) {
  const ref = useRef<HTMLTableSectionElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollScale,
        opacity: scrollOpacity,
      }}
      className="border border-gray-300 cursor-pointer flex flex-wrap group bg-gray-100 max-w-[42rem] overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 shadow-lg rounded-lg even:pl-8 hover:shadow-2xl"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap pt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-xl"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project Image"
className="sm:absolute sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"      />
    </motion.section>
  );
}
