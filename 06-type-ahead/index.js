const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let wordToMatch = "";

const refs = {
  searchInput: document.querySelector(".search"),
  results: document.querySelector(".suggestions"),
};

refs.searchInput.addEventListener("input", onInputChange);

function onInputChange(e) {
  wordToMatch = e.target.value.trim();

  if (e.target.value.trim() === "") {
    refs.results.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
    return;
  }

  fetch(endpoint)
    .then((response) => response.json())
    .then(findMatches);
}

function findMatches(data) {
  const filtredMatches = data.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });

  displayMatches(filtredMatches);
}

function displayMatches(filtredMatches) {
  const html = filtredMatches
    .map((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${wordToMatch}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${wordToMatch}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");
  refs.results.innerHTML = html;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
