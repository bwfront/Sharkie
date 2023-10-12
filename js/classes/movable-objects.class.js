class MovableObject extends DrawableObject {
  speed;
  otherDirection = false;
  lastHit = 0;
  coin = 0;
  poisen = 80;
  coin_sound = new Audio("./audio/coin.wav");
  die_sound = new Audio("./audio/die.wav");
  i = 0;
  j = 0;
  isColliding(obj) {
    return (
      this.x + this.width >= obj.x &&
      this.x <= obj.x + obj.width &&
      this.y + this.height >= obj.y &&
      this.y <= obj.y + obj.height
    );
  }
  isCollidingPlayer(obj) {
    let yOffsetTop = 0.45 * this.height;
    let xOffset = 0.1 * this.width;
    let yOffsetBottom = 0.1 * this.height;
    return (
      this.x + this.width - xOffset >= obj.x &&
      this.x + xOffset <= obj.x + obj.width &&
      this.y + this.height - yOffsetBottom >= obj.y &&
      this.y + yOffsetTop <= obj.y + obj.height
    );
  }

  hit() {
    //change to 10
    this.health -= 0;
    if (this.health < 0) {
      this.health = 0;
      if (this.i < 15) {
        this.die_sound.play();
        this.i++;
      } else {
        this.die_sound.pause();
      }
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
    if (this.health == 0 && this.j == 0) {
      this.j++;
      GameOverMenu();
    }
    return this.health == 0;
  }

  addCoin() {
    this.coin_sound.play();
    this.coin += 20;
  }

  addPoisen() {
    this.coin_sound.play();
    this.poisen += 20;
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
