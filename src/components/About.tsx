"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <Heading>About Me</Heading>
      <p>
        Back in 2019, I graduated with a Bachelor of Science (Hons) in
        Mathematics and pursued career opportunities in Singapore. I started as
        a management trainee at a cleaning company and later transitioned into
        the fast-paced F&B industry.
      </p>
      <br />
      <p>
        Life brought me back to Malaysia in 2024, and I got married. Since then,
        I’ve been searching for the right path. It hasn’t been easy, feeling
        lost and a little uncertain about what’s next.
      </p>
      <br />
      <p>
        In August 2024, I started chasing a dream of becoming a web developer.
        Coming from a math background and a mixed work experiences, coding felt
        like an entirely new world.
      </p>
      <br />
      <p>
        Today, I’m building that dream step by step writing code, solving
        problems, and bringing ideas to life using <strong>Next.js</strong>,{" "}
        <strong>React</strong>, <strong>TypeScript</strong>,{" "}
        <strong>PostgreSQL</strong>, and <strong>Prisma</strong>.
      </p>
    </motion.section>
  );
}
