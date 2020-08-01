export default class bootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    this.watermusic = this.sound.add("watermusic");
   
    this.texture=this.add.image(0,0,"texture");
    this.texture.setScale(1.5);

    this.water= this.add.sprite(0,0,"water");
    this.water.setFrame(0).setScale(4).setDepth(100);
    this.title=this.add.image(300,350, "title");
    this.tweens.add({
      targets:this.title,
      scale: 3.5,
      ease: 'Linear',
      duration: 2000
    });
    this.itsy=this.add.sprite(185,130,"itsy");
    this.itsy.play("itsy_blink").setScale(2);
    this.leaky=this.add.sprite(400,480,"leak");
    this.leaky.play("leak_anim").setScale(1.8);
    
    this.createSpeechBubble(290, 70, 220, 50, 'Hit SPACE to play!');
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    //this.scene.start("playGame");
  }
  update() {
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      this.waterRise();
     }
  }
  waterRise(){
    this.water.play("water_anim");
    this.watermusic.play();
    this.time.addEvent({  
      delay: 3000, 
      callback: this.startGame, 
      callbackScope: this, 
      loop: false
  });
  }
  createSpeechBubble (x, y, width, height, quote)
  {
    var bubbleWidth = width;
    var bubbleHeight = height;
    var bubblePadding = 10;
    var arrowHeight = bubbleHeight / 4;

    var bubble = this.add.graphics({ x: x, y: y });

    //  Bubble shadow
    bubble.fillStyle(0x222222, 0.5);
    bubble.fillRoundedRect(6, 6, bubbleWidth, bubbleHeight, 16);

    //  Bubble color
    bubble.fillStyle(0xffffff, 1);

    //  Bubble outline line style
    bubble.lineStyle(4, 0x565656, 1);

    //  Bubble shape and outline
    bubble.strokeRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);
    bubble.fillRoundedRect(0, 0, bubbleWidth, bubbleHeight, 16);

    //  Calculate arrow coordinates
    var point1X = Math.floor(bubbleWidth / 7);
    var point1Y = bubbleHeight;
    var point2X = Math.floor((bubbleWidth / 7) * 2);
    var point2Y = bubbleHeight;
    var point3X = Math.floor(bubbleWidth / 7);
    var point3Y = Math.floor(bubbleHeight + arrowHeight);

    //  Bubble arrow shadow
    bubble.lineStyle(4, 0x222222, 0.5);
    bubble.lineBetween(point2X - 1, point2Y + 6, point3X + 2, point3Y);

    //  Bubble arrow fill
    bubble.fillTriangle(point1X, point1Y, point2X, point2Y, point3X, point3Y);
    bubble.lineStyle(2, 0x565656, 1);
    bubble.lineBetween(point2X, point2Y, point3X, point3Y);
    bubble.lineBetween(point1X, point1Y, point3X, point3Y);

    var content = this.add.text(0, 0, quote, { fontFamily: 'Comic Sans MS', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
  }  
  startGame() {
    this.scene.start("playGame");
  }
}
