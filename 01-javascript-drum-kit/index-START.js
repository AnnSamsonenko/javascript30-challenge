const keys = document.querySelector(".keys");
window.addEventListener("keydown", onKeyPress);
keys.addEventListener("transitionend", onTransitionedEl);

function onKeyPress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function onTransitionedEl(event) {
  if (event.propertyName !== "transform") {
    return;
  }

  event.target.classList.remove("playing");
}
