class World {
  player = new Character();
  enemies = [new EnemyFish(), new EnemyFish(), new EnemyFish()];
  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    let pl = this.player;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.right);
    
    this.ctx.drawImage(pl.img, pl.x, pl.y, pl.width, pl.height);
    this.enemies.forEach(enemy => {
        this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
