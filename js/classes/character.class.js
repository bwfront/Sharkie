class Player extends MovableObject {
  x = 40;
  y = 150;
  height = 230;
  width = 230;

  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];
  world;
  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_SWIM);
    this.animate();
  }

  animate() {
    setInterval(() => {
        if(this.world.keyboard.RIGHT){
          let i = this.currentImage % this.IMAGES_SWIM.length;
          let path = this.IMAGES_SWIM[i];
          this.img = this.imagesCache[path];
          this.currentImage++;
        }
        }, 1000 / 7);
    
  }

  moveRight() {}
  moveUp() {}
  moveDown() {}

}



