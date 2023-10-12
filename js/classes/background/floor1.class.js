class Floor1 extends MovableObject {
  x = 0;
  y = 80;
  height = 400;
  width = 1440;
  constructor(x) {
    super().loadImage("./img/3. Background/Legacy/Layers/2. Floor/L3.png");
    this.x = x;
  }
}
