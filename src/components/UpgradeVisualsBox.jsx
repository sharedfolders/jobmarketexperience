import styles from "./UpgradeVisualsBox.module.css";

import Upgrade_indeedApply from "./UpgradesVisuals/Upgrade_indeedApply";
import Upgrade_linkedinApply from "./UpgradesVisuals/Upgrade_linkedinApply";
import Upgrade_linkedinPosts from "./UpgradesVisuals/Upgrade_linkedinPosts";
import Upgrade_localNewsAds from "./UpgradesVisuals/Upgrade_localNewsAds";
import Upgrade_nationalAds from "./UpgradesVisuals/Upgrade_nationalAds";
import Upgrade_plannedMails from "./UpgradesVisuals/Upgrade_plannedMails";
import Upgrade_regionalAds from "./UpgradesVisuals/Upgrade_regionalAds";

const upgradeComponents = {
  indeedApply: Upgrade_indeedApply,
  linkedinApply: Upgrade_linkedinApply,
  linkedinPosts: Upgrade_linkedinPosts,
  localNewsAds: Upgrade_localNewsAds,
  nationalAds: Upgrade_nationalAds,
  plannedMails: Upgrade_plannedMails,
  regionalAds: Upgrade_regionalAds,
};

export default function UpgradeVisualsBox({ state }) {
  return (
    <div className={styles.container}>
      {state.upgrades.map((upgrade) => {
        if (upgrade.active) {
          const Component = upgradeComponents[upgrade.id];

          if (!Component) return;

          return <Component state={state} key={upgrade.id} />;
        }
      })}
    </div>
  );
}
