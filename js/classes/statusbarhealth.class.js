class StatusBarHealth extends DrawableObject {
  IMAGES = [
    "../img/4. Marcadores/orange/100_  copia.png",
    "../img/4. Marcadores/orange/80_  copia.png",
    "../img/4. Marcadores/orange/60_  copia.png",
    "../img/4. Marcadores/orange/40_  copia.png",
    "../img/4. Marcadores/orange/20_ copia 2.png",
    "../img/4. Marcadores/orange/0_  copia.png",
  ];

  playerhealth = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES); 
    this.x = 10;
    this.y = 0;
    this.height = 60;
    this.width = 210;
    this.setHealth(100);
  }

  setHealth(playerhealth){
    this.playerhealth = playerhealth;
    let path = this.IMAGES[this.getHealthIndex()];
    this.img = this.imagesCache[path];
  }

  getHealthIndex() {
    if (this.playerhealth == 100) {
      return 0;
    } else if (this.playerhealth >= 80) {
      return 1;
    } else if (this.playerhealth >= 60) {
      return 2;
    } else if (this.playerhealth >= 40) {
      return 3;
    } else if (this.playerhealth > 0) {
      return 4;
    } else if (this.playerhealth = 0){
      return 5;
    }else{
        return 5;
    }
  }
}
