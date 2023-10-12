/**
 * Represents a coin object in the game that can animate and move.
 * @extends MovableObject
 */
class Coins extends MovableObject {
  /**
   * Constructs a new Coins instance with initial states and animations.
   */
  constructor() {
    super();

    /** @type {number} Height of the coin. */
    this.height = 40;

    /** @type {number} Width of the coin. */
    this.width = 40;

    /**
     * @type {string[]} Array of paths to images that represent the idle animation of the coin.
     */
    this.IMAGES_IDLE = [
      "./img/4. Marcadores/1. Coins/1.png",
      "./img/4. Marcadores/1. Coins/2.png",
      "./img/4. Marcadores/1. Coins/3.png",
      "./img/4. Marcadores/1. Coins/4.png",
    ];

    this.loadImage("./img/4. Marcadores/1. Coins/1.png");
    this.x = 200 + Math.random() * 2300;
    this.y = 0 + Math.random() * 300;

    this.loadImages(this.IMAGES_IDLE);
    this.animate();
  }

  /**
   * Animates the coin by cycling through its idle images.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 7);
  }
}
