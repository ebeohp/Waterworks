export default class winGame extends Phaser.Scene {
  constructor() {
    super("winGame");
  }
  init() {}
  preload() {}
  create() {
    this.add.bitmapText(300,300, "pixelFont", "Level Complete!", 50).setDepth(100);
  }
  update() {}
  returnHome() {
    this.scene.start("playGame");
  }
}
