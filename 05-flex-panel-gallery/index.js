const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", onPanelClick));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", OnTransitionedPanel)
);

function onPanelClick(e) {
  e.currentTarget.classList.toggle("open");
}

function OnTransitionedPanel(e) {
  if (e.propertyName.includes("flex")) {
    e.target.firstElementChild.classList.toggle("open-active");
    e.target.lastElementChild.classList.toggle("open-active");
  }
}
