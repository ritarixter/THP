import type { Route } from "./+types/ContactsPage";
import { useTranslation } from "react-i18next";
import styles from "./ContactsPage.module.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts" },
    { name: "description", content: "Contacts page" },
  ];
}

export default function ContactsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className={styles.title}>{t("contacts.title")}</h1>

      <div className={styles.map}></div>
    </div>
  );
}
