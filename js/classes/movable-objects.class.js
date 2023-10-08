class MovableObject {
  x;
  y;
  img;
  height;
  width;
  imagesCache = [];
  currentImage = 0;
  speed;
  otherDirection = false;
  health;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imagesCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawRectangle(ctx) {
    //Rectangle Red
    if (
      this instanceof Player ||
      this instanceof EnemyFish ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "Red";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding(obj) {
    return (
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width 

    );
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imagesCache[path];
    this.currentImage++;
  }
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
