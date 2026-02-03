import { useReducer, useEffect } from "react";
import UpgradeList from "./components/UpgradeList";
import UpgradeVisualsBox from "./components/UpgradeVisualsBox";
import Upgrade_linkedinApply from "./components/UpgradesVisuals/Upgrade_linkedinApply";
import Upgrade_indeedApply from "./components/UpgradesVisuals/Upgrade_indeedApply";
import Upgrade_plannedMails from "./components/UpgradesVisuals/Upgrade_plannedMails";
import Upgrade_linkedinPosts from "./components/UpgradesVisuals/Upgrade_linkedinPosts";
import Upgrade_localNewsAds from "./components/UpgradesVisuals/Upgrade_localNewsAds";

const initialValues = {
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
      };
    }

    case "tick": {
      return {
        ...state,
        jobApplication: state.jobApplication + state.appPerSecs,
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
    <>
      <h1 onClick={() => dispatch({ type: "click" })}>
        {state.jobApplication}
      </h1>
      <UpgradeList state={state} dispatch={dispatch} />
      <UpgradeVisualsBox state={state} />

      <Upgrade_linkedinApply />
      <Upgrade_indeedApply />
      <Upgrade_plannedMails />
      <Upgrade_linkedinPosts />
      <Upgrade_localNewsAds />
    </>
  );
}

export default App;
