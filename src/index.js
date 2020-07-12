import Phaser from "phaser";

import Loading from "./Loading";
import bootGame from "./bootGame";
import playGame from "./playGame";
import endGame from "./endGame";
import winGame from "./winGame";
import levelOne from "./levelOne";

const config = {
  width: 600,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Loading, bootGame, playGame,endGame, winGame,levelOne],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

export default game;
