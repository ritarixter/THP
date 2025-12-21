import type { Route } from "./+types/ContactsPage";
import { useTranslation } from "react-i18next";
import styles from "./ContactsPage.module.scss";

import ContactInfo from "../../components/componentsContact/ContactInfo/ContactInfo";
import Location from "../../components/componentsContact/Location/Location";
import TeamCards from "../../components/componentsContact/TeamCards/TeamCards";
import Breadcrumbs from "../../components/componentsContact/Breadcrumbs/Breadcrumbs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contacts" },
    { name: "description", content: "Contacts page" },
  ];
}

export default function ContactsPage() {
  const { t } = useTranslation();

  return (
    <div className={styles.contactsPage}>
      <div className={styles.pageContainer}>
        <Breadcrumbs />
        <h1 className={styles.pageTitle}>
          {t("contacts.title", "Organization's contacts")}
        </h1>
      </div>

      <Location />

      <main className={styles.pageContainer}>
        <ContactInfo />

        <section className={styles.section} aria-labelledby="team-cards">
          <TeamCards />
        </section>
      </main>
    </div>
  );
}
