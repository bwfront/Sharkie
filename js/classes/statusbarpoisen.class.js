/**
 * Represents a poison status bar in the game.
 * @extends DrawableObject
 */
class StatusBarPoisen extends DrawableObject {
  /**
   * @type {string[]} The array of image paths representing the different poisen fill level.
   */
  IMAGES = [
    "./img/4. Marcadores/orange/0_ copia.png",
    "./img/4. Marcadores/orange/20_ copia.png",
    "./img/4. Marcadores/orange/40_ copia.png",
    "./img/4. Marcadores/orange/60_ copia.png",
    "./img/4. Marcadores/orange/80_ copia.png",
    "./img/4. Marcadores/orange/100_ copia.png",
  ];

  /**
   * @type {number} The player's current poison 'inventar'.
   */
  playerPoisen = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 100;
    this.height = 60;
    this.width = 210;
    this.setPoisen(0);
  }

  /**
   * Sets the player's poison.
   * @param {number} playerPoisen - The player's poison 'inventar'.
   */
  setPoisen(playerPoisen) {
    this.playerPoisen = playerPoisen;
    this.setStatus();
  }

  /**
   * Returns the index for image selection.
   * @returns {number} The image index based on the player's poison 'inventar'.
   */
  getIndex() {
    return this.getPoisenIndex();
  }

  /**
   * Determines the correct image index based on the player's poison level.
   * @returns {number} The image index based on the player's poison level.
   */
  getPoisenIndex() {
    if (this.playerPoisen > 100) {
      return 5;
    } else if (this.playerPoisen >= 80) {
      return 4;
    } else if (this.playerPoisen >= 60) {
      return 3;
    } else if (this.playerPoisen >= 40) {
      return 2;
    } else if (this.playerPoisen >= 20) {
      return 1;
    } else if ((this.playerPoisen = 0)) {
      return 0;
    } else {
      return 0;
    }
  }
}
