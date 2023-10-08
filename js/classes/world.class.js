class World {
  player = new Player();
  enemies = level1.enemies;
  backgroundObjects = level1.backgroundObjects;
  
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.player.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.addToMapArray(this.backgroundObjects);
    this.addToMapArray(this.enemies);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });

    this.addToMap(this.player);
    this.ctx.translate(-this.camera_x, 0);
  }

  addToMapArray(y){
    y.forEach((x) => {
      this.addToMap(x);
    });
  }

  addToMap(obj) {
    if (obj.otherDirection) {
      this.ctx.save();
      this.ctx.translate(obj.width, 0);
      this.ctx.scale(-1, 1);
      obj.x = obj.x * -1;
    }
    this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
    if (obj.otherDirection) {
      obj.x = obj.x * -1;
      this.ctx.restore();
    }
  }
}
