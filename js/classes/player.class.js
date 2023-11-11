/**
 * Represents the main player character, Sharkie, in the game.
 * @extends MovableObject
 */
class Player extends MovableObject {
  /**
   * @type {number} The initial x-coordinate of the player.
   */
  x = 40;

  /**
   * @type {number} The initial <-coordinate of the player.
   */
  y = 150;

  /**
   * @type {number} The initial <-height of the player.
   */
  height = 160;

  /**
   * @type {number} The initial <-width of the player.
   */
  width = 160;

  /**
   * @type {number} The initial <-Speed of the player.
   */
  speed = 4;

  /**
   * @type {number} The initial <-Health of the player.
   */
  health = 100;

  bubbleAnimationPlaying = false;
  lastBubbleAnimationTime = 0;
  bubbleAnimationCooldown = 1000; // 1 second cooldown
  attack = true;

  IMAGES_SWIM = [
    "./img/1.Sharkie/3.Swim/1.png",
    "./img/1.Sharkie/3.Swim/3.png",
    "./img/1.Sharkie/3.Swim/5.png",
    "./img/1.Sharkie/3.Swim/6.png",
  ];
  IMAGES_IDLE = [
    "./img/1.Sharkie/1.IDLE/1.png",
    "./img/1.Sharkie/1.IDLE/2.png",
    "./img/1.Sharkie/1.IDLE/3.png",
    "./img/1.Sharkie/1.IDLE/4.png",
    "./img/1.Sharkie/1.IDLE/5.png",
    "./img/1.Sharkie/1.IDLE/6.png",
    "./img/1.Sharkie/1.IDLE/7.png",
    "./img/1.Sharkie/1.IDLE/8.png",
    "./img/1.Sharkie/1.IDLE/9.png",
    "./img/1.Sharkie/1.IDLE/10.png",
    "./img/1.Sharkie/1.IDLE/11.png",
    "./img/1.Sharkie/1.IDLE/12.png",
    "./img/1.Sharkie/1.IDLE/13.png",
    "./img/1.Sharkie/1.IDLE/14.png",
    "./img/1.Sharkie/1.IDLE/15.png",
    "./img/1.Sharkie/1.IDLE/16.png",
    "./img/1.Sharkie/1.IDLE/17.png",
    "./img/1.Sharkie/1.IDLE/18.png",
  ];

  IMAGES_DEAD = [
    "./img/1.Sharkie/6.dead/1.Poisoned/1.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/2.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/3.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/4.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/5.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/6.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/7.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/8.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/9.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/10.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/11.png",
    "./img/1.Sharkie/6.dead/1.Poisoned/12.png",
  ];
  IMAGES_HURT = [
    "./img/1.Sharkie/5.Hurt/2.Electric shock/1.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/2.png",
    "./img/1.Sharkie/5.Hurt/2.Electric shock/3.png",
  ];
  IMAGES_BUBBLE = [
    "./img/1.Sharkie/Bubble trap/op1 (with bubble formation)/3.png",
    "./img/1.Sharkie/Bubble trap/op1 (with bubble formation)/5.png",
    "./img/1.Sharkie/Bubble trap/op1 (with bubble formation)/6.png",
    "./img/1.Sharkie/Bubble trap/op1 (with bubble formation)/7.png",
    "./img/1.Sharkie/Bubble trap/op1 (with bubble formation)/8.png",
  ];
  /**
   * Represents the world in which the player resides.
   * @type {Object}
   */
  world;

  /**
   * Audio file for the swimming sound of the player.
   * @type {Audio}
   */
  swim_sound = new Audio("./audio/sharkswim.mp3");

  /**
   * Creates a new Player object.
   */
  constructor() {
    super().loadImage("./img/1.Sharkie/3.Swim/1.png");
    this.animate();
    this.movingPlayer();
    this.swim_sound.volume = 0.5;
  }

  /**
   * Loads all the image assets for different animations of the player.
   */
  playerloadImage() {
    this.loadImages(this.IMAGES_SWIM);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_BUBBLE);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
  }

  /**
   * Controls and manages all animations of the player based on the player's state.
   */
  animate() {
    this.playerloadImage();
    let startBubble = false;

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        this.swim_sound.pause();
      } else if (this.world.keyboard.E && this.attack) {
        this.attackCharacter(); // Reset flag after starting animation
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (
        this.world.keyboard.RIGHT ||
        this.world.keyboard.LEFT ||
        this.world.keyboard.DOWN ||
        this.world.keyboard.UP
      ) {
        this.playAnimation(this.IMAGES_SWIM);
        this.swimSound();
      } else {
        this.swim_sound.pause();
        this.playAnimation(this.IMAGES_IDLE);
      }

      if (this.world.keyboard.E) {
        startBubble = true; // Set flag to start bubble animation on next iteration
        this.world.keyboard.E = false; // Reset E key state so we don't continuously trigger
      }
    }, 1000 / 7);
  }

  swimSound() {
    this.swim_sound.play();
  }
  /**
   * Handles the attack animation and its related functionality.
   */
  attackCharacter() {
    this.timerForAnimation();
    this.playAnimation(this.IMAGES_BUBBLE);
  }

  /**
   * Timer to control and limit the frequency of the attack animation.
   */
  timerForAnimation() {
    this.attack = false;
    setTimeout(() => {
      this.attack = true;
    }, 50);
  }

  /**
   * Moves the player based on keyboard inputs.
   */
  movingPlayer() {
    setInterval(() => {
      if (!this.isDead()) {
        if (this.world.keyboard.RIGHT) {
          this.moveingRight();
        }
        if (this.world.keyboard.LEFT) {
          this.moveingLeft();
        }
        if (this.world.keyboard.UP) {
          this.moveingUP();
        }
        if (this.world.keyboard.DOWN) {
          this.moveingDown();
        }
      }
    }, 1000 / 60);
  }

  /**
   * Handles the movement of the player to the right.
   */
  moveingRight() {
    //Change 760
    if (this.x < 3100) {
      this.x += this.speed;
      this.otherDirection = false;
      this.world.camera_x += -this.speed;
    }
  }

  /**
   * Handles the movement of the player to the left.
   */
  moveingLeft() {
    if (this.x > 40) {
      this.x -= this.speed;
      this.otherDirection = true;
      this.world.camera_x += this.speed;
    }
  }

  /**
   * Handles the movement of the player to the up.
   */
  moveingUP() {
    if (this.y > -60) {
      this.y -= this.speed + 0.5;
    }
  }

  /**
   * Handles the movement of the player to the down.
   */
  moveingDown() {
    if (this.y < 280) {
      this.y += this.speed + 0.5;
    }
  }
}
