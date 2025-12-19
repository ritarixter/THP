import styles from "./Loader.module.scss";

interface LoaderProps {
  color?: string;
  size?: number;
  borderWidth?: number;
}

export default function Loader({
  color = "white",
  size = 20,
  borderWidth = 3,
}: LoaderProps) {
  return (
    <div
      className={styles.loader}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        className={styles.loaderBefore}
        style={{
          border: `${borderWidth}px solid ${color}`,
        }}
      />
    </div>
  );
}
