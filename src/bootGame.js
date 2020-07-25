export default class bootGame extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {}
  create() {
    this.texture=this.add.image(0,0,"texture");
    this.texture.setScale(1.5);

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
    
    this.createSpeechBubble(290, 70, 180, 50, 'Hit SPACE to play!');
    this.scene.start("levelFour");
  }
  update() {

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

    var content = this.add.text(0, 0, quote, { fontFamily: 'Arial', fontSize: 20, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
  }  
  startGame() {
    this.scene.start("playGame");
  }
}
