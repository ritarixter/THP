import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";
import logo from "../../images/logo.svg";
import { useLocalizedPath } from "../../hooks/useLocalizedPath";

export default function Footer() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  const locationText = t("footer.title.location");
  const phoneText = t("footer.title.phone");
  const emailText = t("footer.title.email");

  const phoneHref = `tel:${phoneText.replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${emailText}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationText
  )}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.blockNav}>
        <div className={styles.column}>
          <p className={styles.column_title}>{t("footer.company.title")}</p>
          <Link to={localizedPath("/#aboutUs")} className={styles.column_text}>
            {t("footer.company.aboutUs")}
          </Link>
          <Link to={localizedPath("/#services")} className={styles.column_text}>
            {t("footer.company.service")}
          </Link>
        </div>

        <div className={styles.column}>
          <p className={styles.column_title}>{t("footer.contacts.title")}</p>
          <Link to={localizedPath("/contacts")} className={styles.column_text}>
            {t("footer.contacts.contacts")}
          </Link>
          <Link
            to={localizedPath("/contacts#team")}
            className={styles.column_text}
          >
            {t("footer.contacts.team")}
          </Link>
          <Link to={localizedPath("/#contacts")} className={styles.column_text}>
            {t("footer.contacts.contactUs")}
          </Link>
        </div>
      </div>

      <div className={styles.blockInfoContainer}>
        <div className={styles.blockInfo}>
          <Link to={localizedPath("/")} className={styles.logo}>
            <img src={logo} alt={t("common.alt.logo")} />
          </Link>

          <a
            className={styles.location}
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            {locationText}
          </a>

          <div className={styles.info}>
            <a className={styles.location} href={phoneHref}>
              {phoneText}
            </a>
            <a className={styles.location} href={emailHref}>
              {emailText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
