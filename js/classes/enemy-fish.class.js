class EnemyFish extends MovableObject {
  height = 70;
  width = 90;

  IMAGES_SWIM = [
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
    '../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
  ];

  constructor() {
    super().loadImage(
      "../img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png"
    );
    this.x = 400 + Math.random() * 500;
    this.y = 40 + Math.random() * 300;
    
      this.loadImages(this.IMAGES_SWIM);
      this.animate();
      
      this.speed = 0.2 + Math.random() / 2;

    }
    animate(){
      this.moveLeft();
      
      setInterval(() =>{
          this.playAnimation(this.IMAGES_SWIM);
      },1000 / 7);
  }

}


