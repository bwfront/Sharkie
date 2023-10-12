/**
 * Represents a moving light in the game.
 * @extends MovableObject
 */
class Light extends MovableObject {
  /**
   * @property {number} x - The x-position of the light. Initial value is 0.
   * @property {number} y - The y-position of the light. Initial value is -20.
   * @property {number} height - The height of the light. Initial value is 600.
   */
  x = 0;
  y = -20;
  height = 600;

  /**
   * Creates a new instance of the Light class.
   */
  constructor() {
    super();
    this.loadImage("./img/3. Background/Legacy/Layers/1. Light/1.png");

    /**
     * @property {number} width - The width of the light. A random value between 700 and 1000.
     */
    this.width = 700 + Math.random() * 300;

    this.animate();
  }

  /**
   * Initiates the light's animations for moving left and right.
   */
  animate() {
    this.lightLeft();
    this.lightRight();
  }

  /**
   * Animates the light moving to the left for a short Time so it seems Like the Water is Moving.
   */
  lightLeft() {
    setInterval(() => {
      this.x -= 6;
      this.y += 10;
    }, 1900);
  }

  /**
   * Animates the light moving to the right so it seems Like the Water is Moving.
   */
  lightRight() {
    setInterval(() => {
      this.x += 6;
      this.y -= 10;
    }, 2000);
  }
}
