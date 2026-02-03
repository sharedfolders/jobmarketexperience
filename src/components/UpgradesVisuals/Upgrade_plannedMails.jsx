import React from "react";
import styles from "./Upgrade_plannedMails.module.css";

export default function Upgrade_linkedinApply() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1 className={styles.title}>Schedule send</h1>
        <p>Tomorrow Morning</p>
        <p>8:00 AM</p>
      </div>
      <div className={styles.buttonDiv}>
        <span>
          <img
            src="https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_send_googblue_20dp.png"
            alt="PlannerIMG"
          />
        </span>
        <p>Pick date & time</p>
        <button className={styles.btn}>Send</button>
      </div>
    </div>
  );
}
