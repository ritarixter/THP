import { Link } from "react-router";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.blockNav}>
        <div className={styles.column}>
          <p className={styles.column_title}>{t("footer.company.title")}</p>
          <p className={styles.column_text}>{t("footer.company.aboutUs")}</p>
          <p className={styles.column_text}>{t("footer.company.service")}</p>
          <p className={styles.column_text}>{t("footer.company.vacancies")}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.column_title}>{t("footer.contacts.title")}</p>
          <p className={styles.column_text}>{t("footer.contacts.contacts")}</p>
          <p className={styles.column_text}>{t("footer.contacts.team")}</p>
          <p className={styles.column_text}>{t("footer.contacts.contactUs")}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.column_title}>{t("footer.news.title")}</p>
          <p className={styles.column_text}>{t("footer.news.latest")}</p>
        </div>
      </div>
      <div className={styles.blockInfo}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </Link>
        <p className={styles.location}>{t("footer.title.location")}</p>
        <div className={styles.info}>
          <p className={styles.location}>{t("footer.title.phone")}</p>
          <p className={styles.location}>{t("footer.title.email")}</p>
        </div>
      </div>
    </footer>
  );
}
