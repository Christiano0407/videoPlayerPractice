console.group("Video Player");
// <<<< ============== Variables ===================== >>>>
const player = document.querySelector(`.player`);
console.log(player);
const video = document.getElementById(`video`);
console.log(video);
//const controls = document.querySelector(`.controls`);
const playBtnIcon = document.querySelector(`i`);
console.log(playBtnIcon);
const playBtn = document.querySelector(`.play`);
console.log(playBtn);
const stopBtn = document.querySelector(`.stop`);
console.log(stopBtn);
const progressBar = document.querySelector(`.progress`);
console.log(progressBar);
const timestamp = document.querySelector(`.timesTamp`);
console.log(timestamp);

// <<<< ================ Functiones / Events ================= >>>>
// = Listen for event ===>
video.addEventListener("click", playPauseVideo);
progressBar.addEventListener(`change`, setVideoProgress);

// == Functions == >
function playPauseVideo() {
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  video[video.paused ? "play" : "pause"]();

  playBtnToggleIcon();
}

function playBtnToggleIcon() {
  if (video.paused) {
    playBtnIcon.classList.remove("fa-pause");
    playBtnIcon.classList.add(`fa-play`);
  } else {
    playBtnIcon.classList.remove(`fa-play`);
    playBtnIcon.classList.add(`fa-pause`);
  }
}

function setVideoProgress() {
  video.currentTime = Number((progressBar.value * video.duration) / 100);
}

console.groupEnd();
