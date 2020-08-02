import logo from "./assets/images/logo.png";
import fontPng from "./assets/font/font.png";
import fontXml from "./assets/font/font.xml";
import progress from "./assets/sprites/progress.png";
import tubeA from "./assets/images/tube1.png";
import tubeB from "./assets/images/tube2.png";
import tubeC from "./assets/images/tube3.png";
import tubeD from "./assets/images/tube4.png";
import background from "./assets/images/background.png";
import background2 from "./assets/images/background2.png";
import title from "./assets/images/title2.png";
import itsy from "./assets/sprites/itsy.png";
import itsy16 from "./assets/sprites/itsy16.png";
import leak from "./assets/sprites/leak.png";
import houses from "./assets/sprites/houses.png";
import level_buttons from "./assets/sprites/level_buttons.png";
import water from "./assets/sprites/water.png";
import texture from "./assets/images/texture.png";
import music from "./assets/sound/music.mp3";
import watermusic from "./assets/sound/water.mp3";
import win from "./assets/sound/win.mp3";
import turn from "./assets/sound/turn.mp3";
import menu from "./assets/sprites/menu.png";
class Loading extends Phaser.Scene {
  constructor() {
    super("loadGame");
  }
  preload() {
    this.load.bitmapFont("pixelFont", fontPng, fontXml);

    this.load.audio("music", music);
    this.load.audio("watermusic", watermusic);
    this.load.audio("win", win);
    this.load.audio("turn", turn);

    
    this.load.image("background",background);
    this.load.image("background2",background2);
    this.load.image("title", title);
    this.load.image("texture",texture);
    this.load.spritesheet("level_buttons", level_buttons, {
      frameWidth: 32,
      frameHeight: 32,
    });
  
    this.load.spritesheet("menu", menu, {
      frameWidth: 160,
      frameHeight: 160,
    });
    this.load.spritesheet("water", water, {
      frameWidth: 300,
      frameHeight: 300,
    });
    this.load.spritesheet("itsy", itsy, {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet("houses", houses, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet("itsy16", itsy16, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("leak", leak, {
      frameWidth: 80,
      frameHeight:160,
    });
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
    this.load.spritesheet("tubeD", tubeD, {
      frameWidth: 160,
      frameHeight: 320,
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
      key: "confetti_anim",
      frames: this.anims.generateFrameNumbers("confetti"),
      frameRate: 10,
    });
    this.anims.create({
      key: "water_anim",
      frames: this.anims.generateFrameNumbers("water"),
      frameRate: 5,
    });
    this.anims.create({
      key: "loading",
      frames: this.anims.generateFrameNumbers("bar"),
      frameRate: 20,
    });
    this.anims.create({
      key: "itsy_blink",
      frames: this.anims.generateFrameNumbers("itsy"),
      frameRate: 5,
      repeat: -1
    });
    this.anims.create({
      key: "itsy16_anim",
      frames: this.anims.generateFrameNumbers("itsy16"),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "leak_anim",
      frames: this.anims.generateFrameNumbers("leak"),
      frameRate: 3,
      repeat: -1
    });
    
    this.logo = this.add.image(300, 230, "logo");
    this.logo.setScale(7);
    this.time.addEvent({
      delay: 2000,
      callback: this.finishLoad,
      callbackScope: this,
      loop: true,
    });
  }
  update() {}
  finishLoad() {
    this.scene.start("bootGame");
  }
}

export default Loading;
