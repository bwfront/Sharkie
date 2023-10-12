window.allAudioInstances = [];
let isMutetd = false;
const OriginalAudio = Audio;
function setAudio() {
  let audioCon = document.getElementById("audiobtn");
  if (!isMutetd) {
    audioCon.innerHTML = muteHTML();
    isMutetd = true;
  } else {
    audioCon.innerHTML = unmuteHTML();
    isMutetd = false;
  }
  muteAllAudio();
}
function readAudio() {
  let audioCon = document.getElementById("audiobtn");
  if (!isMutetd) {
    audioCon.innerHTML = unmuteHTML();
  } else {
    audioCon.innerHTML = muteHTML();
  }
}

Audio = function (...args) {
  const instance = new OriginalAudio(...args);
  window.allAudioInstances.push(instance);
  return instance;
};

function muteAllAudio() {
  window.allAudioInstances.forEach((audio) => {
    audio.muted = isMutetd;  // mute or unmute based on the isMuted state
  });
}
function unmuteHTML() {
  return `                
    Mute`;
}
function muteHTML() {
  return `                
    Sound`;
}
