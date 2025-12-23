import { Link, useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import { Gamburger } from "./Gamburger";
import { useEffect, useState } from "react";
import addres from "../../images/icons/location.svg";
import email from "../../images/icons/email.svg";
import lang from "../../images/icons/lang.svg";
import arrow from "../../images/icons/arrow1.svg";
import mail from "../../images/icons/MailBlue.svg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const languages = [
    { code: "en", name: "ENG" },
    { code: "de", name: "DEU" },
  ];

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const langParam = params.get("lang");
    if (langParam && languages.some((lang) => lang.code === langParam)) {
      i18n.changeLanguage(langParam);
      setCurrentLanguage(langParam);
    }
  }, [location.search]);

  const handleLanguageChange = (e: any) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
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
            <li className={`${styles.mobile_navList_item}`}>
              <Link to="" className={styles.mobile_navLink}>
                {t("footer.company.title")}
                <img
                  className={`${styles.arrow} ${
                    openSubMenu && styles.arrow_active
                  }`}
                  onClick={() => setOpenSubMenu(!openSubMenu)}
                  src={arrow}
                />
              </Link>
            </li>
            {openSubMenu && (
              <>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link to="#aboutUs" className={styles.navLink}>
                    {t("footer.company.aboutUs")}
                  </Link>
                </li>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link to="#services" className={styles.navLink}>
                    {t("footer.company.service")}
                  </Link>
                </li>
                <li className={`${styles.mobile_navList_i}`}>
                  <Link to="#contacts" className={styles.navLink}>
                    {t("footer.company.vacancies")}
                  </Link>
                </li>
              </>
            )}
            <li className={styles.mobile_navList_item}>
              <Link to="/contacts" className={styles.mobile_navLink}>
                {t("header.contacts")}
              </Link>
            </li>
            <li className={styles.mobile_navList_item}>
              <Link to="/news" className={styles.mobile_navLink}>
                {t("header.news")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobile_block}>
          <p className={styles.location_text}>{t("header.title.number")}</p>
          <p className={styles.location}>{t("header.title.phone")}</p>
        </div>
        <div className={styles.mobile_block}>
          <p className={styles.location_text}>{t("header.title.address")}</p>
          <p className={styles.location}>{t("header.title.location")}</p>
        </div>
        <div className={styles.mobile_hel}>
          <div
            className={styles.mobile_button}
            onClick={() => {
              navigate("#contacts");
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
            <select
              value={currentLanguage}
              onChange={handleLanguageChange}
              className={styles.select}
            >
              {languages.map((lang) => (
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
          <p className={styles.location}>{t("header.title.phone")}</p>
        </div>
        <div className={styles.mail}>
          <img src={email} alt="Email" onClick={() => navigate("#contacts")} />
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
          <li className={styles.navList_item}>
            <Link
              to="/news"
              className={`${styles.navLink} ${
                isActive("/news") && styles.active
              }`}
            >
              {t("header.news")}
            </Link>
          </li>
        </ul>
      </nav>
      {openMenu && mobileVersion()}
    </header>
  );
}
