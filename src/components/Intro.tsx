"use client";

import Image from "next/image";
import profile from "@/assets/profile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrow90DegRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useRef } from "react";

export default function Intro() {
  const { ref: containerRef } = useSectionInView("HOME", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      className="pt-32 sm:pt-40 w-full md:w-2/3"
      id="home"
      ref={containerRef}
    >
      {/* Content container */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={ref}
          style={{ y, opacity }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 "
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col gap-8 md:flex-1 "
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtitle */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-px w-8 bg-neutral-950" />
              <span className="text-xs font-medium tracking-widest uppercase text-neutral-600">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-neutral-950 ">
                Amirul
                <br />
                Adham
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-neutral-600 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I like to understand things deeply. Focusing on one thing well
              helps me see how many things connect. I build web apps the same
              way, thoughtfully and carefully.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button className="btn w-46">
                Let's Connect
                <BsArrow90DegRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                className="btn w-46"
                href="/Muhamad_Amirul_Adham_Resume_2025.pdf"
                download
              >
                Resume
                <HiDownload className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6 pt-6 border-t border-neutral-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <BsLinkedin className="cursor-pointer w-7 h-7 " />
              <FaGithub className="cursor-pointer w-7 h-7 " />
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full md:w-1/3 h-96 md:h-[420px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-neutral-200 rounded-lg overflow-hidden">
              <Image
                src={profile}
                alt="Amirul Adham"
                fill
                priority
                className="object-cover"
              />
            </div>

            <motion.div
              className="absolute inset-0 border-2 border-neutral-950 rounded-lg pointer-events-none"
              animate={{ boxShadow: "24px 24px 0 rgba(0,0,0,0.1)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
