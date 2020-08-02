export default class winGame extends Phaser.Scene {
  constructor() {
    super("winGame");
  }
  init(data) {
    this.level = data.Level;
    this.timer = data.Time;
  }
  preload() {}
  create() {
    this.texture=this.add.image(0,0,"texture");
    this.texture.setScale(1.5);
    this.fanfare = this.sound.add("win");
    this.fanfare.play();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    this.itsy=this.add.sprite(-100,200, "itsy");
    this.itsy.play("itsy_blink").setScale(2);
    var tween = this.tweens.add({
      targets: this.itsy,
      x: 400,
      ease: "Power1",
      duration: 2000,
      repeat: 0,
      callbackScope: this
  });
    this.add.bitmapText(100,300, "pixelFont", "Level " +this.level+ " Complete!", 70).setDepth(100);
  
    this.time.addEvent({  
      delay: 1000, 
      callback: this.text, 
      callbackScope: this, 
      loop: false
    });

  
  }
  text(){
    this.add.bitmapText(100,350, "pixelFont", "Time: " + this.timer +" seconds", 50).setDepth(100);
    this.add.bitmapText(100,400, "pixelFont", "Press SPACE to return to levels!", 40).setDepth(100);
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
