const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
   if (textOutput.textContent.length === 0) {
		textOutput.textContent = "anonymous";
   } else {
		textOutput.textContent = event.currentTarget.value;
   }
    // console.log(textOutput.textContent);
    // console.log(textOutput.textContent.length);
});
