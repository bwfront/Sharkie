class EnemyJelly extends MovableObject {
  height = 70;
  width = 70;

  IMAGES_SWIM = [
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png",
    "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png",
  ];

  constructor() {
    super().loadImage("./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png");
    this.x = 400 + Math.random() * 2700;
    this.y = 40 + Math.random() * 300;

    this.loadImages(this.IMAGES_SWIM);
    this.animate();

    this.speed = 0.1 + Math.random() / 6;
  }
  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 1000 / 7);
  }
}
