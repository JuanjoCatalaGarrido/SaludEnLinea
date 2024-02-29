let audio = document.getElementById("welcome-audio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

function changeVolume(volume) {
  audio.volume = volume / 100;
}
