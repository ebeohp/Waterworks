export default class levelFive extends Phaser.Scene {
    constructor() {
      super("levelFive"); 
    }
    create() { 
      this.turn=this.sound.add("turn");
      this.add.bitmapText(30,30, "pixelFont", "Level 5", 40).setDepth(100);
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
        this.scene.start("levelFive");
      }, this);
      this.quit_b.on('pointerup', function (pointer) {
        this.scene.start("playGame");
      }, this);
      
      this.mentor = this.add.sprite(99,84, "itsy16"); 
      this.mentor.play("itsy16_anim").setScale(2);
      this.createSpeechBubble(150, 30, 140, 50, 'A bigger map!');

      this.house1=this.add.sprite(450,320,"houses");
          this.house1.setFrame(0).setScale(2);

      this.cameras.main.setBounds(0,0,800,1200); //revert x back to 0 later
        var cursors = this.input.keyboard.createCursorKeys();
        var controlConfig = {
          camera: this.cameras.main,
          left: cursors.left,
          right: cursors.right,
          up: cursors.up,
          down: cursors.down,
          acceleration: 0.06,
          drag: 0.0005,
          maxSpeed: 1.0
        };
        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);


      /*Tubes begin below*/
      this.tubeGroup = this.physics.add.group();
      this.tube1 = this.tubeGroup.create(470,410, "tubeC").setScale(.5);
          this.tube1.angle=180;
      //
      this.tube2 = this.tubeGroup.create(550,427, "tubeC").setScale(.5).setInteractive();
          this.target2=this.tube2.angle=0;
          this.tube2.setOrigin(0.75,0.25);
      this.tube3 = this.tubeGroup.create(550,510, "tubeA").setScale(.5).setInteractive();
          this.target3=this.tube3.angle=180;
      this.tube4 = this.tubeGroup.create(550,580, "tubeA").setScale(.5).setInteractive();
          this.target4=this.tube4.angle=180;
      this.tube5 = this.tubeGroup.create(550,646, "tubeC").setScale(.5).setInteractive();
          this.target5=this.tube5.angle=180;
          this.tube5.setOrigin(0.75,0.25);
      this.tube6 = this.tubeGroup.create(620,646, "tubeB").setScale(.5).setInteractive();
          this.target6=this.tube6.angle=90;
          this.tube6.setOrigin(0.60,0.5);
      this.tube7 = this.tubeGroup.create(620,580, "tubeA").setScale(.5).setInteractive();
          this.target7=this.tube7.angle=180;
      this.tube8 = this.tubeGroup.create(620,510, "tubeA").setScale(.5).setInteractive();
          this.tube8.angle=180;
      //
      this.tube9 = this.tubeGroup.create(620,427, "tubeC").setScale(.5).setInteractive();
          this.target9=this.tube9.angle=270;
          this.tube9.setOrigin(0.75,0.25);
      this.tube10 = this.tubeGroup.create(690,427, "tubeC").setScale(.5).setInteractive();
          this.target10=this.tube10.angle=0;
          this.tube10.setOrigin(0.75,0.25);
      this.tube11 = this.tubeGroup.create(690,510, "tubeA").setScale(.5).setInteractive();
          this.target11=this.tube11.angle=0;
      this.tube12 = this.tubeGroup.create(690,580, "tubeA").setScale(.5).setInteractive();
          this.target12=this.tube12.angle=0;
      this.tube13 = this.tubeGroup.create(690,650, "tubeB").setScale(.5).setInteractive();
          this.target13=this.tube13.angle=360;
          this.tube13.setOrigin(0.60,0.5);
      this.tube14 = this.tubeGroup.create(695,720, "tubeB").setScale(.5).setInteractive();
          this.target14=this.tube14.angle=180;
          this.tube14.setOrigin(0.60,0.5);
      this.tube15 = this.tubeGroup.create(690,810, "tubeD").setScale(.5).setInteractive();
          this.target15=this.tube15.angle=180; 
          this.tube15.setOrigin(0.5,0.25);
      this.tube16 = this.tubeGroup.create(780,720, "tubeD").setScale(.5).setInteractive();
          this.target16=this.tube16.angle=90; 
          this.tube16.setOrigin(0.5,0.25);
      
      

        
      this.tube2.on('pointerdown', function (pointer) {
          if(this.target2+90>360){
             this.target2=90;
          }else{
            this.target2+= 90;
          }
          this.rotate(this.tube2, this.target2);
      }, this);
      this.tube3.on('pointerdown', function (pointer) {
          if(this.target3+90>360){
            this.target3=90;
          }else{
            this.target3+= 90;
          }
          this.rotate(this.tube3, this.target3);
      }, this);
      this.tube4.on('pointerdown', function (pointer) {
          if(this.target4+90>360){
            this.target4=90;
          }else{
            this.target4+= 90;
          }
          this.rotate(this.tube4, this.target4);
       }, this);
      this.tube5.on('pointerdown', function (pointer) {
          if(this.target5+90>360){
            this.target5=90;
          }else{
            this.target5+= 90;
          }
          this.rotate(this.tube5, this.target5);
      }, this);
      this.tube6.on('pointerdown', function (pointer) {
          if(this.target6+90>360){
            this.target6=90;
          }else{
            this.target6+= 90;
          }
          this.rotate(this.tube6, this.target6);
          }, this);
      this.tube7.on('pointerdown', function (pointer) {
          if(this.target7+90>360){
            this.target7=90;
          }else{
            this.target7+= 90;
         }
          this.rotate(this.tube7, this.target7);
      }, this);
    }
    complete(){
      console.log("completed");
          this.add.bitmapText(80,130, "pixelFont", "Level Complete!", 80).setDepth(100);
          this.createSpeechBubble(130, 30, 140, 50, 'Congrats, matey');
    }
    rotate(tube, angle){
      this.turn.play();
      this.tweens.add({
      targets: tube,
      angle: angle,
      }, this);
  
    }
    
    update(time,delta) {
      this.controls.update(delta);
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