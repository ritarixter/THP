import { useTranslation } from "react-i18next";
import styles from "./Location.module.scss";

const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.0888069523!2d13.09512029393772!3d52.50641872082704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2ses!4v1773225960675!5m2!1sen!2ses";

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
