let canvas;
let keyboard = new Keyboard();
let world = [];
function init() {
  canvas = document.getElementById("canvas");
  if (world.length > 0) {
    world[0].background_audio.pause();
    world[0].background_audio.currentTime = 0;
    world.splice(0, 1);
  }
  world.push(new World(canvas, keyboard));
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
      canvas.requestFullscreen().catch(err => {
          alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
  } else {
      document.exitFullscreen();
  }
}

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyW") {
    keyboard.UP = true;
  }
  if (e.code === "KeyA") {
    keyboard.LEFT = true;
  }
  if (e.code === "KeyS") {
    keyboard.DOWN = true;
  }
  if (e.code === "KeyD") {
    keyboard.RIGHT = true;
  }
  if (e.code === "Space") {
    keyboard.SPACE = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "KeyW") {
    keyboard.UP = false;
  }
  if (e.code === "KeyA") {
    keyboard.LEFT = false;
  }
  if (e.code === "KeyS") {
    keyboard.DOWN = false;
  }
  if (e.code === "KeyD") {
    keyboard.RIGHT = false;
  }
  if (e.code === "Space") {
    keyboard.SPACE = false;
  }
});
