window.allAudioInstances = [];
let isMutetd = false;
const OriginalAudio = Audio;

function setAudio() {
  let audioCon = document.getElementById("btn-audio");
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
  let audioCon = document.getElementById("btn-audio");
  if (!isMutetd) {
    audioCon.innerHTML = unmuteHTML();
  } else {
    audioCon.innerHTML = muteHTML();
  }
}

Audio = function (...args) {
  const instance = new OriginalAudio(...args);

  // Listen for the 'ended' event to remove the audio instance once it has finished playing
  instance.addEventListener('ended', () => {
    const index = window.allAudioInstances.indexOf(instance);
    if (index !== -1) {
      window.allAudioInstances.splice(index, 1);
    }
  });

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
