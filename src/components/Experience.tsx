"use client";

import { useSectionInView } from "@/lib/hooks";
import Heading from "./Heading";
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import React from "react";

export default function Experience() {
  const { ref } = useSectionInView("EXPERIENCE", 0.5);

  return (
    <section
      id="experience"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <Heading>Experience</Heading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            contentStyle={{
              background: "white",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
            >
              <h3 className="!font-semibold !capitalize">{experience.title}</h3>
              <p className="!font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
