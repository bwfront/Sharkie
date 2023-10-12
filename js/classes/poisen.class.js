/**
 * Represents a poison object in the game.
 * @extends MovableObject
 */
class Poisen extends MovableObject {
  /**
   * @type {number} The height of the poison object.
   */
  height = 40;

  /**
   * @type {number} The width of the poison object.
   */
  width = 40;

  /**
   * @type {string[]} The array of image paths for the idle animation of the poison object.
   */
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

  /**
   * Initializes a new instance of the Poisen class.
   */
  constructor() {
    super().loadImage("./img/4. Marcadores/Poisen/Animada/1.png");
    this.x = 200 + Math.random() * 2300;
    this.y = 0 + Math.random() * 400;

    this.loadImages(this.IMAGES_IDLE);
    this.animate();
  }

  /**
   * Animates the poison object using the idle animation images.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 7);
  }
}
