/**
 * Array to store all active audio instances.
 * @type {Array<Audio>}
 */
window.allAudioInstances = [];

/**
 * Boolean to represent if the audio is currently muted.
 * @type {boolean}
 */
let isMutetd = false;

/**
 * Reference to the original Audio constructor.
 * @type {Function}
 */
const OriginalAudio = Audio;

/**
 * Toggles the mute state and updates the audio button's content accordingly.
 */
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

/**
 * Updates the audio button's content based on the current mute state.
 */
function readAudio() {
  let audioCon = document.getElementById("btn-audio");
  if (!isMutetd) {
    audioCon.innerHTML = unmuteHTML();
  } else {
    audioCon.innerHTML = muteHTML();
  }
}

/**
 * Creates a new audio instance and
 * adds it to the global array of audio instances.
 * Also sets up an event listener to remove the audio from the global array
 * once it has finished playing.
 * @param {...any} args - Arguments passed to the Audio constructor.
 * @returns {Audio} - A new Audio instance.
 */
Audio = function (...args) {
  const instance = new OriginalAudio(...args);

  // Remove the finished played Audio
  instance.addEventListener("ended", () => {
    const index = window.allAudioInstances.indexOf(instance);
    if (index !== -1) {
      window.allAudioInstances.splice(index, 1);
    }
  });

  window.allAudioInstances.push(instance);
  return instance;
};

/**
 * Mutes or unmutes all active audio instances based on the global isMuted state.
 */
function muteAllAudio() {
  window.allAudioInstances.forEach((audio) => {
    audio.muted = isMutetd;
  });
}

/**
 * Returns the HTML content for the unmuted state.
 * @returns {string} - HTML string.
 */
function unmuteHTML() {
  return `                
    Mute`;
}

/**
 * Returns the HTML content for the muted state.
 * @returns {string} - HTML string.
 */
function muteHTML() {
  return `                
    Sound`;
}
