export default class levelTwo extends Phaser.Scene {
    constructor() {
      super("levelTwo");
    }
    //add a moves counter
    create() {
        this.add.bitmapText(30,30, "pixelFont", "Level 2", 40).setDepth(100);
        this.background=this.add.image(-60,-35,"background");
        this.background.setOrigin(0,0).setScale(2);
        this.mentor = this.add.sprite(99,84, "itsy16"); 
        this.mentor.play("itsy16_anim").setScale(2);
        this.createSpeechBubble(130, 60, 70, 25, 'Yay!');

        this.house1=this.add.sprite(150,217,"houses");
          this.house1.setFrame(0).setScale(2);
        this.house2=this.add.sprite(450,213,"houses");
          this.house2.setFrame(2).setScale(2);

        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(150,440, "tubeA").setScale(.5).setInteractive();
            this.tube1.angle=270; 
            this.target1=this.tube1.angle;
        this.tube2 = this.tubeGroup.create(247,440, "tubeA").setScale(.5).setInteractive();
            this.tube2.angle=270; 
            this.target2=this.tube2.angle;
        this.tube3 = this.tubeGroup.create(442,302, "tubeA").setScale(.5).setInteractive();
            this.target3=this.tube3.angle=270; 
        this.tube4 = this.tubeGroup.create(166,507, "tubeC").setScale(.5).setInteractive();
            this.target4=this.tube4.angle=270; //180 correct
        this.tube5 = this.tubeGroup.create(230,507, "tubeC").setScale(.5).setInteractive();
            this.target5=this.tube5.angle=90; //90 correct
            
        this.tube6 = this.tubeGroup.create(328,373, "tubeC").setScale(.5).setInteractive();
            this.target6=this.tube6.angle=90; //360 correct
            
        this.tube7 = this.tubeGroup.create(359,507, "tubeC").setScale(.5).setInteractive();
            this.target7=this.tube7.angle=270; //180 correct
            
        this.tube8 = this.tubeGroup.create(425,507, "tubeC").setScale(.5).setInteractive();
            this.target8=this.tube8.angle=180; //90 correct
        this.tube9 = this.tubeGroup.create(150,300, "tubeA").setScale(.5); 
        this.tube10 = this.tubeGroup.create(150,370, "tubeA").setScale(.5); 
        this.tube11 = this.tubeGroup.create(263,372, "tubeC").setScale(.5);
           this.tube11.angle=270;
        this.tube12 = this.tubeGroup.create(345,442, "tubeA").setScale(.5); 
        this.tube13 = this.tubeGroup.create(442,442, "tubeA").setScale(.5);
        this.tube14 = this.tubeGroup.create(442,372, "tubeA").setScale(.5); 
          
        this.tube1.on('pointerdown', function (pointer) {
            if(this.target1+90>360){
              this.target1=90;
            }else{
              this.target1 += 90;
            }
            this.rotate(this.tube1, this.target1);
            console.log(this.target1);
        }, this);
        this.tube2.on('pointerdown', function (pointer) {
            if(this.target2+90>360){
              this.target2=90;
            }else{
              this.target2 += 90;
            }
            this.rotate(this.tube2, this.target2);
            console.log(this.target2);
        }, this);
        this.tube3.on('pointerdown', function (pointer) {
            if(this.target3+90>360){
              this.target3=90;
            }else{
              this.target3 += 90;
            }
            this.rotate(this.tube3, this.target3);
            console.log(this.target3);
        }, this);
        this.tube4.on('pointerdown', function (pointer) {
            if(this.target4+90>360){
              this.target4=90;
            }else{
              this.target4 += 90;
            }
            this.rotate(this.tube4, this.target4);
            console.log(this.target4);
        }, this);
        this.tube5.on('pointerdown', function (pointer) {
            if(this.target5+90>360){
              this.target5=90;
            }else{
              this.target5 += 90;
            }
            this.rotate(this.tube5, this.target5);
            console.log(this.target5);
        }, this);
      
        this.tube6.on('pointerdown', function (pointer) {
            if(this.target6+90>360){
              this.target6=90;
            }else{
              this.target6 += 90;
            }
            this.rotate(this.tube6, this.target6);
            console.log(this.target6);
        }, this);
        this.tube7.on('pointerdown', function (pointer) {
            if(this.target7+90>360){
              this.target7=90;
            }else{
              this.target7 += 90;
            }
            this.rotate(this.tube7, this.target7);
            console.log(this.target7);
        }, this);
        this.tube8.on('pointerdown', function (pointer) {
            if(this.target8+90>360){
              this.target8=90;
            }else{
              this.target8 += 90;
            }
            this.rotate(this.tube8, this.target8);
            console.log(this.target8);
        }, this);

        
    }
    complete(){
        console.log("completed");
        this.scene.start("winGame");
      }
    rotate(tube, angle){
        this.tweens.add({
        targets: tube,
        angle: angle,
        }, this);
    }
    update() { 
        
        if((this.tube1.angle%180==0|| this.tube1.angle==-180) && //mod for meaning 360,180,0
           (this.tube2.angle%180==0|| this.tube2.angle==-180) && 
           (this.tube3.angle%180==0|| this.tube3.angle==-180) && 
            (this.tube4.angle==180 || this.tube4.angle==-180)&&
            this.tube5.angle==90 && 
            (this.tube6.angle==360|| this.tube6.angle==0) &&
            (this.tube7.angle==180|| this.tube7.angle==-180) &&
            this.tube8.angle==90
        ){ 
        
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