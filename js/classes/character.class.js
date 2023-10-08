class Player extends MovableObject {
  x = 40;
  y = 150;
  height = 230;
  width = 230;
  speed = 1;
  IMAGES_SWIM = [
    "../img/1.Sharkie/3.Swim/1.png",
    "../img/1.Sharkie/3.Swim/3.png",
    "../img/1.Sharkie/3.Swim/5.png",
    "../img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_IDLE = [
    "../img/1.Sharkie/1.IDLE/1.png",
    "../img/1.Sharkie/1.IDLE/2.png",
    "../img/1.Sharkie/1.IDLE/3.png",
    "../img/1.Sharkie/1.IDLE/4.png",
    "../img/1.Sharkie/1.IDLE/5.png",
    "../img/1.Sharkie/1.IDLE/6.png",
    "../img/1.Sharkie/1.IDLE/7.png",
    "../img/1.Sharkie/1.IDLE/8.png",
    "../img/1.Sharkie/1.IDLE/9.png",
    "../img/1.Sharkie/1.IDLE/10.png",
    "../img/1.Sharkie/1.IDLE/11.png",
    "../img/1.Sharkie/1.IDLE/12.png",
    "../img/1.Sharkie/1.IDLE/13.png",
    "../img/1.Sharkie/1.IDLE/14.png",
    "../img/1.Sharkie/1.IDLE/15.png",
    "../img/1.Sharkie/1.IDLE/16.png",
    "../img/1.Sharkie/1.IDLE/17.png",
    "../img/1.Sharkie/1.IDLE/18.png",
  ];

  world;

  swim_sound = new Audio("audio/sharkswim.mp3");

  constructor() {
    super().loadImage("");
    this.animate();
  }

  animate() {
    //SWIM
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        if (this.x < 760) {
          this.x += this.speed;
          this.otherDirection = false;
          this.world.camera_x += -this.speed;
        }
      }
      if (this.world.keyboard.LEFT) {
        if (this.x > 40) {
          this.x -= this.speed;
          this.otherDirection = true;
          this.world.camera_x += this.speed;
        }
      }
      if (this.world.keyboard.UP) {
        if (this.y > -80) {
          this.y -= this.speed;
        }
      }
      if (this.world.keyboard.DOWN) {
        if (this.y < 280) {
          this.y += this.speed;
        }
      }
    }, 1000 / 60);

    //SWIM Animation
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    setInterval(() => {
        if (
            this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.DOWN ||
            this.world.keyboard.UP
        ) {
            let i = this.currentImage % this.IMAGES_SWIM.length;
            let path = this.IMAGES_SWIM[i];
            this.img = this.imagesCache[path];
            this.currentImage++;
            this.swim_sound.play();
        } else if (
            !this.world.keyboard.RIGHT &&
            !this.world.keyboard.LEFT &&
            !this.world.keyboard.DOWN &&
            !this.world.keyboard.UP
        ) {
          this.swim_sound.pause();
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imagesCache[path];
            this.currentImage++;
        }
    }, 1000 / 7);


  }

  moveRight() {}
  moveUp() {}
  moveDown() {}
}
