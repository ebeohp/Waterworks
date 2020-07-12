export default class levelOne extends Phaser.Scene {
    constructor() {
      super("levelOne");
    }
    create() { 
        this.add.bitmapText(30,30, "pixelFont", "Level 1", 40).setDepth(100);

        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(295,367, "tubeA").setScale(.5).setInteractive();
          this.tube1.angle=0;
        this.tube2 = this.tubeGroup.create(225,367,"tubeA").setScale(.5);
          this.tube2.angle = 90;
        this.tube3 = this.tubeGroup.create(365,367,"tubeA").setScale(.5);
         this.tube3.angle = 90;
        this.tube4 = this.tubeGroup.create(160,350,"tubeC").setScale(.5);
          this.tube4.angle = 180;
        this.tube5 = this.tubeGroup.create(425,350,"tubeC").setScale(.5);
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
        if(this.tube1.angle==90){
          this.tube1.disableInteractive();
          this.time.addEvent({  
            delay: 1000, 
            callback: this.complete, 
            callbackScope: this, 
            loop: false
        });
     
        }
      }
    }