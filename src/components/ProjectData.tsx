"use client";

import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectDataProps = (typeof projectsData)[number];

export default function ProjectData({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectDataProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group h-full"
    >
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-4 h-full bg-white border border-neutral-200 rounded-sm  hover:border-neutral-950 transition-all duration-300 shadow-2xl hover:shadow-md"
        whileHover={{ y: -4 }}
      >
        {/* Image Container */}
        <div className=" w-4/5 h-40 overflow-hidden bg-neutral-100">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </motion.div>

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8 flex flex-col gap-2">
          {/* Title */}
          <h3 className="font-light text-neutral-950">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.slice(0, 99).map((tag, index) => (
              <motion.span
                key={index}
                className="bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-lg text-xs font-medium text-neutral-700 hover:border-neutral-950 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
