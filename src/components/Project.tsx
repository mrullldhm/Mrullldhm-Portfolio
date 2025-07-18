import React from "react";
import Heading from "./Heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Project() {
  return (
    <section className="mb-28 max-w-[45rem] text-center sm:mb-40">
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

// ProjectData props type declaration
type ProjectDataProps = (typeof projectsData)[number];

// Declare ProjectData component
function ProjectData({ title, description, tags, imageUrl }: ProjectDataProps) {
  return (
    <section className="flex flex-wrap group bg-gray-100 max-w-[42rem] overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 shadow-lg rounded-lg even:pl-8">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-1/2 flex flex-col h-full group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap pt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-800 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-xl"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project Image"
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
