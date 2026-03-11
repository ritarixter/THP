import { useTranslation } from "react-i18next";

export function useLocalizedPath() {
  const { i18n } = useTranslation();

  return (path: string) => {
    const hashIndex = path.indexOf("#");
    let pathPart = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
    const hashPart = hashIndex >= 0 ? path.slice(hashIndex) : "";

    const separator = pathPart.includes("?") ? "&" : "?";
    pathPart = `${pathPart}${separator}lang=${i18n.language}`;

    return `${pathPart}${hashPart}`;
  };
}
