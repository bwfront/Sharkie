class Light extends MovableObject{
    x = 0;
    y = -20;
    height = 600;

    constructor(){
        super().loadImage('./img/3. Background/Legacy/Layers/1. Light/1.png')
        this.width = 700 + Math.random() * 300;

        this.animate();
    }

    animate(){
        this.lightLeft()
        this.lightRight()
    }

    lightLeft(){
        setInterval(() =>{
            this.x -= 6;
            this.y += 10;
        }, 1900);
    }
    lightRight(){
        setInterval(() =>{
            this.x += 6;
            this.y -= 10;
        }, 2000);
    }
}