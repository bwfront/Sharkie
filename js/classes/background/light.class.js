class Light extends MovableObject{
    constructor(){
        super().loadImage('img/3. Background/Legacy/Layers/1. Light/1.png')
        this.x = 0;
        this.y = -20;
        this.height = 600;
        this.width = 700 + Math.random() * 300;
    }
}