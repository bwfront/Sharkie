/**
 * Represents a throwable poison object in the game.
 * @extends MovableObject
 */
class ThrowPoisen extends MovableObject {
  /**
   * Set the poison bottle which is thrown and its measures
   * @param {Number} x - X-Axis where the throwable object starts at
   * @param {Number} y - Y-Axis where the throwable object starts at
   * @param {String} direction - Direction to throw ('right' or 'left')
   */
  constructor(x, y, direction) {
    super().loadImage("./img/4. Marcadores/Poisen/Animada/1.png");
    this.x = direction == "right" ? x + 100 : x + 20;
    this.y = y + 80;
    this.height = 40;
    this.width = 40;
    this.direction = direction; // Store the direction
    this.throw();
  }
  /** @type {Audio} The sound played when poison is thrown. */
  throw_sound = new Audio("audio/throw.wav");

  /**
   * x / y speed and Direction of throwPoisen
   */
  throw() {
    this.startX = this.x;
    setInterval(() => {
      if (this.direction == "right" && this.x - this.startX < 800) {
        this.x += 4;
      } else if (this.direction == "left") {
        this.x -= 4; // Move left
      }
      this.y += 0.6;
    }, 1000 / 150);
  }
}
