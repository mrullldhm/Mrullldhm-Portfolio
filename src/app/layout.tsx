import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

// Premium typography
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirul Adham | Full-Stack Developer & Designer",
  description:
    "Premium portfolio showcasing full-stack development expertise with minimalist design philosophy.",
  keywords: [
    "developer",
    "portfolio",
    "next.js",
    "react",
    "full-stack",
    "web development",
    "design",
  ],
  authors: [{ name: "Amirul Adham" }],
  openGraph: {
    title: "Amirul Adham | Full-Stack Developer",
    description:
      "Luxury minimalist portfolio. Crafting digital experiences with technical precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} bg-white text-neutral-950`}
        style={{
          fontFamily: "var(--font-space-grotesk)",
        }}
      >
        {/* Main Content */}
        <div className="">
          <ActiveSectionContextProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: "var(--bg-primary)",
                  color: "var(--text-primary)",
                  border: `1px solid var(--border-color)`,
                  borderRadius: "0",
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
