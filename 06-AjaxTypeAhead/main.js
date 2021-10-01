const apiUrl =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => cities.push(...data));
const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
function searchResult(text, cities) {
  const regex = new RegExp(text, "gi");
  return cities.filter((city) => {
    return city.city.match(regex);
  });
}

function addResult() {
  const results = searchResult(this.value, cities);
  const element = results
    .map(
      (item) =>
        `<li><span class="name">${item.city}</span><span class="population">${item.population}</span></li>`
    )
    .join("");
  suggestions.innerHTML = element;
}

input.addEventListener("keyup", addResult);
