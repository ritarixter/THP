import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                {t("header.home")}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={styles.navLink}>
                {t("header.contacts")}
              </Link>
            </li>
            <li>
              <Link to="/news" className={styles.navLink}>
                {t("header.news")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
