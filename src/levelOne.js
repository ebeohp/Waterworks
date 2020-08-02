export default class levelOne extends Phaser.Scene {
    constructor() {
      super("levelOne");
    }
    create() { 
      this.initialTime = 0; //0secs
      this.timeLabel = this.add.bitmapText(300,25, "pixelFont", "Timer: ",25).setDepth(200);
      this.timeLabel.text = "Timer: " + this.timeFormat(this.initialTime);
      var timer = this.time.addEvent({
          delay:1000,
          callback: this.onCount,
          callbackScope: this,
          loop: true
      }); 


        this.turn=this.sound.add("turn");
        this.add.bitmapText(30,30, "pixelFont", "Level 1", 40).setDepth(100);
        this.background=this.add.image(0,0,"background");
        this.background.setOrigin(0,0).setScale(2.5);

        this.restart_b = this.add.sprite(480,40,"menu");
        this.restart_b.setFrame(2).setScale(.5).setInteractive();
      
        this.quit_b = this.add.sprite(550,40,"menu");
        this.quit_b.setFrame(4).setScale(.5).setInteractive();

        this.restart_b.on('pointerover', function (pointer) {
          this.restart_b.setFrame(3);
        }, this);
      
        this.quit_b.on('pointerover', function (pointer) {
          this.quit_b.setFrame(5);
        }, this);

        this.restart_b.on('pointerout', function (pointer) {
          this.restart_b.setFrame(2);
        }, this);
        this.quit_b.on('pointerout', function (pointer) {
          this.quit_b.setFrame(4);
        }, this);

        this.restart_b.on('pointerup', function (pointer) {
          this.scene.start("levelOne");
        }, this);
        this.quit_b.on('pointerup', function (pointer) {
          this.scene.start("playGame");
        }, this);
        

        this.mentor = this.add.sprite(99,84, "itsy16"); 
        this.mentor.play("itsy16_anim").setScale(2);
        this.createSpeechBubble(130, 30, 140, 50, 'Click to turn tubes!');

        this.house1=this.add.sprite(150,320,"houses");
          this.house1.setFrame(1).setScale(2);
        this.house2=this.add.sprite(450,320,"houses");
          this.house2.setFrame(0).setScale(2);

        /*Tubes begin below */
        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(295,426, "tubeA").setScale(.5).setInteractive();
          this.tube1.angle=0;
        this.tube2 = this.tubeGroup.create(225,426,"tubeA").setScale(.5);
          this.tube2.angle = 90;
        this.tube3 = this.tubeGroup.create(365,426,"tubeA").setScale(.5);
         this.tube3.angle = 90;
        this.tube4 = this.tubeGroup.create(160,409,"tubeC").setScale(.5);
          this.tube4.angle = 180;
        this.tube5 = this.tubeGroup.create(425,409,"tubeC").setScale(.5);
          this.tube5.angle = 90;

        this.target1=this.tube1.angle;

        
 
        this.tube1.on('pointerdown', function (pointer) {
            if(this.target1+90>360){
              this.target1=90;
            }else{
              this.target1 += 90;
            }
            this.rotate(this.tube1, this.target1);
            console.log(this.target1);
        }, this);

        
      }
      timeFormat(seconds){
        var minutes = Math.floor(seconds/60);
        var partInSeconds = seconds%60;
        partInSeconds = partInSeconds.toString().padStart(2,"0");
        return `${minutes}:${partInSeconds}`;
    }
    onCount(){
        this.initialTime+=1;
        this.timeLabel.text = "Timer: " + this.timeFormat(this.initialTime);
    }
      complete(){
        this.scene.start("winGame", {Level:1, Time: this.initialTime});
      }
      rotate(tube, angle){
        this.turn.play();
        this.tweens.add({
        targets: tube,
        angle: angle,
        }, this);

      }
      
      update() {
        if(this.tube1.angle==90){
          this.tube1.disableInteractive();
          this.time.addEvent({  
            delay: 500, 
            callback: this.complete, 
            callbackScope: this, 
            loop: false
          });
     
        }
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

    var content = this.add.text(0, 0, quote, { fontFamily: 'Comic Sans MS', fontSize: 18, color: '#000000', align: 'center', wordWrap: { width: bubbleWidth - (bubblePadding * 2) } });

    var b = content.getBounds();

    content.setPosition(bubble.x + (bubbleWidth / 2) - (b.width / 2), bubble.y + (bubbleHeight / 2) - (b.height / 2));
  }  
}