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
const muted = document.querySelector(`.muted`);
console.log(muted);
const mutedIconBtn = muted.querySelector(`i`);
console.log(mutedIconBtn);
const progressBar = document.querySelector(".progress");
console.log(progressBar);
const timestamp = document.querySelector(".timestamp");
console.log(timestamp);
const rwd = document.querySelector(`.rwd`);
const fwd = document.querySelector(`.fwd`);

// <<<< ================ Functiones / Events ================= >>>>
media.removeAttribute(`controls`);
controls.style.visibility = `visible`;

// = Listen for event ===>
media.addEventListener("click", playPauseVideo);
progressBar.addEventListener("change", setVideoProgress);
playBtn.addEventListener("click", playPauseVideo);
stopBtn.addEventListener("click", stopVideo);
media.addEventListener("timeupdate", updateVideoProgress);
muted.addEventListener(`click`, mutedVideo);

rwd.addEventListener(`click`, mediaBackward);
fwd.addEventListener(`click`, mediaForward);

let intervalFwd;
let intervalRwd;

// == Functions ===== >
// === PLAY >>>
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
    playBtnIcon.classList.remove("fa-pause-circle");
    playBtnIcon.classList.add("fa-play-circle");
  } else {
    playBtnIcon.classList.remove("fa-play-circle");
    playBtnIcon.classList.add("fa-pause-circle");
  }
}
// === STOP >>>>
function stopVideo() {
  media.pause();
  media.currentTime = 0;
  playBtnToggleIcon();
  progressBar.value = 0;
  // == remover los btn de atrás y adelante =>
  rwd.classList.remove(`active`);
  fwd.classList.remove(`active`);

  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
}
// === Muted === >
function mutedVideo() {
  //media.muted = true;

  if (media.muted) {
    media.muted = false;
  } else {
    media.muted = true;
  }

  mutedIconsBtn();
}

function mutedIconsBtn() {
  if (media.muted) {
    mutedIconBtn.classList.remove("fa-volume-up");
    mutedIconBtn.classList.add("fa-volume-mute");
  } else {
    mutedIconBtn.classList.remove("fa-volume-mute");
    mutedIconBtn.classList.add("fa-volume-up");
  }
}

// Volumr == >
function getVolume() {
  // = Saber cuánto tiene de vol
  console.log(media.volume);
}
getVolume();

// === PROGRESS >>>>
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
// === BTN HACIA ATRÁS Y ADELANTE  >>>>>
function mediaBackward() {
  clearInterval(intervalFwd);
  fwd.classList.remove(`active`);

  if (rwd.classList.contains(`active`)) {
    rwd.classList.remove(`active`);
    clearInterval(intervalRwd);
    media.play();
  } else {
    media.pause();
    rwd.classList.add(`active`);
    intervalRwd = setInterval(windBackward, 200);
  }
}

function windBackward() {
  if (media.currentTime <= 3) {
    rwd.classList.remove(`active`);
    clearInterval(intervalRwd);
    stopBtn();
  } else {
    media.currentTime -= 3;
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove(`active`);

  if (fwd.classList.contains(`active`)) {
    fwd.classList.remove(`active`);
    clearInterval(intervalFwd);
    media.play();
  } else {
    media.pause();
    fwd.classList.add(`active`);
    intervalFwd = setInterval(windForward, 200);
  }
}

function windForward() {
  if (media.currentTime >= media.duration - 3) {
    fwd.classList.remove(`active`);
    clearInterval(intervalFwd);
    stopBtn();
  } else {
    media.currentTime += 3;
  }
}
// ============================== ==================== ============ >>>>
console.groupEnd();
