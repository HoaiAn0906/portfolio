import Link from "next/link";
import { Reveal } from "../../utils/Reveal";
import { SectionHeader } from "../../utils/SectionHeader";
import styles from "./certificate.module.scss";

export const Certificate = () => {
  return (
    <section id="certificate" className="section-wrapper mt-10">
      <SectionHeader title="Certificate" dir="l" />
      <div className={styles.certificate}>
        <div>
          <Reveal> 
                <Link href="https://www.credly.com/badges/76839235-9ee0-4d16-9c05-0b830c1721e7/public_url" target="_blank" rel="nofollow">
                    <div className="flex items-center justify-between w-full">
                        <p className={`${styles.certificateText} ${styles.linksText}`}>
                            AWS Certified Developer – Associate 02/06/2025
                        </p>
                    </div>
                </Link>
          </Reveal> 
        </div>
      </div>
    </section>
  );
};
