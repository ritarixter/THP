import styles from "./Service.module.scss";
import { useState, useMemo } from "react";
import ServiceItem, {
  type IServiceItemProps,
} from "../ServiceItem/ServiceItem";
import { useTranslation } from "react-i18next";

type ITab = {
  id: string;
} & IServiceItemProps;

export default function Services() {
  const { t, ready } = useTranslation();

  const tabs: ITab[] = useMemo(
    () => [
      {
        id: "tax",
        label: "§",
        title: t("services.tax.title"),
        content: t("services.tax.content", {
          returnObjects: true,
        }) as string[][],
      },
      {
        id: "accounting",
        label: "+/-",
        title: t("services.accounting.title"),
        content: t("services.accounting.content", {
          returnObjects: true,
        }) as string[][],
      },
      {
        id: "audit",
        label: "?",
        title: t("services.audit.title"),
        content: t("services.audit.content", {
          returnObjects: true,
        }) as string[][],
      },
      {
        id: "consulting",
        label: "!",
        title: t("services.consulting.title"),
        content: t("services.consulting.content", {
          returnObjects: true,
        }) as string[][],
      },
      {
        id: "payroll",
        label: "€",
        title: t("services.payroll.title"),
        content: t("services.payroll.content", {
          returnObjects: true,
        }) as string[][],
      },
    ],
    [t]
  );

  const [selectedTab, setSelectedTab] = useState<ITab>(tabs[0]);
  const [selectedTabs, setSelectedTabs] = useState<ITab[]>([]);

  // Десктоп
  const handleTabChange = (tab: ITab) => {
    if (tab.id === selectedTab.id) return;
    setSelectedTab(tab);
  };

  // Мобилка
  function handleTabsChange(tab: ITab) {
    if (selectedTabs.find((t) => t.id === tab.id)) {
      setSelectedTabs(selectedTabs.filter((s_t) => s_t.id !== tab.id));
      return;
    }
    setSelectedTabs([...selectedTabs, tab]);
  }

  if (!ready) return null;

  return (
    <>
      <div className={styles.services}>
        <ul className={styles.tabs}>
          {tabs.map((tab) => (
            <li key={tab.id} className={styles.tab}>
              <button
                type="button"
                className={`${styles.tabs__button} ${tab.id === selectedTab.id && styles.tabs__button_active}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <ServiceItem
          key={selectedTab.id}
          label={selectedTab.label}
          title={selectedTab.title}
          content={selectedTab.content}
        />
      </div>

      <div className={styles.services__mobile}>
        <ul className={styles.tabs__mobile}>
          {tabs.map((tab) => (
            <li key={tab.id} className={styles.tab}>
              <button
                type="button"
                className={`${styles.tabs__button__mobile} ${selectedTabs.find((t) => t.id === tab.id) && styles.tabs__button__mobile_active}`}
                onClick={() => handleTabsChange(tab)}
              >
                {tab.title}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    d="M0.707031 0.707031L6.36389 6.36389L0.707032 12.0207"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              {selectedTabs.find((t) => t.id === tab.id) && (
                <ServiceItem
                  key={tab.id}
                  label={tab.label}
                  title={tab.title}
                  content={tab.content}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
