import { MementoSlot } from "/core/ui/shell/create-panels/memento-slot.js";
import { Memento, MementoEditor } from "/core/ui/shell/create-panels/memento-editor.js";

const XI_JINPING_MEMENTO_ID = "MEMENTO_Xi_Jinping_RED_FLAG";
const XI_JINPING_MEMENTO_ICON =
  "fs://game/Xi_Jinping_Leader/icons/mem_min_Xi_Jinping_RED_FLAG";

const XI_JINPING_MEMENTO_NAME =
  "LOC_MEMENTO_Xi_Jinping_RED_FLAG_NAME";

const XI_JINPING_MEMENTO_DESCRIPTION =
  "LOC_MEMENTO_Xi_Jinping_RED_FLAG_DESCRIPTION";

const XI_JINPING_MEMENTO_FUNCTIONAL_DESCRIPTION =
  "LOC_MEMENTO_Xi_Jinping_RED_FLAG_FUNCTIONAL_DESCRIPTION";


function isXiJinpingMemento(memData) {
  if (!memData) {
    return false;
  }

  return (
    memData.mementoTypeId === XI_JINPING_MEMENTO_ID ||
    memData.mementoName === XI_JINPING_MEMENTO_NAME
  );
}


function unlockXiJinpingMemento(memData) {
  if (!isXiJinpingMemento(memData)) {
    return;
  }

  memData.displayType = DisplayType.DISPLAY_UNLOCKED;

  if (!memData.mementoIcon) {
    memData.mementoIcon = XI_JINPING_MEMENTO_ICON;
  }
}


function ensureAvailableInSlot(slotData) {
  if (!slotData) {
    return;
  }

  slotData.isLocked = false;

  const exists = slotData.availableMementos.some(
    (m) => m.value === XI_JINPING_MEMENTO_ID
  );

  if (!exists) {
    slotData.availableMementos.push({
      value: XI_JINPING_MEMENTO_ID,
      name: XI_JINPING_MEMENTO_NAME,
      description: XI_JINPING_MEMENTO_DESCRIPTION,
      functionalDescription: XI_JINPING_MEMENTO_FUNCTIONAL_DESCRIPTION,
      icon: XI_JINPING_MEMENTO_ICON,
    });
  }
}


/* ==================================================
   FORCE MEMENTO TO DISPLAY AS UNLOCKED
   ================================================== */

if (Online?.Metaprogression?.getMementosData) {

  const originalGetMementosData =
    Online.Metaprogression.getMementosData.bind(
      Online.Metaprogression
    );

  Online.Metaprogression.getMementosData = function () {

    const mementos = originalGetMementosData();

    for (const memento of mementos) {
      unlockXiJinpingMemento(memento);
    }

    return mementos;
  };
}


/* ==================================================
   TELL USER PROFILE THE REWARD IS UNLOCKED
   ================================================== */

if (Online?.UserProfile?.isRewardUnlocked) {

  const originalIsRewardUnlocked =
    Online.UserProfile.isRewardUnlocked.bind(
      Online.UserProfile
    );

  Online.UserProfile.isRewardUnlocked = function (rewardName) {

    if (rewardName === XI_JINPING_MEMENTO_ID) {
      return true;
    }

    return originalIsRewardUnlocked(rewardName);
  };
}


/* ==================================================
   ADD MEMENTO TO AVAILABLE SLOT OPTIONS
   ================================================== */

const originalOnAttach = MementoEditor.prototype.onAttach;

MementoEditor.prototype.onAttach = function () {

  for (const slot of this.mementoSlotEles) {
    ensureAvailableInSlot(slot.maybeComponent?.slotData);
  }

  originalOnAttach.apply(this, arguments);
};


/* ==================================================
   ENSURE MEMENTO SORTS AS UNLOCKED
   ================================================== */

const originalSortMementos =
  MementoEditor.prototype.sortMementos;

MementoEditor.prototype.sortMementos = function () {

  for (const memento of this.mementosData) {
    unlockXiJinpingMemento(memento);
  }

  originalSortMementos.apply(this);
};


/* ==================================================
   ENSURE FILTER DOES NOT HIDE IT
   ================================================== */

const originalFilterMementos =
  MementoEditor.prototype.filterMementos;

MementoEditor.prototype.filterMementos = function () {

  for (const memento of this.mementosData) {
    unlockXiJinpingMemento(memento);
  }

  ensureAvailableInSlot(
    this.activeSlot?.maybeComponent?.slotData
  );

  originalFilterMementos.apply(this);

  for (const mementoEle of this.mementoEles) {

    const component = mementoEle.maybeComponent;
    const memData = component?.mementoData;

    if (!isXiJinpingMemento(memData)) {
      continue;
    }

    unlockXiJinpingMemento(memData);

    component.setHidden(false);
    component.setAvailable(true);
    component.updateData();
  }
};


/* ==================================================
   ALLOW IT TO BE SLOTTED
   ================================================== */

const originalSetActiveMemento =
  MementoSlot.prototype.setActiveMemento;

MementoSlot.prototype.setActiveMemento = function (mementoId) {

  if (
    mementoId?.startsWith("MEMENTO_Xi_Jinping_")
  ) {

    if (this._slotData) {

      const foundMemento =
        this._slotData.availableMementos.find(
          (m) => m.value == mementoId
        );

      this._slotData.currentMemento =
        foundMemento ?? {
          value: mementoId,
          name: XI_JINPING_MEMENTO_NAME,
          description: XI_JINPING_MEMENTO_DESCRIPTION,
          functionalDescription:
            XI_JINPING_MEMENTO_FUNCTIONAL_DESCRIPTION,
          icon: XI_JINPING_MEMENTO_ICON,
        };

      this.updateCurrentMemento();

      return true;
    }
  }

  return originalSetActiveMemento.apply(
    this,
    arguments
  );
};


/* ==================================================
   CORRECT ICON WHEN SLOTTED
   ================================================== */

const originalGetMementoSlotIcon =
  MementoSlot.prototype.getMementoSlotIcon;

MementoSlot.prototype.getMementoSlotIcon = function () {

  if (isXiJinpingMemento(this._slottedMemento)) {
    return `url("${XI_JINPING_MEMENTO_ICON}")`;
  }

  return originalGetMementoSlotIcon.apply(
    this,
    arguments
  );
};


/* ==================================================
   CORRECT ICON IN MEMENTO LIST
   ================================================== */

const originalMementoUpdateData =
  Memento.prototype.updateData;

Memento.prototype.updateData = function () {

  originalMementoUpdateData.apply(
    this,
    arguments
  );

  if (isXiJinpingMemento(this._mementoData)) {

    this.iconEle.style.backgroundImage =
      `url("${XI_JINPING_MEMENTO_ICON}")`;
  }
};