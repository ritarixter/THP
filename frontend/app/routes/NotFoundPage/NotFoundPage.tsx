import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";
import { useLocalizedPath } from "../../hooks/useLocalizedPath";

export default function NotFoundPage() {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.code}>{t("notFound.code")}</h1>
        <h2 className={styles.title}>{t("notFound.title")}</h2>
        <p className={styles.message}>{t("notFound.message")}</p>
        <Link to={localizedPath("/")} className={styles.homeLink}>
          {t("notFound.homeButton")}
        </Link>
      </div>
    </div>
  );
}
