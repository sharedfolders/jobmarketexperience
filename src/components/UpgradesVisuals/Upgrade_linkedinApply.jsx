import React from "react";
import styles from "./Upgrade_linkedinApply.module.css";

export default function Upgrade_linkedinApply() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1 className={styles.title}>Job Title</h1>
        <p>Company - United States - 1 hour ago - 1234 applicants</p>
        <p>Full-time - Director</p>
        <p>1001-5000 employees - Software Development</p>
      </div>
      <button className={styles.btn}>Apply</button>
    </div>
  );
}
