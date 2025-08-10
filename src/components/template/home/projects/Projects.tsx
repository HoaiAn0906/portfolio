"use client";
import { SectionHeader } from "../../utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "[Solo] MSS - E-commerce Shop, a sample microservices project in Java",
    imgSrc:
      "https://github.com/HoaiAn0906/MSS/blob/main/images/screencapture-1.png?raw=true",
    code: "https://github.com/HoaiAn0906/MSS",
    projectLink: "https://mss.hoaian0906.com/",
    tech: ["Java Spring Boot", "React", "Microservices", "Keycloak", "MySQL", "Docker"],
    description: "E-commerce Shop, a sample microservices project in Java",
    modalContent: (
      <>
        <p>E-commerce Shop, a sample microservices project in Java</p>

        <img src="https://github.com/HoaiAn0906/MSS/blob/main/images/MSS.drawio.png?raw=true" />

        <img src="https://github.com/HoaiAn0906/MSS/blob/main/images/screencapture-2.png?raw=true" />

        <img src="https://github.com/HoaiAn0906/MSS/blob/main/images/screencapture-3.png?raw=true" />

        <img src="https://github.com/HoaiAn0906/MSS/blob/main/images/screencapture-4.png?raw=true" />
      </>
    ),
  },
  {
    title: "[Duo] Credit Wallet: Credit card for a group of friends",
    imgSrc: "/project-imgs/credit_wallet.png",
    code: "https://github.com/Credit-Wallet/back-end",
    projectLink: "https://github.com/Credit-Wallet/back-end",
    tech: ["Java 21", "Spring boot 3.3", "Vue.js", "MySQL", "RabbitMQ", "Terraform", "AWS"],
    description:
      "Credit Wallet: Credit card for a group of friends", 
    modalContent: (
      <>
        <img src="/project-imgs/credit_wallet_1.png" />
        <img src="/project-imgs/credit_wallet_2.png" />
        <img src="/project-imgs/credit_wallet_3.png" />
        <img src="/project-imgs/credit_wallet_4.png" />
        <img src="/project-imgs/credit_wallet_5.png" />
      </>
    ),
  },
  {
    title: "[Freelancer: Duo] Managing the English Center Education",
    imgSrc: "/project-imgs/yose_home.png",
    code: "",
    projectLink: "",
    tech: ["Python", "FastAPI", "MySQL", "Serverless", "Lambda", "AWS", "Terraform", "ReactJS"],
    description:
      "Managing the English Center Education",
    modalContent: (
      <>
        <p>AWS Services: Lambda, API Gateway, S3, CloudFront, VPC, EC2</p>
        <img src="/project-imgs/yose_home_1.png" />
        <img src="/project-imgs/yose_home_2.png" />
      </>
    ),
  }
];
