/**
 * Represents the Endboss enemy that extends the functionality of the MovableObject.
 * @extends MovableObject
 */
class Endboss extends MovableObject {
  /**
   * Constructs a new Endboss instance with initial states.
   * @param {Object} player - A reference to the player object.
   */
  constructor(player) {
    super();

    /** @type {number} Height of the Endboss. */
    this.height = 700;

    /** @type {number} Width of the Endboss. */
    this.width = 700;

    /** @type {number} The y-coordinate position of the Endboss. */
    this.y = -200;

    /** @type {number} The x-coordinate position of the Endboss. */
    this.x = 3390;

    /** @type {number} Number of times the Endboss has been hit. */
    this.hitstaken = 0;

    /**
     * @type {string[]} Array containing paths to the swimming animation images for the Endboss.
     */
    this.IMAGES_SWIM = [
      "./img/2.Enemy/3 Final Enemy/2.floating/1.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/2.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/3.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/4.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/5.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/6.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/7.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/8.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/9.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/10.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/11.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/12.png",
      "./img/2.Enemy/3 Final Enemy/2.floating/13.png",
    ];

    /**
     * @type {string[]} Array containing paths to the hit animation images for the Endboss.
     */
    this.IMAGES_HIT = [
      "./img/2.Enemy/3 Final Enemy/Hurt/1.png",
      "./img/2.Enemy/3 Final Enemy/Hurt/2.png",
      "./img/2.Enemy/3 Final Enemy/Hurt/3.png",
      "./img/2.Enemy/3 Final Enemy/Hurt/4.png",
    ];

    /**
     * @type {Audio} Audio object for the sound played when the Endboss is hit.
     */
    this.endbosshit_audio = new Audio("./audio/endbosshit.mp3");

    // Load the initial image for the Endboss.
    this.loadImage("./img/2.Enemy/3 Final Enemy/2.floating/1.png");

    // Load the animation images for the Endboss.
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_HIT);

    // Start the animations.
    this.animate();
  }

  /**
   * Initiates the attack by the Endboss.
   */
  attack() {
    this.speed = 3;
    this.moveLeft();
  }

  /**
   * Handles the logic when the Endboss is hit.
   */
  hit() {
    this.hitAnimationPlaying = true;
    this.hitAnimation();
    this.endbosshit_audio.play();
  }

  /**
   * Initiates the hit animation for the Endboss.
   */
  hitAnimation() {
    this.playAnimation(this.IMAGES_HIT);
    let animationDuration = this.IMAGES_HIT.length * (1000 / 7);
    setTimeout(() => {
      this.hitAnimationPlaying = false;
    }, animationDuration);
  }

  /**
   * Controls the animations for the Endboss, such as swimming animation.
   */
  animate() {
    setInterval(() => {
      if (!this.hitAnimationPlaying) {
        this.playAnimation(this.IMAGES_SWIM);
      }
    }, 1000 / 7);
  }
}
