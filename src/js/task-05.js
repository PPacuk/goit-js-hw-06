const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
	const isEmpty = textInput.value.length === 0;
	textOutput.textContent = isEmpty ? "Anonymous" : event.currentTarget.value;
});
