class Coins extends MovableObject{

    height = 40;
    width = 40;
  
    IMAGES_IDLE = [
      './img/4. Marcadores/1. Coins/1.png',
      './img/4. Marcadores/1. Coins/2.png',
      './img/4. Marcadores/1. Coins/3.png',
      './img/4. Marcadores/1. Coins/4.png',
    ];
  
    constructor() {
      super().loadImage(
        "./img/4. Marcadores/1. Coins/1.png"
      );
      this.x = 200 + Math.random() * 600;
      this.y = 0 + Math.random() * 300;
      
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
    
      }
      animate(){
        setInterval(() =>{
            this.playAnimation(this.IMAGES_IDLE);
        },1000 / 7);
    }
  
  }
  
  
  