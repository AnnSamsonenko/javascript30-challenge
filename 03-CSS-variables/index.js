const inputs = document.querySelector(".controls");

inputs.addEventListener("change", onInputChange);
inputs.addEventListener("mousemove", onInputChange);

function onInputChange({ target }) {
  const suffix = target.dataset.sizing || "";
  //changing the variables in :root
  document.documentElement.style.setProperty(
    `--${target.name}`,
    target.value + suffix
  );
}
