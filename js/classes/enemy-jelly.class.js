/**
 * Represents a Jellyfish enemy that extends the functionality of the MovableObject.
 * @extends MovableObject
 */
class EnemyJelly extends MovableObject {
  constructor() {
    super();

    /** @type {number} Height of the jellyfish enemy. */
    this.height = 70;

    /** @type {number} Width of the jellyfish enemy. */
    this.width = 70;

    /**
     * @type {string[]} Array containing paths to the swimming animation images for the jellyfish enemy.
     */
    this.IMAGES_SWIM = [
      "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png",
      "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 2.png",
      "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 3.png",
      "./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 4.png",
    ];

    // Loads the initial image for the enemy.
    this.loadImage("./img/2.Enemy/2 Jelly fish/S｣per dangerous/Pink 1.png");

    /** @type {number} The x-coordinate position of the jellyfish. */
    this.x = 400 + Math.random() * 2700;

    /** @type {number} The y-coordinate position of the jellyfish. */
    this.y = 40 + Math.random() * 300;

    // Load the animation images for the enemy.
    this.loadImages(this.IMAGES_SWIM);

    // Start the animations.
    this.animate();

    /** @type {number} Speed of the jellyfish movement. */
    this.speed = 0.1 + Math.random() / 6;
  }

  /**
   * Initiates the animations for the jellyfish enemy, such as swimming animation.
   */
  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 1000 / 7);
  }
}
