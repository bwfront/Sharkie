class MovableObject extends DrawableObject{
  speed;
  otherDirection = false;
  lastHit = 0;
  coin = 0;
  poisen = 0;

  isColliding(obj) {
    return this.x + this.width >= obj.x && this.x <= obj.x + obj.width;
  }

  hit() {
    this.health -= 5;
    if (this.health < 0) {
      this.health = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 2;
  }

  isDead() {
    return this.health == 0;
  }

  addCoin(){
    this.coin += 10;
  }
  addPoisen(){
    this.poisen += 10;
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
