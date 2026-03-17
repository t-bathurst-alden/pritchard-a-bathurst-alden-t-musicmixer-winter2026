const albumCovers = document.querySelectorAll("#vinyls img");
const theAudioEl = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const rewindButton = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');

function loadAudio() {
   theAudioEl.src = `audio/${this.dataset.trackref}.mp3`;
   theAudioEl.load();
   playAudio();

}

function playAudio() {
   theAudioEl.play();
}

function pauseAudio () {
   theAudioEl.pause();
}

function restartAudio() {
   theAudioEl.currentTime = 0;
   playAudio();
}

function setVolume() {
   theAudioEl.volume=(this.value/100);
}


albumCovers.forEach(cover => cover.addEventListener('dropped', loadAudio));

playButton.addEventListener("click", playAudio);

pauseButton.addEventListener("click", pauseAudio);

rewindButton.addEventListener("click", restartAudio);

volSlider.addEventListener("change", setVolume);