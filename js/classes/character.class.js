class Player extends MovableObject {
  x = 40;
  y = 150;
  height = 160;
  width = 160;
  speed = 1;
  health = 100;
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

  IMAGES_DEAD = [
    "../img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "../img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_HURT = [
    "../img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "../img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
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
      if (!this.isDead()) {
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
      }
    }, 1000 / 60);
    //SWIM Animation
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      }else if(this.isHurt()){
        this.playAnimation(this.IMAGES_HURT);
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.UP
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        this.swim_sound.play();
      } else {
        this.swim_sound.pause();
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 7);
  }
}
