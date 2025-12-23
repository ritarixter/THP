import type { FC } from "react";
import styles from "./Header.module.scss";

type TGamburger = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const Gamburger: FC<TGamburger> = ({ open, setOpen }) => {
  return (
    <div
      className={`${styles.menuClick} ${open && styles.menuClick_open}`}
      onClick={() => setOpen(!open)}
    >
      <span
        className={`${styles.line1} ${
          open ? styles.line1_active : styles.line1_NoActive
        }`}
      ></span>
      <span
        className={`${styles.line2} ${
          open ? styles.line2_active : styles.line2_NoActive
        }`}
      ></span>
      <span
        className={`${styles.line3} ${
          open ? styles.line3_active : styles.line3_NoActive
        }`}
      ></span>
    </div>
  );
};
