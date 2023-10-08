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


  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
