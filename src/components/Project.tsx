"use client";

import Heading from "./Heading";
import { projectsData } from "@/lib/data";
import ProjectData from "./ProjectData";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Project() {
  const { ref } = useSectionInView("PROJECT", 0.5);

  return (
    <section id="project" className="pt-32 sm:pt-40 w-full md:w-4/5" ref={ref}>
      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-12 gap-8 flex flex-col">
        <Heading>Projects</Heading>
        {/* <p className="text-base md:text-lg text-neutral-600 mb-16  text-justify">
          A selection of recent work
        </p> */}

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectData {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
