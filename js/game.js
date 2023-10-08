let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
    if(name == "w"){
        keyboard.UP = true;
    }
    if(name == "a"){
        keyboard.LEFT = true;
    }
    if(name == "s"){
        keyboard.DOWN = true;
    }
    if(name == "d"){
        keyboard.RIGHT = true;
    }
  }, false);