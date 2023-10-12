/**
 * Represents a poison status bar in the game.
 * @extends DrawableObject
 */
class StatusBarHealth extends DrawableObject {
  /**
   * @type {string[]} The array of image paths representing the different health statusbar levels.
   */
  IMAGES = [
    "./img/4. Marcadores/orange/100_  copia.png",
    "./img/4. Marcadores/orange/80_  copia.png",
    "./img/4. Marcadores/orange/60_  copia.png",
    "./img/4. Marcadores/orange/40_  copia.png",
    "./img/4. Marcadores/orange/20_ copia 2.png",
    "./img/4. Marcadores/orange/0_  copia.png",
  ];

  /**
   * @type {number} The player's current health.
   */
  playerhealth = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 0;
    this.height = 60;
    this.width = 210;
    this.setHealth(100);
  }

  /**
   * Sets the player's health.
   * @param {number} playerhealth - The player's health.
   */
  setHealth(playerhealth) {
    this.playerhealth = playerhealth;
    this.setStatus();
  }

  /**
   * Returns the index for image selection.
   * @returns {number} The image index based on the player's health.
   */
  getIndex() {
    return this.getHealthIndex();
  }

  /**
   * Determines the correct image index based on the player's playerhealth level.
   * @returns {number} The image index based on the player's playerhealth level.
   */
  getHealthIndex() {
    if (this.playerhealth == 100) {
      return 0;
    } else if (this.playerhealth >= 80) {
      return 1;
    } else if (this.playerhealth >= 60) {
      return 2;
    } else if (this.playerhealth >= 40) {
      return 3;
    } else if (this.playerhealth > 0) {
      return 4;
    } else if ((this.playerhealth = 0)) {
      return 5;
    } else {
      return 5;
    }
  }
}
