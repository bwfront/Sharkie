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
    canvas.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
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
  if (e.code === "KeyE") {
    keyboard.E = true;
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
  if (e.code === "KeyE") {
    keyboard.E = false;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn-up").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.UP = true;
  });

  document.getElementById("btn-up").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.UP = false;
  });
  document.getElementById("btn-down").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.DOWN = true;
  });

  document.getElementById("btn-down").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.DOWN = false;
  });
  document.getElementById("btn-left").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("btn-left").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });
  document.getElementById("btn-right").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("btn-right").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });
  document.getElementById("btn-shoot").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("btn-shoot").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
  document.getElementById("btn-bubble").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.E = true;
  });

  document.getElementById("btn-bubble").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.E = false;
  });
});
