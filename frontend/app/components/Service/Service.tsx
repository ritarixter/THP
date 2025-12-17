import styles from "./Service.module.scss";
import { useEffect, useRef, useState } from "react";
import ServiceItem, {
  type IServiceItemProps,
} from "../ServiceItem/ServiceItem";

type ITab = {
  id: string;
} & IServiceItemProps;

const tabs: ITab[] = [
  {
    id: "tax",
    label: "§",
    title: "Tailored Tax Solutions for Maximum Legal Savings",
    content: [
      [
        "Preparation of income tax, corporation tax, trade tax and sales tax returns",
        "Consulting Agricultural and Forestry",
      ],
      ["Taking over negotiations with the tax office", "Appeals"],
      ["Obtaining binding information"],

      [
        "Advice on all tax issues",
        "Support and encouragement in tax investigations and proceedings",
      ],
      ["Control of tax assessments", "Support and advice during tax audits"],
      ["Tax restructuring", "Company succession"],
    ],
  },
  {
    id: "accounting",
    label: "+/-",
    title: "Accounting",
    content: [
      [
        "Special accounting for agriculture and forestry, car dealerships, craftsmen and health professions",
      ],
      [
        "Preparation and timely submission of advance VAT returns and recapitulative reports",
      ],
      [],
      [
        "Establishment and management of financial accounting including asset accounting",
      ],
      ["Monthly business evaluations and business analyses"],
    ],
  },
  {
    id: "audit",
    label: "?",
    title: "Audit",
    content: [
      [
        "Support and accompaniment in tax investigations and voluntary disclosures",
      ],
      [],
      [],
      ["Taking over negotiations with the tax office"],
      ["Support and advice during tax audits"],
    ],
  },
  {
    id: "consulting",
    label: "!",
    title: "Management Consulting",
    content: [
      [
        "Advice on acquisitions or sales of companies as well as on all types of corporate restructuring",
      ],
      ["Advice on all financial and business issues"],
      [],
      [
        "Preparation of planned balance sheets and planned profit and loss calculations",
      ],
      ["Carrying out company valuations"],
      [
        "Business analyses of the net assets, financial position and results of operations",
      ],
    ],
  },
  {
    id: "payroll",
    label: "€",
    title: "Payroll Accounting",
    content: [
      ["Preparation of payroll accounting"],
      ["Labour cost optimisation nettomaxx"],
      [],
      [
        "Legal advice in cooperation with the law firm Friedrich, Westhues-Wedig & Coll.",
      ],
      ["International posting of workers"],
    ],
  },
];

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTabChange = (tab: ITab) => {
    if (tab.id === selectedTab.id) return;

    setIsTransitioning(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setSelectedTab(tab);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
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
      <div
        className={`${styles.contentWrapper} ${isTransitioning ? styles.contentWrapper_hidden : ""}`}
      >
        <ServiceItem
          key={selectedTab.id}
          label={selectedTab.label}
          title={selectedTab.title}
          content={selectedTab.content}
        />
      </div>
    </div>
  );
}
