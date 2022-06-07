let data = [];
const container = document.querySelector("#container");
const select = document.getElementById("select");
const center = document.getElementById("center");

var category = "technology";
fetchFromAPI();

function getValue() {
  var value = select.options[select.selectedIndex].value;
  var text = select.options[select.selectedIndex].text;
  console.log(value);
  console.log(text);
  category = text;
  fetchFromAPI();
}
async function fetchFromAPI(x) {
  center.style.display = "flex";
  container.innerHTML = "";
  const response = await fetch(
    `https://inshorts.deta.dev/news?category=${category}`
  );
  const res = await response.json();
  console.log(res);
  if (res) {
    center.style.display = "none";
  }
  data = res.data;
  data.forEach((d) => {
    container.innerHTML += `<div class="card col">
        <img class="img-fluid" src="${d.imageUrl}" />
        <div >
            <p>Title: ${d.title}</p>
            <p>Author: ${d.author}</p>
            <p><a href=${d.url} target='_blank'>Link</a></p>
        </div>
    </div>`;
  });
}
