export default class bootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    
    this.scene.start("levelTwo");
   
  }

  update() {}

  startGame() {
    this.scene.start("playGame");
  }
}
