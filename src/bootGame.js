export default class bootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    this.startGame();
  }

  update() {}

  startGame() {
    this.scene.start("playGame");
  }
}
