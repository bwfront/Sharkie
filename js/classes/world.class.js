class World {
  player = new Player();
  level;
  background_audio = new Audio("./audio/bgmusic.mp3");
  canvas;
  ctx;
  keyboard;
  l = 0;
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisen = new StatusBarPoisen();
  throwPoisen = [];
  throwBubble = [];
  lastShotTime = 0;
  shotCooldown = 900; // 0.8seconds in milliseconds
  lastPoisenThrowTime = 0;
  poisenThrowCooldown = 700; // 0.7seconds in milliseconds

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
    }, 100);
  }

  distanceEndbossPlayer() {
    if (this.player.x > 2850 && this.l == 0) {
      this.l++;
      this.level.endboss[0].attack();
    }
  }

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
  hitEndboss(boss, j) {
    boss.hitstaken++;
    this.level.endboss[j].hit();
    if (boss.hitstaken >= 5) {
      this.level.endboss.splice(j, 1);
      menuVictory();
    }
  }

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

  checkCollisionEndboss() {
    this.level.endboss.forEach((endboss) => {
      if (this.player.isCollidingPlayer(endboss)) {
        this.player.hit();
        this.statusBarHealth.setHealth(this.player.health);
      }
    });
  }

  checkCollision() {
    this.level.enemies.forEach((enemy) => {
      if (this.player.isCollidingPlayer(enemy)) {
        this.player.hit();
        this.statusBarHealth.setHealth(this.player.health);
      }
    });
  }

  checkPoisenThrow() {
    const currentTime = Date.now();

    if (
      this.keyboard.SPACE &&
      currentTime - this.lastPoisenThrowTime > this.poisenThrowCooldown
    ) {
      if (this.player.poisen > 0) {
        let bottle = new ThrowPoisen(this.player.x, this.player.y);
        if (!isMutetd) {
          bottle.throw_sound.play();
        }
        this.throwPoisen.push(bottle);
        this.player.poisen -= 20;
        this.lastPoisenThrowTime = currentTime; // Update the last throw time
      }
    }
  }
  checkBubbleThrow() {
    const currentTime = Date.now();

    if (
      this.keyboard.E &&
      currentTime - this.lastShotTime > this.shotCooldown
    ) {
      let bubble = new throwBubble(this.player.x, this.player.y);
      if (!isMutetd) {
        //Sound
      }
      this.throwBubble.push(bubble);
      this.lastShotTime = currentTime; // Update the last shot time
    }
  }

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

  drawArrayFun() {
    this.addToMapArray(this.level.backgroundObjects);
    this.addToMapArray(this.level.enemies);
    this.addToMapArray(this.level.endboss);
    this.addToMapArray(this.level.coins);
    this.addToMapArray(this.level.poisen);
    this.addToMapArray(this.throwPoisen);
    this.addToMapArray(this.throwBubble);
  }

  drawMapFun() {
    this.addToMap(this.player);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarPoisen);
  }

  addToMapArray(y) {
    y.forEach((x) => {
      this.addToMap(x);
    });
  }

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

  flipImage(obj) {
    this.ctx.save();
    this.ctx.translate(obj.width, 0);
    this.ctx.scale(-1, 1);
    obj.x = obj.x * -1;
  }

  flipImageBack(obj) {
    obj.x = obj.x * -1;
    this.ctx.restore();
  }
}
