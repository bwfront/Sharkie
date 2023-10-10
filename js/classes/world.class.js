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
      this.checkThrowPoisenHitsEnemy();
      this.checkThrowPoisenHitsEndboss();
      this.distanceEndbossPlayer();
      this.checkCollisionEndboss();
    }, 100);
  }

  distanceEndbossPlayer(){
    if(this.player.x > 500 && this.l == 0){
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
          boss.hitstaken++;
          this.level.endboss[j].hit();
          if (boss.hitstaken >= 5) {
            this.level.endboss.splice(j, 1);
            menuVictory();
          }
          this.throwPoisen.splice(i, 1);
          break;
        }
      }
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
    if (this.keyboard.SPACE) {
      if (this.player.poisen > 0) {
        let bottle = new ThrowPoisen(this.player.x, this.player.y);
        this.throwPoisen.push(bottle);

        this.player.poisen -= 20;
      }
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

    this.addToMapArray(this.level.backgroundObjects);
    this.addToMapArray(this.level.enemies);
    this.addToMapArray(this.level.endboss);
    this.addToMapArray(this.level.coins);
    this.addToMapArray(this.level.poisen);
    this.addToMapArray(this.throwPoisen);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });

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
