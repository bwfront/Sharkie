class ThrowPoisen extends MovableObject {

  constructor(x, y) {
    super().loadImage("./img/4. Marcadores/Poisen/Animada/1.png");
    this.x = x + 100;
    this.y = y + 80;
    this.height = 40;
    this.width = 40;
    this.throw();
  }

  throw_sound = new Audio('audio/throw.wav');
  throw() {
    this.startX = this.x;
    setInterval(() => {
      if (this.x - this.startX < 800) {
        this.x += 2;
        this.y += 0.6;
      }
    }, 1000 / 150);
  }
}
