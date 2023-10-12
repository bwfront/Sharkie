/**
 * Represents a Puffer fish enemy that extends the functionality of the MovableObject.
 * @extends MovableObject
 */
class EnemyFish extends MovableObject {
  /**
   * Constructs a new EnemyFish instance with initial states.
   */
  constructor() {
    super();

    /** @type {number} Height of the puffer fish enemy. */
    this.height = 70;

    /** @type {number} Width of the puffer fish enemy. */
    this.width = 90;

    /**
     * @type {string[]} Array containing paths to the swimming animation images for the puffer fish enemy.
     */
    this.IMAGES_SWIM = [
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png",
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png",
    ];

    // Loads the initial image for the enemy.
    this.loadImage(
      "./img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );

    /** @type {number} The x-coordinate position of the puffer fish. */
    this.x = 400 + Math.random() * 2300;

    /** @type {number} The y-coordinate position of the puffer fish. */
    this.y = 40 + Math.random() * 300;

    // Load the animation images for the enemy.
    this.loadImages(this.IMAGES_SWIM);

    // Start the animations.
    this.animate();

    /** @type {number} Speed of the puffer fish movement. */
    this.speed = 0.2 + Math.random() / 2;
  }

  /**
   * Initiates the animations for the puffer fish enemy, such as swimming animation.
   */
  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_SWIM);
    }, 1000 / 7);
  }
}
