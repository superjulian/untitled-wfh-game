import { GameObjects } from "phaser";

/**
 * Create typewriter animation for text
 * @param {Phaser.GameObjects.Text} target
 * @param {number} [speedInMs=25]
 * @returns {Promise<void>}
 */
export function animateText(
  target: Phaser.GameObjects.Text | undefined,
  speedInMs = 25
) {
  if (!target) {
    return;
  }
  // store original text
  const message = target.text;
  const invisibleMessage = message.replace(/[^ ]/g, " ");

  // clear text on screen
  target.text = "";

  // mutable state for visible text
  let visibleText = "";

  // use a Promise to wait for the animation to complete
  return new Promise<void>((resolve) => {
    const timer = target.scene.time.addEvent({
      delay: speedInMs,
      loop: true,
      callback() {
        // if all characters are visible, stop the timer
        if (target.text === message) {
          timer.destroy();
          return resolve();
        }

        // add next character to visible text
        visibleText += message[visibleText.length];

        // right pad with invisibleText
        const invisibleText = invisibleMessage.substring(visibleText.length);

        // update text on screen
        target.text = visibleText + invisibleText;
      },
    });
  });
}
/**
 *
 * @param {Phaser.Scene} scene
 * @param {number} totalWidth
 * @param {string} texture
 * @param {number} scrollFactor
 * @param {number} yIndex
 */
export const createAligned = (
  scene: Phaser.Scene,
  totalWidth: number,
  texture: string,
  scrollFactor: number,
  yIndex: number
) => {
  const w = scene.textures.get(texture).getSourceImage().width;
  const count = Math.ceil(totalWidth / w) * scrollFactor;

  let x = 0;
  for (let i = 0; i < count; ++i) {
    const m = scene.add
      .image(x, yIndex, texture)
      .setOrigin(0, 1)
      .setScrollFactor(scrollFactor);

    x += m.width;
  }
};

export enum PlantAction {
  grow = "grow",
  shrink = "shrink",
}

export enum PlantNames {
  aloe = "aloe",
  diffen = "diffen",
  poth = "poth",
}

export const changeOfficePlants = (
  plantMap: { [key: string]: { [key: number | string]: any } },
  plantName: string
) => {
  const numbers = [1, 2, 3, 4];
  const next = plantStats[plantName].healthNum;

  plantMap.aloe[next].visible = true;
  numbers.map((n) => {
    if (n !== next) {
      plantMap[plantName][n].visible = false;
    }
  });
};

export const plantHealthMap = {
  Poor: 1,
  Good: 2,
  Great: 3,
  Amazing: 4,
};

type PlantStats = {
  [key: string]: {
    [key: string]: any;
  };
};

export const plantStats: PlantStats = {
  diffen: {
    name: "Dieffenbachia",
    healthNum: 1,
    health: "Poor",
    water: 0,
    sunlight: 0,
    waterGoal: -60,
    sunGoal: 30,
  },
  aloe: {
    name: "Aloe",
    healthNum: 1,
    health: "Poor",
    water: 0,
    sunlight: 0,
    waterGoal: 15,
    sunGoal: -80,
  },
  poth: {
    name: "Pothos",
    healthNum: 1,
    health: "Poor",
    water: 0,
    sunlight: 0,
    waterGoal: -60,
    sunGoal: -60,
  },
};

export let currentPlant = PlantNames.diffen;

export const updateCurrentPlant = (newPlant: PlantNames) => {
  currentPlant = newPlant;
};

export const evaluatePlantStats = () => {
  for (const p in plantStats) {
    const waterDiff = Math.abs(plantStats[p].water - plantStats[p].waterGoal);
    const sunDiff = Math.abs(plantStats[p].sunlight - plantStats[p].sunGoal);
    console.log("water", p, plantStats[p].water);
    console.log("goal", p, plantStats[p].waterGoal);
    console.log("waterDiff", waterDiff);
    console.log("sunDiff", sunDiff);

    if (waterDiff < 10 && sunDiff < 10) {
      plantStats[p].health = "Amazing";
      plantStats[p].healthNum = 4;
    } else if (waterDiff < 20 && sunDiff < 20) {
      plantStats[p].health = "Great";
      plantStats[p].healthNum = 3;
    } else if (waterDiff < 30 && sunDiff < 30) {
      plantStats[p].health = "Good";
      plantStats[p].healthNum = 2;
    } else {
      plantStats[p].health = "Poor";
      plantStats[p].healthNum = 1;
    }
  }
};

// Bool that checks if the player has opened the computer since last checking
// on their plants
export let hasOpenedComputer = false;

export const setHasOpenedComputer = (bool: boolean) =>
  (hasOpenedComputer = bool);
