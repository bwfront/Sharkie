class World {
  player = new Player();
  level = level1;
  background_audio = new Audio('audio/bgmusic.mp3');
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarPoisen = new StatusBarPoisen();
  throwPoisen = [];
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
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
    this.checkCollision();
    this.checkCollisionCoin();
    this.checkCollisionPoisen();
    this.checkPoisenThrow();
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

  checkPoisenThrow() {
    setInterval(() => {
      if (this.keyboard.E) {
        if(this.player.poisen > 0){
          let bottle = new ThrowPoisen(this.player.x, this.player.y);
          this.throwPoisen.push(bottle);
          let checkThrow = true;
          this.player.poisen -= 20;
          if(this.throwPoisen && checkThrow){
            checkThrow = false;
            setInterval(() => {
              this.throwPoisen.splice(0);
            }, 700);
          }
        }
      }
    }, 100);
  }

  checkCollisionCoin() {
    setInterval(() => {
      for (let i = this.level.coins.length - 1; i >= 0; i--) {
        let coin = this.level.coins[i];
        if (this.player.isColliding(coin)) {
          this.player.addCoin();
          this.statusBarCoin.setCoin(this.player.coin);
          this.level.coins.splice(i, 1);
        }
      }
    }, 200);
  }
  
  checkCollisionPoisen() {
    setInterval(() => {
      this.statusBarPoisen.setPoisen(this.player.poisen);
      for (let i = this.level.poisen.length - 1; i >= 0; i--) {
        let poisen = this.level.poisen[i];
        if (this.player.isColliding(poisen)) {
          this.player.addPoisen();
          this.level.poisen.splice(i, 1);
        }
      }
    }, 200);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.addToMapArray(this.level.backgroundObjects);
    this.addToMapArray(this.level.enemies);
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
