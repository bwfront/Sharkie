class StatusBarPoisen extends DrawableObject {
  IMAGES = [
    "../img/4. Marcadores/orange/0_ copia.png",
    "../img/4. Marcadores/orange/20_ copia.png",
    "../img/4. Marcadores/orange/40_ copia.png",
    "../img/4. Marcadores/orange/60_ copia.png",
    "../img/4. Marcadores/orange/80_ copia.png",
    "../img/4. Marcadores/orange/100_ copia.png",
  ];

  playerPoisen = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 100;
    this.height = 60;
    this.width = 210;
    this.setPoisen(0);
  }

  setPoisen(playerPoisen) {
    this.playerPoisen = playerPoisen;
    this.setStatus();
  }
  getIndex() {
    return this.getPoisenIndex();
  }

  getPoisenIndex() {
    if (this.playerPoisen > 100) {
      return 5;
    } else if (this.playerPoisen >= 80) {
      return 4;
    } else if (this.playerPoisen >= 60) {
      return 3;
    } else if (this.playerPoisen >= 40) {
      return 2;
    } else if (this.playerPoisen >= 20) {
      return 1;
    } else if ((this.playerPoisen = 0)) {
      return 0;
    } else {
      return 0;
    }
  }
}
