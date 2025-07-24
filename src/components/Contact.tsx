"use client";

import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import Button from "./Button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("CONTACT");

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
      <Heading>Contact me</Heading>

      <p className="text-gray-700 -mt-6 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mrullldhm94@gmail.com">
          mrullldhm94@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 p-4 rounded-lg border transition-all"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button />
      </form>
    </motion.section>
  );
}
