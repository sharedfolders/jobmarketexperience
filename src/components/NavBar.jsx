import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span></span>Job Market Experience
      </h1>
      <div className={styles.nav}>
        <h1>Play</h1>
        <h1>Credits</h1>
      </div>
    </div>
  );
}
