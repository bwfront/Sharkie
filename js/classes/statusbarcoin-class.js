/**
 * Represents a poison status bar in the game.
 * @extends DrawableObject
 */
class StatusBarCoin extends DrawableObject {
  /**
   * @type {string[]} The array of image paths representing the different coin fill level.
   */
  IMAGES = [
    "./img/4. Marcadores/orange/0_  copia 2.png",
    "./img/4. Marcadores/orange/20_  copia.png",
    "./img/4. Marcadores/orange/40_  copia 2.png",
    "./img/4. Marcadores/orange/60_  copia 2.png",
    "./img/4. Marcadores/orange/80_  copia 2.png",
    "./img/4. Marcadores/orange/100_ copia 2.png",
  ];

  /**
   * @type {number} The player's current coin 'inventar'.
   */
  playercoin = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 50;
    this.height = 60;
    this.width = 210;
    this.setCoin(0);
  }

  /**
   * Sets the player's coin.
   * @param {number} playercoin - The player's coins 'inventar'.
   */
  setCoin(playercoin) {
    this.playercoin = playercoin;
    this.setStatus();
  }

  /**
   * Returns the index for image selection.
   * @returns {number} The image index based on the player's coins.
   */
  getIndex() {
    return this.getCoinIndex();
  }

  /**
   * Determines the correct image index based on the player's playercoin level.
   * @returns {number} The image index based on the player's playercoin level.
   */
  getCoinIndex() {
    if (this.playercoin >= 100) {
      return 5;
    } else if (this.playercoin >= 80) {
      return 4;
    } else if (this.playercoin >= 60) {
      return 3;
    } else if (this.playercoin >= 40) {
      return 2;
    } else if (this.playercoin >= 20) {
      return 1;
    } else if ((this.playercoin = 0)) {
      return 0;
    } else {
      return 0;
    }
  }
}
