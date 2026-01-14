"use client";

import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-6 bg-white w-12 h-12 bg-opacity-90 backdrop-blur-md border border-neutral-200 shadow-lg rounded-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-neutral-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
    </button>
  );
}
