const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return window.alert("Please fill in all the fields!");
	}
	console.log(`${email.value}, ${password.value}`);
	event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
