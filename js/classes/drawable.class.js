class DrawableObject {
  x;
  y;
  height;
  width;
  img;
  imagesCache = [];
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imagesCache[path] = img;
    });
  }
  setStatus() {
    let path = this.IMAGES[this.getIndex()];
    this.img = this.imagesCache[path];
  }
  getIndex() {
    return 0;
  }

  drawRectangle(ctx) {
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
}
