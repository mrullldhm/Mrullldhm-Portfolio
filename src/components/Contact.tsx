"use client";

import { useSectionInView } from "@/lib/hooks";
import Heading from "./Heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("CONTACT", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Heading>Contact Me</Heading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mrullldhm94@gmail.com">
          mrullldhm94@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 p-4 rounded-lg border border-black/10"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          name="message"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none hover:shadow-xl active:scale-105 hover:bg-gray-950 transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
