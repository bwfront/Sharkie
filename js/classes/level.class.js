/**
 * Represents a game level with various elements like enemies, background objects, coins, poisen, and an endboss.
 */
class level {
  /**
   * Constructs a new level.
   *
   * @param {Array} enemies - List of enemy objects present in the level.
   * @param {Array} backgroundObjects - List of background objects present in the level.
   * @param {Array} coins - List of coin objects present in the level.
   * @param {Array} poisen - List of poisen objects present in the level.
   * @param {Object} endboss - The endboss object for the level.
   */
  constructor(enemies, backgroundObjects, coins, poisen, endboss) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
    this.poisen = poisen;
    this.endboss = endboss;
  }
}
