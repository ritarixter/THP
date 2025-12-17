import type { Route } from "./+types/HomePage";
import styles from "./HomePage.module.scss";
import img1 from "../../images/home/intro/intro-1.png";
import img2 from "../../images/home/intro/intro-2.png";
import img3 from "../../images/home/intro/intro-3.png";
import img4 from "../../images/home/intro/intro-4.png";
import learnMore from "../../images/icons/learn-more.svg";
import { useState } from "react";
import Services from "~/components/Service/Service";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "THP" }];
}

export default function HomePage() {
  const [openAboutUs, setOpenAboutUs] = useState(false);
  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <div className={styles.section__number}>01</div>
        <div className={styles.section__content}>
          <div className={styles.intro}>
            <h1 className={styles.intro__title}>
              THP Steuerkontor: Shape Your Expertise. Secure Your Future.
            </h1>
            <div className={styles.intro__imgs}>
              <div></div>
              <img src={img1} alt="thp steuerkontor intro 1" />
              <img src={img2} alt="thp steuerkontor intro 2" />
              <img src={img3} alt="thp steuerkontor intro 3" />
              <img src={img4} alt="thp steuerkontor intro 4" />
            </div>
          </div>

          <div className={`wrapper ${styles.aboutUs}`}>
            <h2 className={styles.h2}>About Us</h2>

            <div className={styles.aboutUs__content}>
              <p className={styles.aboutUs__text}>
                THP Steuerkontor Steuerberatungsgesellschaft mbH is a locally
                rooted and nationally active tax consulting company, which was
                founded in 1994 under the name ADVISA in Schermbeck. Our head
                office in Schermbeck has been located since over 20 years in the
                industrial park in Schermbeck.
              </p>

              <p className={styles.aboutUs__text}>
                In our firm, our clients benefit from more than 20 years of
                experience, which helps us to meet the diverse complex
                requirements. THP Steuerkontor Steuerberatungsgesellschaft mbH
                builds on long-term partnerships. It is active as a service
                provider for commercial and freelance companies of all
                industries and legal forms as well as private individuals,
                associations and foundations.
              </p>
            </div>
            {!openAboutUs && (
              <button
                type="button"
                className={styles.learnMore}
                onClick={() => setOpenAboutUs(!openAboutUs)}
              >
                Learn More
                <img src={learnMore} alt="Learn More" />
              </button>
            )}
            {openAboutUs && (
              <p className={styles.aboutUs__text}>
                With everything we have to offer in terms of knowledge, skills
                and commitment, we offer you comprehensive structuring advice in
                all tax law and business management issues at reasonable fees.
                Individual solutions and the goal of doing something special for
                each client characterize our business philosophy.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section__number}>02</div>
        <div className={styles.section__content}>
          <h2 className={styles.service__title}>Our Services</h2>
        </div>
      </section>
      <Services />
    </div>
  );
}
