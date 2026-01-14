"use client";

import { useSectionInView } from "@/lib/hooks";
import Heading from "./Heading";
import { experiencesData } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE", 0.5);

  return (
    <section
      id="experience"
      className="pt-32 sm:pt-40 w-full md:w-3/4"
      ref={ref}
    >
      {/* Content */}
      <div className="mx-auto px-8 lg:px-12 gap-8 flex flex-col">
        <Heading>Experience</Heading>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-neutral-300"></div>

          {/* Experience Items */}
          <div className="space-y-10">
            {experiencesData.map((experience, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-white border border-neutral-200 rounded-lg p-8 hover:border-neutral-950 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl mt-1 flex-shrink-0">
                        {experience.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-950">
                          {experience.title}
                        </h3>
                        <p className="text-sm text-neutral-600 font-medium">
                          {experience.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    <span className="inline-block bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700">
                      {experience.date}
                    </span>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex md:flex-1 items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-neutral-950 rounded-full border-4 border-white shadow-md"
                    whileInView={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
