import { MyLinks } from "../../nav/components/MyLinks";
import { Reveal } from "../../utils/Reveal";
import { SectionHeader } from "../../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi! I&apos;m Phan Hoài An, a software engineer.
              <br />
              <br />
              Fullstack developer, proficient in build responsive web app using
              HTML, CSS, JavaScript (ES6), Typescript, Vue.js, React.js and
              utilize Java Spring Boot, PHP Laravel to create RESTful API
              or GraphQL backend.
            </p> 
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Cloud services experience AWS. Manage and deploy serverless
              applications using AWS Lambda, API Gateway, S3, CloudFront,
              CloudWatch, CloudFormation, and more. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Testing and monitoring web app using Jest, React Testing Library,
              Cypress, Datadog, Sentry.
            </p>
          </Reveal>
          <Reveal>
            <strong className={styles.aboutText}>
              I can wear many hats in a startup environment, or work
              collaboratively with stakeholders in a corporate setting.
            </strong>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
