import { Link, useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import { Gamburger } from "./Gamburger";
import { useEffect, useState, type ChangeEvent } from "react";
import addres from "../../images/icons/location.svg";
import email from "../../images/icons/email.svg";
import lang from "../../images/icons/lang.svg";
import mail from "../../images/icons/MailBlue.svg";

const LANGUAGES = [
  { code: "en", name: "ENG" },
  { code: "de", name: "DEU" },
] as const;

export default function Header() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const locationText = t("header.title.location");
  const phoneText = t("header.title.phone");
  const phoneHref = `tel:${phoneText.replace(/[^\d+]/g, "")}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationText
  )}`;

  useEffect(() => {
    if (!openMenu) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [openMenu]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get("lang");
    if (langParam && LANGUAGES.some((lang) => lang.code === langParam)) {
      i18n.changeLanguage(langParam);
    }
  }, [i18n, location.search]);

  const closeMobileMenu = () => {
    setOpenMenu(false);
    setOpenSubMenu(false);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    navigate(`?lang=${newLang}`);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mobileVersion = () => {
    return (
      <div className={styles.mobile}>
        <nav className={styles.mobile_nav}>
          <ul className={styles.mobile_navList}>
            <li
              className={`${styles.mobile_navList_item} ${styles.mobile_navLink} ${openSubMenu && styles.mobile_navList_item_active}`}
            >
              <Link to="/" onClick={closeMobileMenu}>
                {t("footer.company.title")}
              </Link>

              <button
                onClick={() => setOpenSubMenu(!openSubMenu)}
                className={`${styles.arrow_button} ${
                  openSubMenu && styles.arrow_button_active
                }`}
                type="button"
              >
                <svg
                  width="7"
                  height="13"
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.355469 0.353516L6.01232 6.01037L0.35547 11.6672"
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </li>
            {openSubMenu && (
              <>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link
                    to="/#aboutUs"
                    className={styles.navLink}
                    onClick={closeMobileMenu}
                  >
                    {t("footer.company.aboutUs")}
                  </Link>
                </li>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link
                    to="/#services"
                    className={styles.navLink}
                    onClick={closeMobileMenu}
                  >
                    {t("footer.company.service")}
                  </Link>
                </li>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link
                    to="/#contacts"
                    className={styles.navLink}
                    onClick={closeMobileMenu}
                  >
                    {t("footer.company.vacancies")}
                  </Link>
                </li>
              </>
            )}
            <li className={styles.mobile_navList_item}>
              <Link
                to="/contacts"
                className={styles.mobile_navLink}
                onClick={closeMobileMenu}
              >
                {t("header.contacts")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobile_block}>
          <p className={styles.location_text}>{t("header.title.number")}</p>
          <a className={styles.location} href={phoneHref}>
            {phoneText}
          </a>
        </div>
        <div className={styles.mobile_block}>
          <p className={styles.location_text}>{t("header.title.address")}</p>
          <a
            className={styles.location}
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            {locationText}
          </a>
        </div>
        <div className={styles.mobile_hel}>
          <div
            className={styles.mobile_button}
            onClick={() => {
              navigate("#contacts");
              closeMobileMenu();
            }}
          >
            {t("header.title.contact")}
            <img src={mail} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.container} ${openMenu ? styles.container_open : ""}`}
      >
        <div className={styles.button}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.04297 1.07812L31.043 30.0781M31.043 1.07812L1.04297 30.0781"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className={styles.button__burger}>
          <Gamburger open={openMenu} setOpen={setOpenMenu} />
        </div>
        <Link to="/">
          <img src={logo} alt={t("common.alt.logo")} />
        </Link>
        <div className={styles.block}>
          <a
            className={styles.location}
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            <img src={addres} alt={t("common.alt.location")} />
            {locationText}
          </a>
        </div>
        <div className={styles.block}>
          <p className={styles.location}>
            <img src={lang} alt={t("common.alt.language")} />
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className={styles.select}
            >
              {LANGUAGES.map((lang) => (
                <option
                  className={styles.option}
                  key={lang.code}
                  value={lang.code}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </p>
          <a className={styles.location} href={phoneHref}>
            {phoneText}
          </a>
        </div>
        <div className={styles.mail}>
          <img
            src={email}
            alt={t("common.alt.email")}
            onClick={() => navigate("#contacts")}
          />
        </div>
      </div>
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
              className={`${styles.navLink} ${
                isActive("/contacts") && styles.active
              }`}
            >
              {t("header.contacts")}
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.mobileOverlay} ${openMenu ? styles.mobileOverlay_open : ""}`}
        onClick={closeMobileMenu}
      >
        <div
          className={`${styles.mobilePanel} ${openMenu ? styles.mobilePanel_open : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {mobileVersion()}
        </div>
      </div>
    </header>
  );
}
