const playPausedBtn = document.querySelector(".play-pause-btn");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");

playPausedBtn.addEventListener("click", togglePlay);

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused");
});
video.addEventListener("pause", () => {
  videoContainer.classList.add("paused");
});
