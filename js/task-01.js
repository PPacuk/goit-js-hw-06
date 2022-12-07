const categoriesNumber = document.querySelectorAll(".item");
const categoriesNumberLength = categoriesNumber.length;

console.log("Number of categories:", categoriesNumberLength);

const category = document.querySelectorAll("h2");

category.forEach((element) => {
	console.log("Category:", element.textContent);
	console.log("Elements:", element.nextElementSibling.children.length);
});
