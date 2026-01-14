"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
    <nav className="flex items-center justify-around h-14">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-sm font-semibold tracking-widest text-neutral-950"
      >
        AA
      </motion.div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              className={clsx(
                "relative text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                activeSection === link.name
                  ? "text-neutral-950"
                  : "text-neutral-500 hover:text-neutral-950"
              )}
            >
              {link.name}
              <span
                className={clsx(
                  "absolute left-0 -bottom-1 h-[2px] bg-neutral-950 transition-all duration-300",
                  activeSection === link.name ? "w-full" : "w-0"
                )}
              />
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 text-neutral-950"
        aria-label="Open menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </motion.button>

    </nav>
  </div>
</header>
  );
}
