import { useReducer, useEffect } from "react";
import styles from "./App.module.css";
import UpgradeList from "./components/UpgradeList";
import UpgradeVisualsBox from "./components/UpgradeVisualsBox";
import GameStats from "./components/GameStats";
import ApplicationClicker from "./components/ApplicationClicker";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const initialValues = {
  totalJobApplication: 0,
  jobApplication: 0,

  appPerClick: 1,
  appPerSecs: 0,

  upgrades: [],
  upgradesUnlocked: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "upgradesData": {
      return { ...state, upgrades: action.payload.upgrades };
    }

    case "click": {
      return {
        ...state,
        jobApplication: state.jobApplication + state.appPerClick,
        totalJobApplication: state.totalJobApplication + state.appPerClick,
      };
    }

    case "tick": {
      return {
        ...state,
        jobApplication: state.jobApplication + state.appPerSecs,
        totalJobApplication: state.totalJobApplication + state.appPerSecs,
      };
    }

    case "buyUpgrade": {
      const upgradeID = action.payload;
      const upgrade = state.upgrades.findIndex(
        (upgrade) => upgrade.id === upgradeID,
      );

      if (state.jobApplication < state.upgrades[upgrade].cost) return state;

      return {
        ...state,
        jobApplication: state.jobApplication - state.upgrades[upgrade].cost,
        appPerClick: state.appPerClick + state.upgrades[upgrade].appPerClick,
        appPerSecs: state.appPerSecs + state.upgrades[upgrade].appPerSecs,
        upgradesUnlocked: state.upgradesUnlocked + 1,
        upgrades: [...state.upgrades, (state.upgrades[upgrade].active = true)],
      };
    }

    default:
      throw new Error("Unknown case");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/upgrades.json");
        if (!res.ok) throw new Error("Something happened");

        const data = await res.json();
        dispatch({ type: "upgradesData", payload: data });
      } catch (err) {
        throw new Error(err.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return clearInterval(() => interval);
  }, []);

  return (
    <div className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <GameStats state={state} />
        <div className={styles.appColumns}>
          <div className={styles.centerColumn}>
            <ApplicationClicker
              state={state}
              onClick={() => dispatch({ type: "click" })}
            />
            <UpgradeList state={state} dispatch={dispatch} />
          </div>
          <UpgradeVisualsBox state={state} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
