export default class playGame extends Phaser.Scene {
  constructor() {
    super("playGame"); //this will be where we select levels.
  }
  create() { 
    //this.music = this.sound.add("music");
    this.background=this.add.image(0,0,"background");
        this.background.setOrigin(0,0);
    this.mentor = this.add.sprite(130,80, "itsy16"); 
    this.mentor.play("itsy16_anim").setScale(5);
    this.text = this.createSpeechBubble(220, 50,200, 60, 'Select a level!');
    

    this.buttons = this.physics.add.group();
    this.one = this.buttons.create(150,240, "level_buttons");
    this.one.setInteractive().setScale(2);
    this.one.on('pointerout', function (pointer) {
      this.one.setFrame(0);
    }, this);
    this.one.on('pointerover', function (pointer) {
      this.one.setFrame(1);
    }, this);
    this.one.on('pointerup', function (pointer) {
      this.scene.start("levelOne")
    }, this);

    this.two = this.buttons.create(300,240, "level_buttons");
    this.two.setInteractive().setScale(2);
      this.two.setFrame(2);
    this.two.on('pointerout', function (pointer) {
      this.two.setFrame(2);
    }, this);
    this.two.on('pointerover', function (pointer) {
      this.two.setFrame(3);
    }, this);
    this.two.on('pointerup', function (pointer) {
      this.scene.start("levelTwo")
    }, this);

    this.three = this.buttons.create(450,240, "level_buttons");
    this.three.setInteractive().setScale(2);
      this.three.setFrame(4);
    this.three.on('pointerout', function (pointer) {
      this.three.setFrame(4);
    }, this);
    this.three.on('pointerover', function (pointer) {
      this.three.setFrame(5);
    }, this);
    this.three.on('pointerup', function (pointer) {
      this.scene.start("levelThree")
    }, this);

    this.four = this.buttons.create(220,400, "level_buttons");
    this.four.setInteractive().setScale(2);
      this.four.setFrame(6);
    this.four.on('pointerout', function (pointer) {
      this.four.setFrame(6);
    }, this);
    this.four.on('pointerover', function (pointer) {
      this.four.setFrame(7);
    }, this);
    this.four.on('pointerup', function (pointer) {
      this.scene.start("levelFour")
    }, this);

    this.five = this.buttons.create(390,400, "level_buttons");
    this.five.setInteractive().setScale(2);
      this.five.setFrame(8);
    this.five.on('pointerout', function (pointer) {
      this.five.setFrame(8);
    }, this);
    this.five.on('pointerover', function (pointer) {
      this.five.setFrame(9);
    }, this);
    this.five.on('pointerup', function (pointer) {
      this.startLevel(5);
    }, this);

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

    var content = this.add.text(0, 0, quote, { fontFamily: 'Comic Sans MS', fontSize: 25, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
  }  
  
}
