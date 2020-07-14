export default class bootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    this.title=this.add.image(300,250, "title");
    this.tweens.add({
      targets:this.title,
      scale: 2,
      ease: 'Linear',
      duration: 2000
    });
    this.itsy=this.add.sprite(180,450,"itsy");
    this.itsy.play("itsy_blink").setScale(2.5);
    this.leaky=this.add.sprite(400,450,"leak");
    this.leaky.play("leak_anim").setScale(2);
    //this.scene.start("levelOne");
   
  }

  update() {}

  startGame() {
    this.scene.start("playGame");
  }
}
