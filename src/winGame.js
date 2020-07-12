export default class winGame extends Phaser.Scene {
  constructor() {
    super("winGame");
  }
  init() {}
  preload() {}
  create() {
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.add.bitmapText(100,300, "pixelFont", "Level Complete!", 50).setDepth(100);
  }
  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      this.returnHome();
    }
  }
  returnHome() {
    this.scene.start("playGame");
  }
}
