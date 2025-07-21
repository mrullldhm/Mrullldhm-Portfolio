import Heading from "./Heading";
import { projectsData } from "@/lib/data";
import ProjectData from "./ProjectData";
import React from "react";

export default function Project() {
  return (
    <section id="project" className="scroll-mt-28">
      <Heading>Project</Heading>
      <div>
        {projectsData.map((project, index) => (
          // React.Fragment used for multiple elements
          <React.Fragment key={index}>
            {/* Callback and pass the state data (projectsData) to the ProjectData component */}
            <ProjectData {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

