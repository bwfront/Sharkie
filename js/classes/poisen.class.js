class Poisen extends MovableObject {
  height = 40;
  width = 40;

  IMAGES_IDLE = [
    "./img/4. Marcadores/Poisen/Animada/1.png",
    "./img/4. Marcadores/Poisen/Animada/2.png",
    "./img/4. Marcadores/Poisen/Animada/3.png",
    "./img/4. Marcadores/Poisen/Animada/4.png",
    "./img/4. Marcadores/Poisen/Animada/5.png",
    "./img/4. Marcadores/Poisen/Animada/6.png",
    "./img/4. Marcadores/Poisen/Animada/7.png",
    "./img/4. Marcadores/Poisen/Animada/8.png",
  ];

  constructor() {
    super().loadImage("./img/4. Marcadores/Poisen/Animada/1.png");
    this.x = 200 + Math.random() * 2300;
    this.y = 0 + Math.random() * 400;

    this.loadImages(this.IMAGES_IDLE);
    this.animate();
  }
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 7);
  }
}
