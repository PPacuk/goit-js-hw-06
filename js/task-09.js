function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const body = document.querySelector("body");
const spanTextColor = document.querySelector(".color");
body.style.backgroundColor = "rgb(250, 250, 250)";
spanTextColor.textContent = body.style.backgroundColor;

const btn = document.querySelector(".change-color");
const handleColor = () => {
	body.style.backgroundColor = getRandomHexColor();
	spanTextColor.textContent = body.style.backgroundColor;
};

btn.addEventListener("click", handleColor);
