export default class playGame extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {
    this.tubeGroup = this.physics.add.group();
    this.tube1 = this.tubeGroup.create(100,100, "tubeA").setScale(.5).setInteractive();
    
    this.target1=this.tube1.angle;
    this.tube1.on('pointerdown', function (pointer) {
        if(this.target1+90>360){
          this.target1=90;
        }else{
          this.target1 += 90;
        }
        this.rotate(this.tube1, this.target1);
    }, this);
  }
  rotate(tube, angle){
    this.tweens.add({
    targets: tube,
    angle: angle,
    }, this);
  }
  
  update() {
    
  }

  endGame() {
    this.scene.start("endGame");
  }
  winner() {
    this.scene.start("winGame");
  }
}
