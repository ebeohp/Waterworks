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
          this.target2=this.tube2.angle=180;
          this.tube2.setOrigin(0.75,0.25);
      this.tube3 = this.tubeGroup.create(550,510, "tubeA").setScale(.5).setInteractive();
          this.target3=this.tube3.angle=90;
      this.tube4 = this.tubeGroup.create(550,580, "tubeA").setScale(.5).setInteractive();
          this.target4=this.tube4.angle=90;
      this.tube5 = this.tubeGroup.create(550,646, "tubeC").setScale(.5).setInteractive();
          this.target5=this.tube5.angle=270;
          this.tube5.setOrigin(0.75,0.25);
      this.tube6 = this.tubeGroup.create(620,646, "tubeB").setScale(.5).setInteractive();
          this.target6=this.tube6.angle=360;
          this.tube6.setOrigin(0.60,0.5);
      this.tube7 = this.tubeGroup.create(620,580, "tubeA").setScale(.5).setInteractive();
          this.target7=this.tube7.angle=90;
      this.tube8 = this.tubeGroup.create(620,510, "tubeA").setScale(.5).setInteractive();
          this.tube8.angle=180;
      //
      this.tube9 = this.tubeGroup.create(620,427, "tubeC").setScale(.5).setInteractive();
          this.target9=this.tube9.angle=0;
          this.tube9.setOrigin(0.75,0.25);
      this.tube10 = this.tubeGroup.create(690,427, "tubeC").setScale(.5).setInteractive();
          this.target10=this.tube10.angle=90;
          this.tube10.setOrigin(0.75,0.25);
      this.tube11 = this.tubeGroup.create(690,510, "tubeA").setScale(.5).setInteractive();
          this.target11=this.tube11.angle=90;
      this.tube12 = this.tubeGroup.create(690,580, "tubeA").setScale(.5).setInteractive();
          this.tube12.angle=0;
      //
      this.tube13 = this.tubeGroup.create(690,650, "tubeB").setScale(.5).setInteractive();
          this.target13=this.tube13.angle=180;
          this.tube13.setOrigin(0.60,0.5);
      this.tube14 = this.tubeGroup.create(695,720, "tubeB").setScale(.5).setInteractive();
          this.target14=this.tube14.angle=0;
          this.tube14.setOrigin(0.60,0.5);
      this.tube15 = this.tubeGroup.create(690,810, "tubeD").setScale(.5).setInteractive();
          this.tube15.angle=180; 
          this.tube15.setOrigin(0.5,0.25);
      //
      this.tube16 = this.tubeGroup.create(780,720, "tubeD").setScale(.5).setInteractive();
          this.target16=this.tube16.angle=0; 
          this.tube16.setOrigin(0.5,0.25);
      this.tube17 = this.tubeGroup.create(362,580, "tubeD").setScale(.5).setInteractive();
          this.target17=this.tube17.angle=0; 
          this.tube17.setOrigin(0.5,0.25);
      this.tube18 = this.tubeGroup.create(466,580, "tubeC").setScale(.5).setInteractive();
          this.target18=this.tube18.angle=270;
          this.tube18.setOrigin(0.75,0.25);
      this.tube19 = this.tubeGroup.create(466,660, "tubeA").setScale(.5).setInteractive();
          this.target19=this.tube19.angle=0;
      this.tube20 = this.tubeGroup.create(466,735, "tubeC").setScale(.5).setInteractive();
          this.target20=this.tube20.angle=180;
          this.tube20.setOrigin(0.75,0.25);
      this.tube21 = this.tubeGroup.create(548,735, "tubeA").setScale(.5).setInteractive();
          this.target21=this.tube21.angle=0;
      this.tube22 = this.tubeGroup.create(625,735, "tubeD").setScale(.5).setInteractive();
          this.target22=this.tube22.angle=90; 
          this.tube22.setOrigin(0.5,0.25);
      this.tube23 = this.tubeGroup.create(362,680, "tubeD").setScale(.5).setInteractive();
          this.target23=this.tube23.angle=180; 
          this.tube23.setOrigin(0.5,0.25); /*no score*/
      
      
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
      
      this.tube9.on('pointerdown', function (pointer) {
        if(this.target9+90>360){
          this.target9=90;
        }else{
          this.target9+= 90;
        }
        this.rotate(this.tube9, this.target9);
      }, this);
      this.tube10.on('pointerdown', function (pointer) {
          if(this.target10+90>360){
            this.target10=90;
          } else{
          this.target10+= 90;
          }
          this.rotate(this.tube10, this.target10);
      }, this);
      this.tube11.on('pointerdown', function (pointer) {
          if(this.target11+90>360){
            this.target11=90;
          }else{
            this.target11+= 90;
          }
          this.rotate(this.tube11, this.target11);
      }, this);
      this.tube13.on('pointerdown', function (pointer) {
          if(this.target13+90>360){
            this.target13=90;
          }else{
            this.target13+= 90;
          }
          this.rotate(this.tube13, this.target13);  
          console.log(this.tube13.angle);
      }, this);
      this.tube14.on('pointerdown', function (pointer) {
          if(this.target14+90>360){
            this.target14=90;
          }else{
            this.target14+= 90;
          }
          this.rotate(this.tube14, this.target14);
      }, this);
      this.tube16.on('pointerdown', function (pointer) {
          if(this.target16+90>360){
            this.target16=90;
          }else{
            this.target16+= 90;
          }
          this.rotate(this.tube16, this.target16);
      }, this);
      this.tube17.on('pointerdown', function (pointer) {
        if(this.target17+90>360){
          this.target17=90;
        }else{
          this.target17+= 90;
        }
        this.rotate(this.tube17, this.target17);
        console.log(this.tube17.angle);
      }, this);
      this.tube18.on('pointerdown', function (pointer) {
        if(this.target18+90>360){
          this.target18=90;
        }else{
          this.target18+= 90;
        }
        this.rotate(this.tube18, this.target18);
      
       }, this);
       this.tube19.on('pointerdown', function (pointer) {
        if(this.target19+90>360){
          this.target19=90;
        }else{
          this.target19+= 90;
        }
        this.rotate(this.tube19, this.target19);
      }, this);
      this.tube20.on('pointerdown', function (pointer) {
          if(this.target20+90>360){
            this.target20=90;
          }else{
            this.target20+= 90;
          }
          this.rotate(this.tube20, this.target20);
      }, this);
      this.tube21.on('pointerdown', function (pointer) {
          if(this.target21+90>360){
            this.target21=90;
          }else{
            this.target21+= 90;
          }
          this.rotate(this.tube21, this.target21);
      }, this);
      this.tube22.on('pointerdown', function (pointer) {
          if(this.target22+90>360){
            this.target22=90;
          }else{
          this.target22+= 90;
          }
          this.rotate(this.tube22, this.target22);
      }, this);
      this.tube23.on('pointerdown', function (pointer) {
          if(this.target23+90>360){
            this.target23=90;
          }else{
            this.target23+= 90;
          }
          this.rotate(this.tube23, this.target23);
      }, this);
    }
    complete(){
          
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
      if(
        (this.tube3.angle%180==0|| this.tube3.angle==-180) &&  //A 0, 360, 180
        (this.tube4.angle%180==0|| this.tube4.angle==-180) &&
        (this.tube7.angle%180==0|| this.tube7.angle==-180) &&
        (this.tube11.angle%180==0|| this.tube11.angle==-180) &&
        (this.tube19.angle%180==0|| this.tube19.angle==-180) &&

        (this.tube21.angle==90 || this.tube21.angle==-90) && //A 90

        this.tube2.angle ==0 && //C0
        this.tube10.angle ==0 &&
        this.tube18.angle ==0 &&

        (this.tube5.angle==180 || this.tube5.angle==-180) && //C180
        (this.tube20.angle==180 || this.tube20.angle==-180)  &&

        (this.tube9.angle==270 || this.tube9.angle==-180|| this.tube9.angle==-90) &&//C270

        this.tube16.angle == 90 &&//D90
        this.tube22.angle == 90 &&
        
        (this.tube14.angle==180 || this.tube14.angle==-180) && //B180
        
        this.tube6.angle==90 &&//B90
        
        this.tube13.angle==0 &&//B0
        
        this.tube17.angle == -90 //D270
      ){
        this.time.addEvent({  
          delay: 500, //500
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