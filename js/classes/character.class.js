class Player extends MovableObject {
  x = 40;
  y = 150;
  height = 230;
  width = 230;
  world;

  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];

  constructor() {
    super().loadImage("../img/1.Sharkie/1.IDLE/1.png");
    this.loadImages(this.IMAGES_SWIM);

  }

  setWorld(world) {
    this.world = world;
    this.animate();
    console.log('World has been set in Player:', this.world);
    console.log('World has been set in Player:', this.world.keyboard);
    this.animate();
    
}
  animate() {
    if (this.world.keyboard.UP) {
      setInterval(() => {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imagesCache[path];
        this.currentImage++;
      }, 1000 / 7);
    }
  }

  moveRight() {}
  moveUp() {}
  moveDown() {}

}



