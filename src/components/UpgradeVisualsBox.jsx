import Upgrade_indeedApply from "./UpgradesVisuals/Upgrade_indeedApply";
import Upgrade_linkedinApply from "./UpgradesVisuals/Upgrade_linkedinApply";

const upgradeComponents = {
  indeedApply: Upgrade_indeedApply,
  linkedinApply: Upgrade_linkedinApply,
};

export default function UpgradeVisualsBox({ state }) {
  return (
    <div>
      {state.upgrades.map((upgrade) => {
        if (upgrade.active) {
          const Component = upgradeComponents[upgrade.id];

          return <Component state={state} key={upgrade.id} />;
        }
      })}
    </div>
  );
}
