class World {
  player = new Player();
  level = level1;

  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisen = new StatusBarPoisen();

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollision();
    this.checkCollisionCoin();
    this.checkCollisionPoisen();
  }

  setWorld() {
    this.player.world = this;
  }

  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.player.isColliding(enemy)) {
          this.player.hit();
          this.statusBarHealth.setHealth(this.player.health);
        }
      });
    }, 200);
  }
  checkCollisionCoin() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.player.isColliding(coin)) {
          this.player.addCoin();
          this.statusBarCoin.setCoin(this.player.coin);
        }
      });
    }, 200);
  }
  checkCollisionPoisen() {
    setInterval(() => {
      this.level.poisen.forEach((poisen) => {
        if (this.player.isColliding(poisen)) {
          this.player.addPoisen();
          this.statusBarPoisen.setPoisen(this.player.poisen);
        }
      });
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.addToMapArray(this.level.backgroundObjects);
    this.addToMapArray(this.level.enemies);
    this.addToMapArray(this.level.coins);
    this.addToMapArray(this.level.poisen);

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
    obj.drawRectangle(this.ctx);

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
