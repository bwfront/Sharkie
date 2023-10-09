function mainMenuStart(){
    canvas = document.getElementById('canvas');
    menu = document.getElementById('mainmenu');
    menu.style.display = 'none';
    canvas.style.display = 'unset';
    init();
    
    
    fullscreen = document.getElementById('fullscreen');


}
function mainMenuFullscreen(){
    canvas = document.getElementById('canvas');
    canvas.style.display = 'unset';
}