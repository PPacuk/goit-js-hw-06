const slide = document.querySelector("#font-size-control");
const slideValues = slide.value;
const text = document.querySelector("#text");

text.addEventListener("change", (event) => (event.style.fontSize = slideValues));
console.log(text);
