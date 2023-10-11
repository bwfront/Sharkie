class StatusBarCoin extends DrawableObject {
  IMAGES = [
    "./img/4. Marcadores/orange/0_  copia 2.png",
    "./img/4. Marcadores/orange/20_  copia.png",
    "./img/4. Marcadores/orange/40_  copia 2.png",
    "./img/4. Marcadores/orange/60_  copia 2.png",
    "./img/4. Marcadores/orange/80_  copia 2.png",
    "./img/4. Marcadores/orange/100_ copia 2.png",
  ];

  playercoin = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 50;
    this.height = 60;
    this.width = 210;
    this.setCoin(0);
  }

  setCoin(playercoin) {
    this.playercoin = playercoin;
    this.setStatus();
  }
  getIndex() {
    return this.getCoinIndex();
  }

  getCoinIndex() {
    if (this.playercoin >= 100) {
      return 5;
    } else if (this.playercoin >= 80) {
      return 4;
    } else if (this.playercoin >= 60) {
      return 3;
    } else if (this.playercoin >= 40) {
      return 2;
    } else if (this.playercoin >= 20) {
      return 1;
    } else if ((this.playercoin = 0)) {
      return 0;
    } else {
      return 0;
    }
  }
}
