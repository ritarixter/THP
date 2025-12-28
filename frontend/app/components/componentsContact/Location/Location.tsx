import { useTranslation } from "react-i18next";
import styles from "./Location.module.scss";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.123456789012!2d6.123456!3d51.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8a1234567890%3A0x1234567890abcdef!2sAlte%20Poststra%C3%9Fe%2090%2C%2046514%20Schermbeck%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde";

const Location = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.location} aria-label={t("location.ariaLabel")}>
      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src={MAP_URL}
          width="100%"
          height="572"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("location.mapTitle")}
          onError={() => console.error(t("location.mapLoadError"))}
        />
      </div>
    </section>
  );
};

export default Location;
