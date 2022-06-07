let data = [];
const container = document.querySelector("#container");
const select = document.getElementById("select");
const center = document.getElementById("center");

// const key = "5613429-93ade0f98fdba78881baab188";
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
    container.innerHTML += `<div class="xxxx">
        <img class="img-fluid" src="${d.imageUrl}" />
        <div >
            <p>Title: ${d.title}</p>
            <p>Author: ${d.author}</p>
            <p><a href=${d.url} target='_blank'>Link</a></p>
        </div>
    </div>`;
  });
}

// search.addEventListener('keyup', (e) => {
//     if (e.keyCode === 13) {
//         fetchFromAPI(search)
//     }
// })
