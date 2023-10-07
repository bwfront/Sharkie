class EnemyFish extends MovableObject {
  constructor() {
    super().loadImage(
      "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );
    this.x = 300 + Math.random() * 500;
    this.y = 40 + Math.random() * 300;
    this.height = 100;
    this.width = 100;
  }
}
