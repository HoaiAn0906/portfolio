import { SectionHeader } from "../../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "JV-IT Tech",
    position: "Software Engineer (Frontend and Backend)",
    time: "08/2023 - Present",
    location: "Vietnam",
    description:
      "Developed and maintained web applications using React, Next.js, and Java Spring Boot. Collaborated with stakeholders and teams to deliver high-quality software.",
    tech: ["Java Spring Boot", "React", "Vue.js", "Postgres", "MySQL", "AWS", "Terraform"],
  },
  {
    title: "QASoft Solution",
    position: "Software Engineer (Frontend and Backend)",
    time: "02/2022 - 08/2023",
    location: "Vietnam",
    description:
      "Developed and maintained web applications using VueJS, PHP, Laravel.",
    tech: ["VueJS", "PHP", "Laravel", "MySQL", "AWS", "Terraform"],
  },
];
