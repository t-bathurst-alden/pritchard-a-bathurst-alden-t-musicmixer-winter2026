console.log("JS File Connected")

const theAudioEl = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const rewindButton = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');
const songs = document.querySelectorAll('.songs');
const vinyls = document.querySelector('#vinyls');
const targetZones = document.querySelectorAll('.targetzone');
let currentDraggedElement = null;

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

function dragStart() {
      currentDraggedElement = this;
    }
    
function dragOver(e) {
      e.preventDefault();
    }

function dragEnter(e) {
       e.preventDefault();
      this.classList.add("blue");
    } 

function dragLeave(e) {
      e.preventDefault();
      this.classList.remove("blue");
    }

function drop(e) {
      e.preventDefault();
      this.classList.remove("blue");

      if (this.children.length >= 1) { 
		      return;
	    }
      
      this.appendChild(currentDraggedElement);

      currentDraggedElement = null;
      }

vinyls.forEach(songs => songs.addEventListener('dropped', loadAudio));

playButton.addEventListener("click", playAudio);

pauseButton.addEventListener("click", pauseAudio);

rewindButton.addEventListener("click", restartAudio);

volSlider.addEventListener("change", setVolume);

targetZones.forEach(zone => {
      zone.addEventListener('dragleave', dragLeave);
      zone.addEventListener('dragenter', dragEnter);
      zone.addEventListener('dragover', dragOver);
      zone.addEventListener('drop', drop);
    });