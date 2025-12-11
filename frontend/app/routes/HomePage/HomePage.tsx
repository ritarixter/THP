import type { Route } from "./+types/HomePage";
import styles from "./HomePage.module.scss";
export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "THP" }];
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
    </div>
  );
}
