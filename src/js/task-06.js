const textInput = document.querySelector("#validation-input");
const handler = (event) => {
	if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
		textInput.classList.add("valid");
		textInput.classList.replace("invalid", "valid");
	} else {
		textInput.classList.add("invalid");
		textInput.classList.replace("valid", "invalid");
	}
};

textInput.addEventListener("blur", handler);
