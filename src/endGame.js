export default class endGame extends Phaser.Scene {
  constructor() {
    super("endGame");
  }
  create() {}
  update() {}
  restartGame() {
    this.scene.start("bootGame");
  }
}
