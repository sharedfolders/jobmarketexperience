import styles from "./Upgrade.module.css";

export default function Upgrade({
  name,
  cost,
  appPerClick,
  appPerSecs,
  description,
  onClick,
  state,
}) {
  return (
    <div
      className={`${styles.container} ${cost > state.jobApplication ? styles.disabled : ""}`}
      onClick={onClick}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.description}>
        <span className={styles.advantages}>{cost}</span> applications
      </p>
      <div className={styles.advantagesBlock}>
        {appPerClick ? (
          <p className={styles.advantages}>{`+${appPerClick} APC`}</p>
        ) : (
          ""
        )}
        {appPerSecs ? (
          <p className={styles.advantages}>{`+${appPerSecs} APS`}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
