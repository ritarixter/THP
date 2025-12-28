import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.breadcrumbs} aria-label={t("breadcrumbs.ariaLabel")}>
      <Link to="/" className={styles.companyLink}>
        {t("breadcrumbs.company")}
      </Link>
      <span className={styles.separator}>{t("breadcrumbs.separator")}</span>
      <span className={styles.contactsText}>{t("breadcrumbs.contact")}</span>
    </nav>
  );
};

export default Breadcrumbs;
