import styles from "./GameStats.module.css";

export default function GameStats({ state }) {
  return (
    <div className={styles.container}>
      <h3>
        Total Applications sent<span>{state.totalJobApplication}</span>
      </h3>
      <h3>
        Applications per click<span>{state.appPerClick}</span>
      </h3>
      <h3>
        Applications per seconds<span>{state.appPerSecs}</span>
      </h3>
    </div>
  );
}
