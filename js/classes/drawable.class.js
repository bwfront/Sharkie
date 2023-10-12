/**
 * Represents a drawable object with base properties and methods for visual representation.
 */
class DrawableObject {
  /**
   * Constructs a new DrawableObject instance with initial states.
   */
  constructor() {
    /** @type {number} The x-coordinate position of the object. */
    this.x;

    /** @type {number} The y-coordinate position of the object. */
    this.y;

    /** @type {number} Height of the object. */
    this.height;

    /** @type {number} Width of the object. */
    this.width;

    /**
     * @type {Image} The current image object to be drawn.
     */
    this.img;

    /**
     * @type {Object} A cache of loaded images for this object.
     */
    this.imagesCache = [];

    /**
     * @type {number} The index of the current image in the animation sequence.
     */
    this.currentImage = 0;
  }

  /**
   * Loads an image for the drawable object.
   * @param {string} path - The path to the image file.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the object on the canvas.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Loads an array of images and caches them for quick access.
   * @param {string[]} arr - Array of image paths to be loaded.
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imagesCache[path] = img;
    });
  }

  /**
   * Sets the status (typically the current image for animation) of the object.
   */
  setStatus() {
    let path = this.IMAGES[this.getIndex()];
    this.img = this.imagesCache[path];
  }

  /**
   * Provides the index for the current image in the animation sequence.
   * @returns {number} Index of the current image.
   */
  getIndex() {
    return 0;
  }

  /**
   * If you want to add More Objects you can Draw a Rectangle around, helpful for debugging.
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
   */
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
