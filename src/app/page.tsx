// import About from "@/components/about";
// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
import Intro from "@/components/Intro";
// import Projects from "@/components/projects";
import Divider from "@/components/Divider";
// import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      {/* <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </main>
  );
}
