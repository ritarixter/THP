import type { Route } from "./+types/HomePage";
import styles from "./HomePage.module.scss";
import img1 from "../../images/home/intro/intro-1.png";
import img2 from "../../images/home/intro/intro-2.png";
import img3 from "../../images/home/intro/intro-3.png";
import img4 from "../../images/home/intro/intro-4.png";
import learnMore from "../../images/icons/learn-more.svg";
import { useState } from "react";
import Services from "~/components/Service/Service";
import { useTranslation } from "react-i18next";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "THP" }];
}

export default function HomePage() {
  const { t } = useTranslation();
  const [openAboutUs, setOpenAboutUs] = useState(false);
  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <div className={styles.section__number}>01</div>
        <div className={styles.section__content}>
          <div className={styles.intro}>
            <h1
              className={styles.intro__title}
              dangerouslySetInnerHTML={{ __html: t("homePage.introTitle") }}
            />
            <div className={styles.intro__imgs}>
              <div className={styles.intro__empty}></div>
              <img src={img1} alt="thp steuerkontor intro 1" />
              <img src={img2} alt="thp steuerkontor intro 2" />
              <img src={img3} alt="thp steuerkontor intro 3" />
              <img src={img4} alt="thp steuerkontor intro 4" />
            </div>
          </div>

          <div className={`wrapper ${styles.aboutUs}`}>
            <div className={styles.aboutUs__inner}>
              <h2 className={styles.h2}>{t("homePage.aboutUs.title")}</h2>

              <div className={styles.aboutUs__content}>
                <p className={styles.aboutUs__text}>
                  {t("homePage.aboutUs.paragraph1")}
                </p>

                <p className={styles.aboutUs__text}>
                  {t("homePage.aboutUs.paragraph2")}
                </p>
              </div>
              {!openAboutUs && (
                <button
                  type="button"
                  className={styles.learnMore}
                  onClick={() => setOpenAboutUs(!openAboutUs)}
                >
                  {t("homePage.aboutUs.learnMore")}
                  <img src={learnMore} alt={t("homePage.aboutUs.learnMore")} />
                </button>
              )}
              {openAboutUs && (
                <p className={styles.aboutUs__text}>
                  {t("homePage.aboutUs.paragraph3")}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.section__number}>02</div>
        <div className={styles.section__content}>
          <h2 className={styles.service__title}>
            {t("homePage.servicesTitle")}
          </h2>
        </div>
      </section>
      <Services />
    </div>
  );
}
