class ThrowBubble extends MovableObject {
  /**
   * Set the bottle which is thrown and its measures
   * @param {Number} x - X-Axis where the throwable object starts at
   * @param {Number} y - Y-Axis where the throwable object starts at
   */
  constructor(x, y, direction) {
    super().loadImage("./img/1.Sharkie/Bubble trap/Bubble.png");
    this.x = direction == "right" ? x + 100 : x - +20;
    this.y = y + 80;
    this.height = 40;
    this.width = 40;
    this.direction = direction; // Store the direction
    this.throw();
  }
  bubble_sound = new Audio("./audio/bubble.mp3");
  throw() {
    this.startX = this.x;
    setInterval(() => {
      if (this.x - this.startX < 800 && this.direction == "right") {
        this.x += 2;
      } else if (this.direction == "left") {
        this.x -= 2;
      }
      this.y -= 1;
    }, 1000 / 150);
  }
}
