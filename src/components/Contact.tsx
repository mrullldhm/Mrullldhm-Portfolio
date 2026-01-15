"use client";

import React, { useState } from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("CONTACT");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section id="contact" ref={ref} className="pt-32 sm:pt-40 w-full md:w-3/4">
      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12 gap-8 flex flex-col">
        <Heading>Contact</Heading>

        <div className="flex flex-col gap-8">
          {/* Contact Info */}
          <motion.div
            className="flex gap-40"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center bg-white border w-1/2 border-neutral-200 rounded-sm p-8 hover:border-neutral-950 transition-colors">
              <h3 className="text-base font-semibold text-neutral-950 mb-2 tracking-widest uppercase">
                Email
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                The quickest way to reach me
              </p>
              <a
                href="mailto:mrullldhm94@gmail.com"
                className="text-neutral-950 hover:text-neutral-600 font-medium text-base transition-colors"
              >
                mrullldhm94@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center justify-center bg-white border w-1/2 border-neutral-200 rounded-sm p-8 hover:border-neutral-950 transition-colors">
              <h3 className="text-base font-semibold text-neutral-950 mb-2 tracking-widest uppercase">
                Connect
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                Follow me on social media
              </p>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/mrullldhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mrullldhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="flex flex-col gap-4 "
            action={async (formData) => {
              setIsLoading(true);
              const { error } = await sendEmail(formData);
              setIsLoading(false);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.input
              className="w-full bg-white border border-neutral-200 rounded-lg px-6 py-3 text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-neutral-950 transition-colors"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              whileFocus={{ scale: 1.01 }}
            />
            <motion.textarea
              className="w-full h-32 bg-white border border-neutral-200 rounded-lg px-6 py-3 text-neutral-950 placeholder-neutral-500 focus:outline-none focus:border-neutral-950 transition-colors resize-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
              whileFocus={{ scale: 1.01 }}
            />
            <motion.button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
