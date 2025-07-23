import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Project";
import Divider from "@/components/Divider";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
    </main>
  );
}
