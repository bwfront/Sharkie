/**
 * Represents the second layer of the background of the game scene.
 * @extends MovableObject
 */
class bgFondo2 extends MovableObject {
  /**
   * @property {number} x - The x-position of the background layer. Initial value is 0.
   * @property {number} y - The y-position of the background layer. Initial value is -100.
   * @property {number} height - The height of the background layer. Initial value is 550.
   * @property {number} width - The width of the background layer. Initial value is 1440.
   */
  x = 0;
  y = -100;
  height = 550;
  width = 1440;

  constructor(x) {
    super();
    this.loadImage("./img/3. Background/Legacy/Layers/4.Fondo 2/D3.png");
    this.x = x;
  }
}
