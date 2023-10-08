let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}


window.addEventListener('keydown',  (e) =>{
    if(e.code === 'KeyW'){
        keyboard.UP = true;
    }
    if(e.code === 'KeyA'){
        keyboard.LEFT = true;
    }
    if(e.code === 'KeyS'){
        keyboard.DOWN = true;
    }
    if(e.code === 'KeyD'){
        keyboard.RIGHT = true;
    }
    if(e.code === 'Space'){
        keyboard.SPACE = true;
    }  
});

window.addEventListener('keyup',  (e) =>{
    if(e.code === 'KeyW'){
        keyboard.UP = false;
    }
    if(e.code === 'KeyA'){
        keyboard.LEFT = false;
    }
    if(e.code === 'KeyS'){
        keyboard.DOWN = false;
    }
    if(e.code === 'KeyD'){
        keyboard.RIGHT = false;
    }
    if(e.code === 'Space'){
        console.log(keyboard)
        keyboard.SPACE = false;
    }  
});