import { Reveal } from "../../utils/Reveal";
import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java Spring Boot</span>
            <span className="chip">PHP</span>
            <span className="chip">Laravel</span> 
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Vuejs</span>
            <span className="chip">Redux</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Firebase</span>
            <span className="chip">GitHub</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
