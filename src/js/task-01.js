const categoriesNumber = document.querySelectorAll(".item");
const categoriesNumberLength = categoriesNumber.length;

console.log("Number of categories:", categoriesNumberLength);

const category = document.querySelectorAll("h2");

category.forEach((element) => {
	console.log("Category:", element.textContent);
	const categoryElements = document.querySelector("li > ul");

	// categoryElements.forEach((element) => {
	console.log("Elements:", categoryElements.children.length);
	// });
});
