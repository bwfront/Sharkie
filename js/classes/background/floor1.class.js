/**
 * Represents the floor of the game scene.
 * @extends MovableObject
 */
class Floor1 extends MovableObject {
  /**
   * @property {number} x - The x-position of the floor. Initial value is 0.
   * @property {number} y - The y-position of the floor. Initial value is 80.
   * @property {number} height - The height of the floor. Initial value is 400.
   * @property {number} width - The width of the floor. Initial value is 1440.
   */
  x = 0;
  y = 80;
  height = 400;
  width = 1440;

  constructor(x) {
    super();
    this.loadImage("./img/3. Background/Legacy/Layers/2. Floor/L3.png");
    this.x = x;
  }
}
