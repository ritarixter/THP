import type { Route } from "./+types/NewsPage";
import { useTranslation } from "react-i18next";
import styles from "./NewsPage.module.scss";

export function meta({}: Route.MetaArgs) {
  return [{ title: "News" }, { name: "description", content: "News page" }];
}

export default function NewsPage() {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <h1 className={styles.title}>{t("news.title")}</h1>
    </div>
  );
}
