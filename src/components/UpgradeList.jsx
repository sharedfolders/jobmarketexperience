import Upgrade from "./Upgrade";

export default function UpgradeList({ state, dispatch }) {
  return (
    <>
      {state.upgrades.map((upgrade) => {
        if (upgrade.unlockIndex === state.upgradesUnlocked)
          return (
            <div key={upgrade.id}>
              <Upgrade
                name={upgrade.name}
                cost={upgrade.cost}
                appPerClick={upgrade.appPerClick}
                appPerSecs={upgrade.appPerSecs}
                description={upgrade.description}
                state={state}
                onClick={() =>
                  dispatch({
                    type: "buyUpgrade",
                    payload: upgrade.id,
                  })
                }
              />
            </div>
          );
      })}
    </>
  );
}
