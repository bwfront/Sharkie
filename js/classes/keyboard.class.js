/**
 * Represents the state of various keyboard keys.
 */
class Keyboard {
  /**
   * Constructs a new Keyboard instance with initial states for the keys.
   */
  constructor() {
    /** @type {boolean} Indicates whether the UP arrow key is pressed. */
    this.UP = false;

    /** @type {boolean} Indicates whether the DOWN arrow key is pressed. */
    this.DOWN = false;

    /** @type {boolean} Indicates whether the LEFT arrow key is pressed. */
    this.LEFT = false;

    /** @type {boolean} Indicates whether the RIGHT arrow key is pressed. */
    this.RIGHT = false;

    /** @type {boolean} Indicates whether the SPACE key is pressed. */
    this.SPACE = false;

    /** @type {boolean} Indicates whether the E key is pressed. */
    this.E = false;
  }
}
