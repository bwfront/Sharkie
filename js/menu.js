function mainMenuStart() {
  canvas = document.getElementById("canvas");
  menu = document.getElementById("mainmenu");
  menu.style.display = "none";
  canvas.style.display = "unset";
  init();

  fullscreen = document.getElementById("fullscreen");
}

function closeControl() {
  menu = document.getElementById("mainmenu");
  menu.innerHTML = `
        <a class="icon" onclick="openControl()">
            <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 
                    56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 
                    0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 
                    0h80v-80h-80v80ZM160-280v-400 400Z" 
                />
            </svg>
        </a>
        <div id="heading">Sharkie</div>
        <div class="button">
            <a onclick="mainMenuStart()"><img class="start-button" src="../img/6.Botones/Start/4.png"></a>
        </div>
    `;
}

function openControl() {
  menu = document.getElementById("mainmenu");
  menu.innerHTML = `
  <a class="icon" onclick="closeControl()">
  <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path
          d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
</a>
<div id="heading">Control</div>
<div class="control-con">
  <div class="control-content"><img class="control-img" src="img/6.Botones/Key/arrow keys.png">W A S D / SWIM</div>
  <div class="control-content"><img class="control-img space" src="img/6.Botones/Key/Space Bar key.png">Shoot</div>
</div>
    `;
}

function mainMenuFullscreen() {
  canvas = document.getElementById("canvas");
  canvas.style.display = "unset";
}
