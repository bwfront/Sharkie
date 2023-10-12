/**
 * Represents the first layer of the background of the game scene.
 * @extends MovableObject
 */
class bgFondo1 extends MovableObject {
  /**
   * @property {number} x - The x-position of the background layer. Initial value is 0.
   * @property {number} y - The y-position of the background layer. Initial value is -62.
   * @property {number} height - The height of the background layer. Initial value is 550.
   * @property {number} width - The width of the background layer. Initial value is 1440.
   */
  x = 0;
  y = -62;
  height = 550;
  width = 1440;

  constructor(x) {
    super();
    this.loadImage("./img/3. Background/Legacy/Layers/3.Fondo 1/L3.png");
    this.x = x;
  }
}
