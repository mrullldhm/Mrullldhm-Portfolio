"use client";

import Image from "next/image";
import profile from "@/assets/profile.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrow90DegRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("HOME", 0.5);
  return (
    <section
      className="sm:mb-10 mb-28 max-w-[50rem] text-center scroll-mt-50"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={profile}
            alt="Profile picture"
            width={192}
            height={192}
            priority={true}
            className="h-80 w-50 rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-4xl !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-lg tracking-widest">AMIRUL ADHAM</span> <br />
        <span className="font-black">FULL-STACK WEB DEVELOPER</span> <br />
        <span className="font-black">REACT | NEXT.JS</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-2.5 flex items-center gap-2 rounded-full hover:shadow-xl active:scale-105 transition"
        >
          Contact me
          <BsArrow90DegRight className="opacity-80" />
        </Link>

        <a
          className="bg-white px-7 py-2.5 flex items-center gap-2 rounded-full hover:shadow-xl active:scale-105 transition cursor-pointer"
          href="/Muhamad_Amirul_Adham_Resume_2025.pdf"
          download
        >
          Resume <HiDownload className="opacity-80" />
        </a>

        <a
          className="p-4 flex items-center gap-2 rounded-full"
          href="https://www.linkedin.com/in/mrullldhm/"
        >
          <BsLinkedin className="text-3xl hover:opacity-70" />
        </a>

        <a
          className="flex items-center gap-2 rounded-full"
          href="https://github.com/mrullldhm"
        >
          <FaGithub className="text-3xl hover:opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
