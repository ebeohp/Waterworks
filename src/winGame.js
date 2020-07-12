export default class winGame extends Phaser.Scene {
  constructor() {
    super("winGame");
  }
  init() {}
  preload() {}
  create() {}
  update() {}
  restartGame() {
    this.scene.start("bootGame");
  }
}
