class Endboss extends MovableObject {
  height = 700;
  width = 700;
  y = -200;
  x = 3390;
  hitstaken = 0;
  IMAGES_SWIM = [
    "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
    "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
  ];
  IMAGES_HIT = [
    "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
    "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
  ];
  endbosshit_audio = new Audio("./audio/endbosshit.mp3");
  constructor(player) {
    super().loadImage("./img/2.Enemy/3 Final Enemy/2.floating/1.png");
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_HIT);
    this.animate();
  }

  attack() {
    this.speed = 5;
    this.moveLeft();
  }

  hit() {
    this.hitAnimationPlaying = true;
    this.hitAnimation();
    this.endbosshit_audio.play();
  }

  hitAnimation() {
    this.playAnimation(this.IMAGES_HIT);
    let animationDuration = this.IMAGES_HIT.length * (1000 / 7);
    setTimeout(() => {
      this.hitAnimationPlaying = false;
    }, animationDuration);
  }

  animate() {
    setInterval(() => {
      if (!this.hitAnimationPlaying) {
        this.playAnimation(this.IMAGES_SWIM);
      }
    }, 1000 / 7);
  }
}
