const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener("submit", onAddingItem);
itemsList.addEventListener("click", toggleDone);

function onAddingItem(e) {
  e.preventDefault();
  const text = e.target.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  renderList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
}

function renderList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
    <li>
    <input type="checkbox" data-index=${index} id=item${index} ${
        plate.done ? "checked" : ""
      }/>
    <label for="item${index}">${plate.text}</label>
    </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) {
    return;
  }

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  renderList(items, itemsList);
}

renderList(items, itemsList);
