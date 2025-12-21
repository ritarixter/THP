import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import { Gamburger } from "./Gamburger";
import { useState } from "react";
import addres from "../../images/icons/location.svg";
import email from "../../images/icons/email.svg";
import lang from "../../images/icons/lang.svg";

export default function Header() {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.button}>
          <Gamburger open={openMenu} setOpen={setOpenMenu} />
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={styles.block}>
          <p className={styles.location}>
            <img src={addres} alt="Location" />
            {t("header.title.location")}
          </p>
        </div>
        <div className={styles.block}>
          <p className={styles.location}>
            <img src={lang} alt="Location" />
            {t("header.title.lang")}
          </p>
          <p className={styles.location}>{t("header.title.phone")}</p>
        </div>
        <div className={styles.mail}>
          <img src={email} alt="Email" />
        </div>
      </div>
      {openMenu && (
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={`${styles.navList_item}`}>
              <Link
                to="/"
                className={`${styles.navLink} ${isActive("/") && styles.active}`}
              >
                {t("header.home")}
              </Link>
            </li>
            <li className={styles.navList_item}>
              <Link
                to="/contacts"
                className={`${styles.navLink} ${isActive("/contacts") && styles.active}`}
              >
                {t("header.contacts")}
              </Link>
            </li>
            <li className={styles.navList_item}>
              <Link
                to="/news"
                className={`${styles.navLink} ${isActive("/news") && styles.active}`}
              >
                {t("header.news")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
