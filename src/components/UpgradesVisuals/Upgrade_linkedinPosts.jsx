import styles from "./Upgrade_linkedinPosts.module.css";

export default function Upgrade_linkedinPosts() {
  return (
    <div className={styles.container}>
      <div className={styles.userBarFirst}>
        <img
          src="https://phil-isherwood.co.uk/wp-content/uploads/2020/06/linkedin-opentowork.png"
          alt="test"
        />
        <div className={styles.userBar}>
          <h1 className={styles.title}>You</h1>
          <p className={styles.jobtitle}>Looking for a job</p>
        </div>
      </div>
      <p className={styles.description}>
        I am the best poster ever... please hire me ! I am the best poster
        ever... please hire me ! I am the best poster ever... please hire me !
      </p>
      <button className={styles.btn}>Publish</button>
    </div>
  );
}
