class World {
  player = new Player();
  enemies = [new EnemyFish(), new EnemyFish(), new EnemyFish()];

  light = new Light();
  floor = new Floor1();
  bgwater = new bgWater();
  bgfondo1 = new bgFondo1();
  bgfondo2 = new bgFondo2();

  canvas;
  ctx;
  keyboard;


  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld(){
    this.player.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.right);

    this.addToMap(this.bgwater);
    this.addToMap(this.bgfondo2);
    this.addToMap(this.bgfondo1);
    this.addToMap(this.floor);

    this.addToMap(this.player);

    this.enemies.forEach((enemy) => {
      this.addToMap(enemy);
    });
    this.addToMap(this.light);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addToMap(obj) {
    this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
  }
}
