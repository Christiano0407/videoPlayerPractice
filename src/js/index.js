console.group("Video Player");
// <<<< ============== Variables ===================== >>>>
const player = document.querySelector(`.player`);
console.log(player);
// == Tenemos que tomar el video (etiqueta, no la clase ) === >
const media = document.querySelector("video");
console.log(media);
const controls = document.querySelector(`.controls`);
console.log(controls);
const playBtn = document.querySelector(".play");
console.log(playBtn);
const playBtnIcon = playBtn.querySelector("i");
console.log(playBtnIcon);
const stopBtn = document.querySelector(".stop");
console.log(stopBtn);
const progressBar = document.querySelector(".progress");
console.log(progressBar);
const timestamp = document.querySelector(".timestamp");
console.log(timestamp);

// <<<< ================ Functiones / Events ================= >>>>
media.removeAttribute(`controls`);
controls.style.visibility = `visible`;

// = Listen for event ===>
media.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress);
playBtn.addEventListener("click", playPauseVideo);
stopBtn.addEventListener("click", stopVideo);
media.addEventListener("timeupdate", updateVideoProgress);

// == Functions == >
function playPauseVideo() {
  if (media.paused) {
    media.play();
  } else {
    media.pause();
  }
  //video[video.paused ? "play" : "pause"]();

  playBtnToggleIcon();
}

function playBtnToggleIcon() {
  if (media.paused) {
    playBtnIcon.classList.remove("fa-pause");
    playBtnIcon.classList.add("fa-play");
  } else {
    playBtnIcon.classList.remove("fa-play");
    playBtnIcon.classList.add("fa-pause");
  }
}

function stopVideo() {
  media.pause();
  media.currentTime = 0;
  playBtnToggleIcon();
  progressBar.value = 0;
}

function setVideoProgress() {
  media.currentTime = Number((progressBar.value * media.duration) / 100);
}

function updateVideoProgress() {
  progressBar.value = Number((media.currentTime / media.duration) * 100);
  let minutes = Math.floor(media.currentTime / 60);
  let seconds = Math.floor(media.currentTime % 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timestamp.textContent = `${minutes}: ${seconds}`;
}

console.groupEnd();
