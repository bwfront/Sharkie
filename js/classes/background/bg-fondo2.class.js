class bgFondo2 extends MovableObject {
  x = 0;
  y = -100;
  height = 550;
  width = 1440;
  constructor(x) {
    super().loadImage("./img/3. Background/Legacy/Layers/4.Fondo 2/D3.png");
    this.x = x;
  }
}
