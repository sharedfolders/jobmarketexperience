import styles from "./ApplicationClicker.module.css";

export default function ApplicationClicker({ state, onClick }) {
  return (
    <div>
      <div
        style={
          state.upgradesUnlocked > 2
            ? {
                backgroundImage: "url('/1e2aa7d13f393c66d4476f2e806df6f3.jpg')",
              }
            : {
                backgroundColor: "red",
              }
        }
        className={styles.paperClicker}
        onClick={onClick}
      ></div>
      <h3 className={styles.container}>
        Applications ready: <span>{state.jobApplication}</span>
      </h3>
    </div>
  );
}
