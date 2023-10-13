/**
 * Represents an object that can move and interact within the game environment.
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
  /**
   * @type {number} The speed at which the object moves.
   */
  speed;
  otherDirection = false;

  /**
   * @type {number} The Cooldown at which the Player get -health.
   */
  lastHit = 100;
  coin = 0;
  poisen = 80;
  coin_sound = new Audio("./audio/coin.wav");
  die_sound = new Audio("./audio/die.wav");
  i = 0;
  j = 0;

  /**
   * Determines if two objects are colliding based on their bounding boxes.
   * @param {Object} obj - The other object to check for collision.
   * @returns {boolean} True if the objects are colliding, false otherwise.
   */
  isColliding(obj) {
    return (
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width &&
      this.y + this.height >= obj.y &&
      this.y <= obj.y + obj.height
    );
  }

  /**
   * Adds poison value to the object's poison count and plays a sound effect.
   */
  addPoisen() {
    this.coin_sound.play();
    this.poisen += 20;
  }

  /**
   * Determines if the object is colliding with a player using more specific bounding box values.
   * @param {Object} obj - The player object to check for collision.
   * @returns {boolean} True if the objects are colliding, false otherwise.
   */
  isCollidingPlayer(obj) {
    let yOffsetTop = 0.45 * this.height;
    let xOffset = 0.1 * this.width;
    let yOffsetBottom = 0.1 * this.height;
    return (
      this.x + this.width - xOffset >= obj.x &&
      this.x + xOffset <= obj.x + obj.width &&
      this.y + this.height - yOffsetBottom >= obj.y &&
      this.y + yOffsetTop <= obj.y + obj.height
    );
  }

  /**
   * Decreases the health of the object by a set value.
   */
  hit() {
    this.health -= 3;
    if (this.health < 0) {
      this.health = 0;
      if (this.i < 15) {
        this.die_sound.play();
        this.i++;
      } else {
        this.die_sound.pause();
      }
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Checks if the object has recently been hurt.
   * @returns {boolean} True if the object was hurt within a specific time frame, false otherwise.
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 2;
  }

  /**
   * Checks if the object is dead (has no health left).
   * @returns {boolean} True if the object is dead, false otherwise.
   */
  isDead() {
    if (this.health == 0 && this.j == 0) {
      this.j++;
      GameOverMenu();
    }
    return this.health == 0;
  }

  /**
   * Adds a coin value to the object's coin count and plays a sound effect.
   */
  addCoin() {
    this.coin_sound.play();
    this.coin += 20;
  }

  /**
   * Plays an animation for the object based on a set of images.
   * @param {Array<string>} images - An array of paths to the images that make up the animation.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imagesCache[path];
    this.currentImage++;
  }

  /**
   * Moves the Enemies to the left based on its speed.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
