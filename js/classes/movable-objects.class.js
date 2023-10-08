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

  playAnimation(images){
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
