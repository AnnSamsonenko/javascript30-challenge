const refs = {
  secondHand: document.querySelector(".second-hand"),
  minuteHand: document.querySelector(".min-hand"),
  hourHand: document.querySelector(".hour-hand"),
};

function setDate() {
  const now = new Date();
  getSeconds(now);
  getMinutes(now);
  getHours(now);
}

setInterval(setDate, 1000);

function getSeconds(now) {
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  refs.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

function getMinutes(now) {
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  refs.minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function getHours(now) {
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  refs.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
