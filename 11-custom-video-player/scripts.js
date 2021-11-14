const refs = {
  player: document.querySelector(".player"),
  video: document.querySelector(".viewer"),
  progress: document.querySelector(".progress"),
  progressBar: document.querySelector(".progress__filled"),
  toggle: document.querySelector(".toggle"),
  skipButtons: document.querySelectorAll("[data-skip]"),
  ranges: document.querySelectorAll(".player__slider"),
};

function togglePlay() {
  const method = refs.video.paused ? "play" : "pause";
  refs.video[method]();
}

function updateButton(e) {
  const icon = e.target.paused ? "►" : "❚ ❚";
  refs.toggle.textContent = icon;
}

function skip(e) {
  refs.video.currentTime += parseFloat(e.target.dataset.skip);
}

function onRangeUpdate(e) {
  refs.video[e.target.name] = e.target.value;
}

function onVideoProgress(e) {
  const percent = (refs.video.currentTime / refs.video.duration) * 100;
  refs.progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime =
    (e.offsetX / refs.progress.offsetWidth) * refs.video.duration;
  refs.video.currentTime = scrubTime;
}
let mousedown = false;
refs.video.addEventListener("click", togglePlay);
refs.video.addEventListener("play", updateButton);
refs.video.addEventListener("pause", updateButton);
refs.video.addEventListener("timeupdate", onVideoProgress);
refs.toggle.addEventListener("click", togglePlay);
refs.skipButtons.forEach((button) => button.addEventListener("click", skip));
refs.ranges.forEach((range) => range.addEventListener("change", onRangeUpdate));
refs.ranges.forEach((range) =>
  range.addEventListener("mousemove", onRangeUpdate)
);
refs.progress.addEventListener("click", scrub);
refs.progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
refs.progress.addEventListener("mousedown", () => (mousedown = true));
refs.progress.addEventListener("mouseup", () => (mousedown = false));
