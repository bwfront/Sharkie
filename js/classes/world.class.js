class World {
  /** @type {Player} The main player of the game. */
  player = new Player();

  /** @type {Level|null} The current level of the game. */
  level;

  /** @type {Audio} The background audio for the world. */
  background_audio = new Audio("./audio/bgmusic.mp3");

  /** @type {HTMLCanvasElement|null} The canvas element to render the world. */
  canvas;

  /** @type {CanvasRenderingContext2D|null} The context for drawing onto the canvas. */
  ctx;

  /** @type {Keyboard|null} The keyboard input handler. */
  keyboard;

  /** @type {number} A counter used for determining end boss interaction. */
  l = 0;

  /** @type {number} Represents the camera's x-axis offset. */
  camera_x = 0;

  /** @type {StatusBarHealth} Represents the player's health status bar. */
  statusBarHealth = new StatusBarHealth();

  /** @type {StatusBarCoin} Represents the player's coin status bar. */
  statusBarCoin = new StatusBarCoin();

  /** @type {StatusBarPoisen} Represents the player's poison status bar. */
  statusBarPoisen = new StatusBarPoisen();

  /** @type {ThrowPoisen[]} Array of poison throw instances. */
  throwPoisen = [];

  /** @type {ThrowBubble[]} Array of bubble throw instances. */
  throwBubble = [];

  /** @type {number} The cooldown for shooting bubble/throwing poison in milliseconds. */
  shotCooldown = 900;
  poisenThrowCooldown = 700;

  /** @type {number} The time of the last bubble/poison throw. */
  lastPoisenThrowTime = 0;
  lastShotTime = 0;

  /**
   * Creates a new world instance.
   * @param {HTMLCanvasElement} canvas - The canvas to draw the world on.
   * @param {Keyboard} keyboard - The keyboard input handler.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.level = createLevel1();
    this.draw();
    this.setWorld();
    this.run();
    this.background_audio.volume = 0.2;
    this.background_audio.play();
  }

  setWorld() {
    this.player.world = this;
  }

  /**
   * Runs collision checks and other game updates at a regular interval.
   */
  run() {
    setInterval(() => {
      this.checkCollision();
      this.checkCollisionCoin();
      this.checkCollisionPoisen();
      this.checkPoisenThrow();
      this.checkBubbleThrow();
      this.checkThrowPoisenHitsEnemy();
      this.checkThrowBubbleHitsEnemy();
      this.checkThrowPoisenHitsEndboss();
      this.distanceEndbossPlayer();
      this.checkCollisionEndboss();
    }, 50);
  }

  /**
   * Check if Player is near to Enbboos
   * Swim toward the Player
   */
  distanceEndbossPlayer() {
    if (this.player.x > 2850 && this.l == 0) {
      this.l++;
      this.level.endboss[0].attack();
    }
  }

  /**
   * Check if Poisen hit Endboss
   * Remove Poisen
   */
  checkThrowPoisenHitsEndboss() {
    for (let i = this.throwPoisen.length - 1; i >= 0; i--) {
      let bottle = this.throwPoisen[i];
      for (let j = this.level.endboss.length - 1; j >= 0; j--) {
        let boss = this.level.endboss[j];
        if (bottle.isCollidingPlayer(boss)) {
          this.hitEndboss(boss, j);
          this.throwPoisen.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * Check if Poisen hit Endboss 5 times
   * Victory called
   */
  hitEndboss(boss, j) {
    boss.hitstaken++;
    this.level.endboss[j].hit();
    if (boss.hitstaken >= 5) {
      this.level.endboss.splice(j, 1);
      menuVictory();
    }
  }

  /**
   * Check if Bubble hit Enemy times
   * Remove ThrowBubble
   * Remove Enemy
   */
  checkThrowBubbleHitsEnemy() {
    for (let i = this.throwBubble.length - 1; i >= 0; i--) {
      let bubble = this.throwBubble[i];
      for (let j = this.level.enemies.length - 1; j >= 0; j--) {
        let enemy = this.level.enemies[j];
        if (bubble.isColliding(enemy)) {
          this.level.enemies.splice(j, 1);
          this.throwBubble.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * Check if Poisen hit Enemy
   */
  checkThrowPoisenHitsEnemy() {
    for (let i = this.throwPoisen.length - 1; i >= 0; i--) {
      let bottle = this.throwPoisen[i];
      for (let j = this.level.enemies.length - 1; j >= 0; j--) {
        let enemy = this.level.enemies[j];
        if (bottle.isColliding(enemy)) {
          this.level.enemies.splice(j, 1);
          this.throwPoisen.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * Check if Player Collide with Endboss
   */
  checkCollisionEndboss() {
    this.level.endboss.forEach((endboss) => {
      if (this.player.isCollidingPlayer(endboss)) {
        this.player.hit();
        this.statusBarHealth.setHealth(this.player.health);
      }
    });
  }

  /**
   * Check if Player Collide with Enemy
   */
  checkCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.player.isCollidingPlayer(enemy)) {
        this.player.hit();
        this.statusBarHealth.setHealth(this.player.health);
      }
    });
  }

  /**
   * Check if Player Press SPace and if the Cooldown is over
   * Create a new ThrowPoisen Object
   */
  checkPoisenThrow() {
    const currentTime = Date.now();
    if (
      this.keyboard.SPACE &&
      currentTime - this.lastPoisenThrowTime > this.poisenThrowCooldown
    ) {
      if (this.player.poisen > 0) {
        let bottleDirection = this.player.otherDirection ? "left" : "right";
        let bottle = new ThrowPoisen(
          this.player.x,
          this.player.y,
          bottleDirection
        );
        if (!isMutetd) {
          bottle.throw_sound.play();
        }
        this.throwPoisen.push(bottle);
        this.player.poisen -= 20;
        this.lastPoisenThrowTime = currentTime; // Update the last throw time
      } else {
        return null;
      }
    }
  }

  /**
   * Check if Player Press E and if the Cooldown is over
   * Create a new ThrowBubble Object
   */
  checkBubbleThrow() {
    const currentTime = Date.now();
    if (
      this.keyboard.E &&
      currentTime - this.lastShotTime > this.shotCooldown
    ) {
      let bubbleDirection = this.player.otherDirection ? "left" : "right";
      let bubble = new ThrowBubble(
        this.player.x,
        this.player.y,
        bubbleDirection
      );
      if (!isMutetd) {
        bubble.bubble_sound.play();
      }
      this.throwBubble.push(bubble);
      this.lastShotTime = currentTime; // Update the last shot time
    }
  }

  /**
   * Check if Player Collide with Coin / Calls add Coin / Splice the Coin
   */
  checkCollisionCoin() {
    for (let i = this.level.coins.length - 1; i >= 0; i--) {
      let coin = this.level.coins[i];
      if (this.player.isCollidingPlayer(coin)) {
        this.player.addCoin();
        this.statusBarCoin.setCoin(this.player.coin);
        this.level.coins.splice(i, 1);
      }
    }
  }

  /**
   * Check if Player Collide with Poisen / Calls add Poisen / Splice the Poisen
   */
  checkCollisionPoisen() {
    this.statusBarPoisen.setPoisen(this.player.poisen);
    for (let i = this.level.poisen.length - 1; i >= 0; i--) {
      let poisen = this.level.poisen[i];
      if (this.player.isCollidingPlayer(poisen)) {
        this.player.addPoisen();
        this.level.poisen.splice(i, 1);
      }
    }
  }

  /**
   * Draws the game objects onto the canvas.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.drawArrayFun();

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
      
    });

    this.drawMapFun();
  }

  /**
   * Helper function to add multiple objects to the game world for drawing.
   * @param {any[]} y - An array of game objects.
   */
  drawArrayFun() {
    this.addToMapArray(this.level.backgroundObjects);
    this.addToMapArray(this.level.enemies);
    this.addToMapArray(this.level.endboss);
    this.addToMapArray(this.level.coins);
    this.addToMapArray(this.level.poisen);
    this.addToMapArray(this.throwPoisen);
    this.addToMapArray(this.throwBubble);
  }

  /**
   * Adds a single game object to the game world for drawing.
   * @param {any} obj - A game object.
   */
  drawMapFun() {
    this.addToMap(this.player);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarPoisen);
  }

  /**
   * Helper function to add multiple objects to the game world for drawing.
   * @param {any[]} y - An array of game objects.
   */
  addToMapArray(y) {
    y.forEach((x) => {
      this.addToMap(x);
    });
  }

  /**
   * Adds a single game object to the game world for drawing.
   * @param {any} obj - A game object.
   */
  addToMap(obj) {
    if (obj.otherDirection) {
      this.flipImage(obj);
    }
    obj.draw(this.ctx);
    //obj.drawRectangle(this.ctx);

    if (obj.otherDirection) {
      this.flipImageBack(obj);
    }
  }

  /**
   * Flips an image horizontally for drawing.
   * @param {any} obj - A game object with an image to flip.
   */
  flipImage(obj) {
    this.ctx.save();
    this.ctx.translate(obj.width, 0);
    this.ctx.scale(-1, 1);
    obj.x = obj.x * -1;
  }

  /**
   * Reverts the horizontal flip of an image after drawing.
   * @param {any} obj - A game object with an image that was flipped.
   */
  flipImageBack(obj) {
    obj.x = obj.x * -1;
    this.ctx.restore();
  }
}
