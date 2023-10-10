function mainMenuStart() {
  canvas = document.getElementById("canvas");
  menu = document.getElementById("mainmenu");
  menu.style.display = "none";
  canvas.style.display = "unset";
  init();
  checkMuted();
}

function checkMuted(){
    if(isMutetd){
        muteAllAudio();
    }
}
function displayMenu() {
  canvas = document.getElementById("canvas");
  menu = document.getElementById("mainmenu");
  menu.style.display = "unset";
  canvas.style.display = "none";
  world[0].background_audio.pause();
}

function GameOverMenu() {
  document.exitFullscreen();
  displayMenu();
  GameOverHTML();
}

function closeControl() {
  const menu = document.getElementById("mainmenu");
  menu.innerHTML = `
    <div class="icon-div">
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
        <a class="icon" id="audio-icon" onclick="setAudio()">
            <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 
                    40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" 
                    />
            </svg>
        </a>
    </div>
    <div id="heading">Sharkie</div>
    <div class="button">
        <a onclick="mainMenuStart()"><img class="start-button" src="./img/6.Botones/Start/4.png"></a>
    </div>
    `;
    readAudio();
}

function openControl() {
  const menu = document.getElementById("mainmenu");
  menu.innerHTML = `
    <div class="icon-div">
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
    </div>
    `;
    readAudio();
}

function GameOverHTML() {
  const menu = document.getElementById("mainmenu");
  menu.innerHTML = `
    <div class="icon-div">
        <a class="icon" onclick="closeControl()">
            <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
        </a>
        <a class="icon" id="audio-icon" onclick="setAudio()">
            <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 
                    40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" 
                />
            </svg>
        </a>
    </div>
    <div id="heading">Game Over</div>
    <div class="button">
        <a onclick="mainMenuStart()"><img class="start-button" src="./img/6.Botones/Try again/Recurso 18.png"></a>
    </div>
      `;
      readAudio();
}

function menuVictory() {
  document.exitFullscreen();
  displayMenu();
  let victory_sound = new Audio("./audio/victory.mp3");
  victory_sound.play();
  const menu = document.getElementById("mainmenu");
  menu.innerHTML = menuVictoryHTML();
}

function menuVictoryHTML() {
  return `
    <div class="icon-div">
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
        <a class="icon" id="audio-icon" onclick="setAudio()">
            <svg class="icon-img" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 
                    40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" 
                />
            </svg>
        </a>
    </div>
    <div id="heading"><img class="victory" src="./img/6.Botones/Tittles/You win/Recurso 20.png"></div>
    <div class="button">
        <a onclick="mainMenuStart()"><img class="start-button" src="./img/6.Botones/Start/4.png"></a>
    </div>
`;
readAudio();
}

