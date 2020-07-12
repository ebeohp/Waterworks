export default class levelTwo extends Phaser.Scene {
    constructor() {
      super("levelTwo");
    }
    //add a moves counter
    create() {
        this.add.bitmapText(30,30, "pixelFont", "Level 2", 40).setDepth(100);

        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(100,440, "tubeA").setScale(.5).setInteractive();
            this.tube1.angle=270; 
            this.target1=this.tube1.angle;
        this.tube2 = this.tubeGroup.create(197,440, "tubeA").setScale(.5).setInteractive();
            this.tube2.angle=270; 
            this.target2=this.tube2.angle;
        this.tube3 = this.tubeGroup.create(392,302, "tubeA").setScale(.5).setInteractive();
            this.target3=this.tube3.angle=270; 
        this.tube4 = this.tubeGroup.create(116,507, "tubeC").setScale(.5).setInteractive();
            this.target4=this.tube4.angle=270; //180 correct
            console.log(this.tube4.angle)
        this.tube5 = this.tubeGroup.create(180,507, "tubeC").setScale(.5).setInteractive();
            this.target5=this.tube5.angle=90; //90 correct
            
        this.tube6 = this.tubeGroup.create(278,373, "tubeC").setScale(.5).setInteractive();
            this.target6=this.tube6.angle=90; //360 correct
            
        this.tube7 = this.tubeGroup.create(309,507, "tubeC").setScale(.5).setInteractive();
            this.target7=this.tube7.angle=270; //180 correct
            
        this.tube8 = this.tubeGroup.create(375,507, "tubeC").setScale(.5).setInteractive();
            this.target8=this.tube8.angle=180; //90 correct
        this.tube9 = this.tubeGroup.create(100,300, "tubeA").setScale(.5); 
        this.tube10 = this.tubeGroup.create(100,370, "tubeA").setScale(.5); 
        this.tube11 = this.tubeGroup.create(213,372, "tubeC").setScale(.5);
           this.tube11.angle=270;
        this.tube12 = this.tubeGroup.create(295,442, "tubeA").setScale(.5); 
        this.tube13 = this.tubeGroup.create(392,442, "tubeA").setScale(.5);
        this.tube14 = this.tubeGroup.create(392,372, "tubeA").setScale(.5); 
            
        this.thing = 5;

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
        console.log();
        if((this.tube1.angle==360||this.tube1.angle==180|| this.tube1.angle==0|| this.tube1.angle==-180) && 
           (this.tube2.angle==360||this.tube2.angle==180|| this.tube2.angle==0|| this.tube2.angle==-180) && 
           (this.tube3.angle==360||this.tube3.angle==180|| this.tube3.angle==0|| this.tube3.angle==-180) && 
            (this.tube4.angle==180 || this.tube4.angle==-180)&&
            this.tube5.angle==90 && 
            (this.tube6.angle==360|| this.tube6.angle==0) &&
            (this.tube7.angle==180|| this.tube7.angle==-180) &&
            this.tube8.angle==90
          ){ console.log("completed11");
        
            this.time.addEvent({  
              delay: 500, 
              callback: this.complete, 
              callbackScope: this, 
              loop: false
          });
        }
    }
  
  }