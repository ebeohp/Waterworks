export default class levelThree extends Phaser.Scene {
    constructor() {
      super("levelThree");
    }
    create() { //implement camera before structure.
        this.add.bitmapText(30,30, "pixelFont", "Level 3", 40).setDepth(100);// this has to follow camera

        this.tubeGroup = this.physics.add.group();
       /*

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
    */
     
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
    update() {}
  

  }
  