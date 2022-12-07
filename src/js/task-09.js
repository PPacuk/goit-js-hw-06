function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const handleColor = () => {
	const body = document.querySelector("body");
	const spanTextColor = document.querySelector(".color");

	body.style.backgroundColor = getRandomHexColor();
	spanTextColor.textContent = body.style.backgroundColor;
};

btn.addEventListener("click", handleColor);
