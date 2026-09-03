// Exclude Xi Jinping from the main-menu leader carousel only.
// Leader selection, diplomacy, and in-game portraits still use CustomLeaderConfig.

const EXCLUDED_LEADER_ID = "LEADER_Xi_Jinping";

function isMainMenuLeaderPoolActive() {
	const mainMenu = document.querySelector("main-menu");
	if (!mainMenu) return false;

	const menuStyle = getComputedStyle(mainMenu);
	if (menuStyle.display === "none" || menuStyle.visibility === "hidden") return false;
	if (mainMenu.classList.contains("hidden")) return false;

	const slot = mainMenu.querySelector(
		"#MainMenuSlot, .main-menu-slot-container, .main-menu-slot-container-outer"
	);
	if (!slot) return false;

	const slotStyle = getComputedStyle(slot);
	if (slotStyle.display === "none" || slotStyle.visibility === "hidden") return false;
	if (slot.classList.contains("hidden")) return false;

	return mainMenu.offsetParent !== null && slot.offsetParent !== null;
}

let originalGetRegisteredLeaders = null;

function installMainMenuExcludePatch() {
	const cfg = window.CustomLeaderConfig;
	if (!cfg?.getRegisteredLeaders || !cfg._isLoaded) return false;
	if (cfg.getRegisteredLeaders._XiJinpingMainMenuExclude) return true;

	if (!originalGetRegisteredLeaders) {
		originalGetRegisteredLeaders = cfg.getRegisteredLeaders.bind(cfg);
	}

	cfg.getRegisteredLeaders = function XiJinpingGetRegisteredLeadersFiltered() {
		const leaders = originalGetRegisteredLeaders();
		if (!isMainMenuLeaderPoolActive()) return leaders;
		return leaders.filter((id) => id !== EXCLUDED_LEADER_ID);
	};
	cfg.getRegisteredLeaders._XiJinpingMainMenuExclude = true;
	return true;
}

(function initMainMenuExclude() {
	let attempts = 0;
	const maxAttempts = 200;
	const timer = setInterval(() => {
		attempts++;
		if (installMainMenuExcludePatch() || attempts >= maxAttempts) {
			clearInterval(timer);
		}
	}, 50);
})();
