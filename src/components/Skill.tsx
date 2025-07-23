"use client";

import { skillsData } from "@/lib/data";
import Heading from "./Heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }},
};

export default function Skill() {
  const { ref } = useSectionInView("SKILL", 0.5);

  return (
    <section
      id="skill"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <Heading>Skill</Heading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={FadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
