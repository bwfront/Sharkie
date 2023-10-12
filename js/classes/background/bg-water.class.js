/**
 * Represents the background water of the game scene.
 * @extends MovableObject
 */
class bgWater extends MovableObject {
  /**
   * @property {number} x - The x-position of the background water. Initial value is 0.
   * @property {number} y - The y-position of the background water. Initial value is 0.
   * @property {number} height - The height of the background water. Initial value is 420.
   * @property {number} width - The width of the background water. Initial value is 1440.
   */
  x = 0;
  y = 0;
  height = 420;
  width = 1440;

  constructor(x) {
    super();
    this.loadImage("./img/3. Background/Legacy/Layers/5. Water/L3.png");
    this.x = x;
  }
}
