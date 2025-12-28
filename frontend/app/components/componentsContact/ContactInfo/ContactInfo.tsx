import { useTranslation } from "react-i18next";
import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  const { t } = useTranslation();

  const addressText = t("contactInfo.items.address");
  const phoneText = t("contactInfo.items.phone");
  const emailText = t("contactInfo.items.email");

  const phoneHref = `tel:${phoneText.replace(/[^\d+]/g, "")}`;
  const emailHref = `mailto:${emailText}`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressText
  )}`;

  const contacts = [
    {
      id: 1,
      type: "address" as const,
      href: mapsHref,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          viewBox="0 0 20 24"
          fill="none"
        >
          <path
            d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
            stroke="#70F181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
            stroke="#70F181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: addressText,
    },
    {
      id: 2,
      type: "phone" as const,
      href: phoneHref,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22.0014 16.9201V19.9201C22.0025 20.1986 21.9455 20.4743 21.8339 20.7294C21.7223 20.9846 21.5587 21.2137 21.3535 21.402C21.1483 21.5902 20.906 21.7336 20.6421 21.8228C20.3783 21.912 20.0988 21.9452 19.8214 21.9201C16.7442 21.5857 13.7884 20.5342 11.1914 18.8501C8.77523 17.3148 6.72673 15.2663 5.1914 12.8501C3.50138 10.2413 2.44964 7.27109 2.1214 4.1801C2.09641 3.90356 2.12927 3.62486 2.2179 3.36172C2.30652 3.09859 2.44897 2.85679 2.63616 2.65172C2.82336 2.44665 3.0512 2.28281 3.30519 2.17062C3.55917 2.05843 3.83374 2.00036 4.1114 2.0001H7.1114C7.5967 1.99532 8.06719 2.16718 8.43516 2.48363C8.80313 2.80008 9.04348 3.23954 9.1114 3.7201C9.23802 4.68016 9.47285 5.62282 9.8114 6.5301C9.94594 6.88802 9.97506 7.27701 9.8953 7.65098C9.81555 8.02494 9.63026 8.36821 9.3614 8.6401L8.0914 9.9101C9.51495 12.4136 11.5879 14.4865 14.0914 15.9101L15.3614 14.6401C15.6333 14.3712 15.9766 14.1859 16.3505 14.1062C16.7245 14.0264 17.1135 14.0556 17.4714 14.1901C18.3787 14.5286 19.3213 14.7635 20.2814 14.8901C20.7672 14.9586 21.2108 15.2033 21.5279 15.5776C21.8451 15.9519 22.0136 16.4297 22.0014 16.9201Z"
            stroke="#70F181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: phoneText,
    },
    {
      id: 3,
      type: "email" as const,
      href: emailHref,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
            stroke="#70F181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 6L12 13L2 6"
            stroke="#70F181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: emailText,
    },
  ];

  return (
    <section className={styles.contactInfo}>
      <h2 className={styles.title}>{t("contactInfo.title")}</h2>

      <div className={styles.contactsList}>
        {contacts.map((contact) => (
          <div key={contact.id} className={styles.contactItem}>
            <div className={styles.iconWrapper}>{contact.icon}</div>
            <a
              className={styles.text}
              href={contact.href}
              target={contact.type === "address" ? "_blank" : undefined}
              rel={contact.type === "address" ? "noreferrer" : undefined}
            >
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
