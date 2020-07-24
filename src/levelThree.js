export default class levelThree extends Phaser.Scene {
    constructor() {
      super("levelThree");
    }
    create() { //implement camera before structure.
        this.background= this.add.image(0,0, "background2"); //image is 1200x1200
        this.background.setOrigin(0);
        
        this.cameras.main.setBounds(0,0,600,1000);
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

        this.add.bitmapText(30,30, "pixelFont", "Level 3", 40).setDepth(100);
        this.tubeGroup = this.physics.add.group();
        this.tube1 = this.tubeGroup.create(150,337, "tubeA").setScale(.5).setInteractive();
        //
        this.tube2 = this.tubeGroup.create(150,407, "tubeA").setScale(.5).setInteractive();
        //
        this.tube3 = this.tubeGroup.create(166,474, "tubeC").setScale(.49).setInteractive();
            this.target3=this.tube3.angle= 180;
            
        this.tube4 = this.tubeGroup.create(233,490, "tubeA").setScale(.5).setInteractive();
            this.target4=this.tube4.angle=90;
        this.tube5 = this.tubeGroup.create(303,490, "tubeA").setScale(.5).setInteractive();
            this.target5=this.tube5.angle=90;
        this.tube6 = this.tubeGroup.create(370,474, "tubeC").setScale(.49).setInteractive();
            this.target6=this.tube6.angle=90;
        this.tube7 = this.tubeGroup.create(386,407, "tubeA").setScale(.5).setInteractive();
        //
        this.tube8 = this.tubeGroup.create(370,340, "tubeC").setScale(.49).setInteractive();
        //
        this.tube9 = this.tubeGroup.create(303,324, "tubeA").setScale(.5).setInteractive();
            this.tube9.angle=90; 
        //
        this.tube10 = this.tubeGroup.create(236,340, "tubeC").setScale(.49).setInteractive();
            this.target10=this.tube10.angle=270;
        this.tube11 = this.tubeGroup.create(220,407, "tubeA").setScale(.5).setInteractive();
            this.target11=this.tube11.angle=0;
        this.tube12 = this.tubeGroup.create(220,477, "tubeA").setScale(.5).setInteractive();
            this.target12=this.tube12.angle=0;
        this.tube13 = this.tubeGroup.create(229,547, "tubeB").setScale(.5).setInteractive();
            this.target13=this.tube13.angle=180;
            
        this.tube14 = this.tubeGroup.create(294,549, "tubeA").setScale(.5).setInteractive();
            this.target14=this.tube14.angle=90;
        this.tube15 = this.tubeGroup.create(365,549, "tubeA").setScale(.5).setInteractive();
            this.target15=this.tube15.angle=90;
        this.tube16 = this.tubeGroup.create(432,532, "tubeC").setScale(.5).setInteractive();
            this.target16=this.tube16.angle=90;
        this.tube17 = this.tubeGroup.create(450,465, "tubeA").setScale(.5).setInteractive();
            this.target17=this.tube17.angle=0;
        this.tube18 = this.tubeGroup.create(450,395, "tubeA").setScale(.5).setInteractive();
            this.target18=this.tube18.angle=0;
        this.tube19 = this.tubeGroup.create(450,335, "tubeA").setScale(.5).setInteractive();
            this.target19=this.tube19.angle=0;
        this.tube20 = this.tubeGroup.create(220,615, "tubeA").setScale(.5).setInteractive();
            this.target20=this.tube20.angle=0;
        this.tube21 = this.tubeGroup.create(205,670, "tubeC").setScale(.5).setInteractive();
            this.target21=this.tube21.angle=90;
        this.tube22 = this.tubeGroup.create(155,670, "tubeC").setScale(.5).setInteractive();
            this.target22=this.tube22.angle=180;
        this.tube23 = this.tubeGroup.create(140,615, "tubeA").setScale(.5).setInteractive();
            this.target23=this.tube23.angle=0;
        this.tube24 = this.tubeGroup.create(140,550, "tubeD").setScale(.5).setInteractive();
            this.target24=this.tube24.angle=0;

        this.tube3.on('pointerdown', function (pointer) {
            if(this.target3+90>360){
              this.target3=90;
            }else{
              this.target3 += 90;
            }
            this.rotate(this.tube3, this.target3);
   
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
        
        }, this);
        this.tube6.on('pointerdown', function (pointer) {
            if(this.target6+90>360){
              this.target6=90;
            }else{
              this.target6 += 90;
            }
            this.rotate(this.tube6, this.target6);
           
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
              this.target11 += 90;
            }
            this.rotate(this.tube11, this.target11);
         
        }, this);
        this.tube12.on('pointerdown', function (pointer) {
            if(this.target12+90>360){
              this.target12=90;
            }else{
              this.target12 += 90;
            }
            this.rotate(this.tube12, this.target12);
         
        }, this);
        this.tube13.on('pointerdown', function (pointer) {
            if(this.target13+90>360){
              this.target13=90;
            }else{
              this.target13+= 90;
            }
            this.rotate(this.tube13, this.target13);
         
        }, this);
        this.tube14.on('pointerdown', function (pointer) {
            if(this.target14+90>360){
              this.target14=90;
            }else{
              this.target14+= 90;
            }
            this.rotate(this.tube14, this.target14);
         
        }, this);
        this.tube15.on('pointerdown', function (pointer) {
            if(this.target15+90>360){
              this.target15=90;
            }else{
              this.target15+= 90;
            }
            this.rotate(this.tube15, this.target15);
         
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
        this.tube24.on('pointerdown', function (pointer) {
            if(this.target24+90>360){
              this.target24=90;
            }else{
              this.target24+= 90;
            }
            this.rotate(this.tube24, this.target24);
         
        }, this);
   
    }
    update (time, delta)
    {
      this.controls.update(delta);
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
  