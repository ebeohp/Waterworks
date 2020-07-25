export default class levelFour extends Phaser.Scene {
    constructor() {
      super("levelFour"); 
    }
    create() { 
      this.background= this.add.image(0,0, "background2"); //image is 1200x1200
        this.background.setOrigin(0);
        this.level = this.add.bitmapText(150,30, "pixelFont", "Level 4", 40).setDepth(100);
          this.level.setScrollFactor(1);
        this.cameras.main.setBounds(120,0,600,1000);
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
        
        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(250,337, "tubeA").setScale(.5).setInteractive();
          this.target1=this.tube1.angle=0;
        this.tube2 = this.tubeGroup.create(249,411, "tubeC").setScale(.5).setInteractive();
          this.target2=this.tube2.angle=180;
          this.tube2.setOrigin(0.75,0.25);
        this.tube3 = this.tubeGroup.create(333,410, "tubeA").setScale(.5).setInteractive();
          this.tube3.angle=90; 
        //
        this.tube4 = this.tubeGroup.create(403,412, "tubeB").setScale(.5).setInteractive();
          this.target4=this.tube4.angle=0; //0
          this.tube4.setOrigin(0.60,0.5);
        this.tube5 = this.tubeGroup.create(409,347, "tubeB").setScale(.5).setInteractive();
          this.target5=this.tube5.angle=270;
          this.tube5.setOrigin(0.70,0.5);
          
        this.tube6 = this.tubeGroup.create(342,351, "tubeC").setScale(.5).setInteractive();
          this.target6=this.tube6.angle=180;
          this.tube6.setOrigin(0.75,0.25);
        this.tube7 = this.tubeGroup.create(490,350, "tubeD").setScale(.5).setInteractive();
          this.target7=this.tube7.angle=90; //90
          this.tube7.setOrigin(0.5,0.25);
          
        this.tube8 = this.tubeGroup.create(405,485, "tubeC").setScale(.5).setInteractive();
          this.target8=this.tube8.angle=180;
          this.tube8.setOrigin(0.75,0.25);
        this.tube9 = this.tubeGroup.create(490,485, "tubeD").setScale(.5).setInteractive();
          this.target9=this.tube9.angle=90;
          this.tube9.setOrigin(0.5,0.25);

        //dummy blocks below
        this.tube10 = this.tubeGroup.create(249,484, "tubeC").setScale(.5).setInteractive();
          this.target10=this.tube10.angle=180;
          this.tube10.setOrigin(0.75,0.25);
        this.tube11 = this.tubeGroup.create(322,483, "tubeA").setScale(.5).setInteractive();
          this.target11=this.tube11.angle=90;
        
        this.tube1.on('pointerdown', function (pointer) {
            if(this.target1+90>360){
              this.target1=90;
            }else{
              this.target1 += 90;
            }
            this.rotate(this.tube1, this.target1);
   
        }, this);
        this.tube2.on('pointerdown', function (pointer) {
          if(this.target2+90>360){
            this.target2=90;
          }else{
            this.target2 += 90;
          }
          this.rotate(this.tube2, this.target2);
 
      }, this);
      this.tube4.on('pointerdown', function (pointer) {
        if(this.target4+90>360){
          this.target4=90;
        }else{
          this.target4 += 90;
        }
        this.rotate(this.tube4, this.target4);
        
    }, this);
    this.tube5.on('pointerdown', function (pointer) {
      if(this.target5+90>360){
        this.target5=90;
      }else{
        this.target5 += 90;
      }
      this.rotate(this.tube5, this.target5);
      console.log(this.tube5.angle);
    }, this);
    this.tube6.on('pointerdown', function (pointer) {
      if(this.target6+90>360){
        this.target6=90;
      }else{
        this.target6 += 90;
      }
      this.rotate(this.tube6, this.target6);

    }, this);
    this.tube7.on('pointerdown', function (pointer) {
      if(this.target7+90>360){
        this.target7=90;
      }else{
        this.target7 += 90;
      }
      this.rotate(this.tube7, this.target7);
      console.log(this.tube7.angle);
    }, this);
    this.tube8.on('pointerdown', function (pointer) {
      if(this.target8+90>360){
        this.target8=90;
      }else{
        this.target8 += 90;
      }
      this.rotate(this.tube8, this.target8);

    }, this);
    this.tube9.on('pointerdown', function (pointer) {
      if(this.target9+90>360){
        this.target9=90;
      }else{
        this.target9 += 90;
      }
      this.rotate(this.tube9, this.target9);

    }, this);
    this.tube10.on('pointerdown', function (pointer) {
      if(this.target10+90>360){
        this.target10=90;
      }else{
        this.target10 += 90;
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
        
        
          
  }
    
    
  update (time, delta){
    this.controls.update(delta);

    if((this.tube1.angle%180==0|| this.tube1.angle==-180) && //A 0, 360, 180

       (this.tube2.angle==180 || this.tube2.angle==-180) && 
       (this.tube6.angle==180 || this.tube6.angle==-180)  &&
       (this.tube8.angle==180 || this.tube8.angle==-180)  &&//C 180
       
       this.tube4.angle==0 && //B 0

       (this.tube5.angle==-90 || this.tube5.angle==270) && //B270

       this.tube7.angle == 90 && //D90
       this.tube9.angle == 90

    ){
      
          
        this.time.addEvent({  
            delay: 500, //500
            callback: this.complete, 
            callbackScope: this, 
            loop: false
        }); 
    }
  

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
    
}