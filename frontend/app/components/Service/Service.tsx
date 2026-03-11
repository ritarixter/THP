import styles from "./Service.module.scss";
import { useState, useMemo } from "react";
import ServiceItem, {
  type IServiceItemProps,
} from "../ServiceItem/ServiceItem";
import { useTranslation } from "react-i18next";

import businessConsulting from "../../images/home/services/businessConsulting.svg";
import financialAccounting from "../../images/home/services/financialAccounting.svg";
import financialStatements from "../../images/home/services/financialStatements.svg";
import payrollAccounting from "../../images/home/services/payrollAccounting.svg";
import assetTransfer from "../../images/home/services/assetTransfer.svg";
import businessManagement from "../../images/home/services/businessManagement.svg";
import legalAdvisory from "../../images/home/services/legalAdvisory.svg";
import financialServices from "../../images/home/services/financialServices.svg";

type ITab = {
  id: string;
} & IServiceItemProps;

export default function Services() {
  const { t, ready } = useTranslation();

  const tabs: ITab[] = useMemo(
    () => [
      {
        id: "businessConsulting",
        label: businessConsulting,
        title: t("services.businessConsulting.title"),
        content: t("services.businessConsulting.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.businessConsulting.subtitle"),
        texts: t("services.businessConsulting.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "financialAccounting",
        label: financialAccounting,
        title: t("services.financialAccounting.title"),
        content: t("services.financialAccounting.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.financialAccounting.subtitle"),
        texts: t("services.financialAccounting.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "financialStatements",
        label: financialStatements,
        title: t("services.financialStatements.title"),
        content: t("services.financialStatements.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.financialStatements.subtitle"),
        texts: t("services.financialStatements.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "payrollAccounting",
        label: payrollAccounting,
        title: t("services.payrollAccounting.title"),
        content: t("services.payrollAccounting.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.payrollAccounting.subtitle"),
        texts: t("services.payrollAccounting.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "assetTransfer",
        label: assetTransfer,
        title: t("services.assetTransfer.title"),
        content: t("services.assetTransfer.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.assetTransfer.subtitle"),
        texts: t("services.assetTransfer.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "businessManagement",
        label: businessManagement,
        title: t("services.businessManagement.title"),
        content: t("services.businessManagement.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.businessManagement.subtitle"),
        texts: t("services.businessManagement.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "legalAdvisory",
        label: legalAdvisory,
        title: t("services.legalAdvisory.title"),
        content: t("services.legalAdvisory.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.legalAdvisory.subtitle"),
        texts: t("services.legalAdvisory.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
      },
      {
        id: "financialServices",
        label: financialServices,
        title: t("services.financialServices.title"),
        content: t("services.financialServices.content", {
          returnObjects: true,
        }) as string[][],
        subtitle: t("services.financialServices.subtitle"),
        texts: t("services.financialServices.texts", {
          returnObjects: true,
        }) as { title: string | null; text: string }[],
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
                <img
                  className={styles.tabs__button_icon}
                  src={tab.label}
                  alt={tab.id}
                />
              </button>
            </li>
          ))}
        </ul>
        <ServiceItem
          key={selectedTab.id}
          label={selectedTab.label}
          title={selectedTab.title}
          content={selectedTab.content}
          subtitle={selectedTab.subtitle}
          texts={selectedTab.texts}
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
                  subtitle={tab.subtitle}
                  texts={tab.texts}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
