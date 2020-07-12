import logo from "./assets/images/logo.png";
import fontPng from "./assets/font/font.png";
import fontXml from "./assets/font/font.xml";
import progress from "./assets/sprites/progress.png";
import tubeA from "./assets/images/tube1.png";
import tubeB from "./assets/images/tube2.png";
import tubeC from "./assets/images/tube3.png";
class Loading extends Phaser.Scene {
  constructor() {
    super("loadGame");
  }
  preload() {
    this.load.bitmapFont("pixelFont", fontPng, fontXml);
    this.load.spritesheet("tubeA", tubeA, {
      frameWidth: 80,
      frameHeight: 160,
    });
    this.load.spritesheet("tubeB", tubeB, {
      frameWidth: 120,
      frameHeight: 160,
    });
    this.load.spritesheet("tubeC", tubeC, {
      frameWidth: 130,
      frameHeight: 130,
    });

    this.load.spritesheet("bar", progress, {
      frameWidth: 200,
      frameHeight: 16,
    });
    this.load.image("logo", logo);
    let text = this.add
      .text(300, 550, "0%", {
        font: "40px",
      })
      .setOrigin(0.5);

    this.load.on("progress", function (perc) {
      text.setText(perc * 100 + "%");
    });
  }
  create() {
    this.anims.create({
      key: "loading",
      frames: this.anims.generateFrameNumbers("bar"),
      frameRate: 12,
    });
    this.progbar = this.add.sprite(300, 350, "bar");
    this.progbar.play("loading").setScale(2);

    this.logo = this.add.image(300, 230, "logo");
    this.logo.setScale(7);
   /* this.time.addEvent({
      delay: 4000,
      callback: this.finishLoad,
      callbackScope: this,
      loop: true,
    });*/
    this.scene.start("bootGame"); //delete and revert to above for prod

  }
  update() {}
  finishLoad() {
    this.scene.start("bootGame");
  }
}

export default Loading;
