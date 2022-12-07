const slide = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const rangeValue = () => {
	text.style.fontSize = slide.value + "px";
};

slide.addEventListener("input", rangeValue);
