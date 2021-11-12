const checkboxes = document.querySelectorAll("input[type='checkbox']");
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", onCheckboxClick)
);

let lastchecked;

function onCheckboxClick(e) {
  let inBetween = false;

  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === e.target || checkbox === lastchecked) {
        inBetween = !inBetween;
        console.log("starting to check them inbetween");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastchecked = e.target;
}
