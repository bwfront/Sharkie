class throwBubble extends MovableObject {

      /**
     * Set the bottle which is thrown and its measures
     * @param {Number} x - X-Axis where the throwable object starts at
     * @param {Number} y - Y-Axis where the throwable object starts at
     */
    constructor(x, y) {
        super().loadImage('./img/1.Sharkie/Bubble trap/Bubble.png');
        this.x = x + 100;
        this.y = y + 80;
        this.height = 40;
        this.width = 40;
        this.throw();    
    }

     throw() {
        this.startX = this.x;
        setInterval(() => {
          if (this.x - this.startX < 800) {
            this.x += 2;
            this.y -= 1;
          }
        }, 1000 / 150);
      }
}