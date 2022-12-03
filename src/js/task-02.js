const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const ingred = document.querySelector("#ingredients");
// const list = document.createElement("li");
const ingredientsWithLi = ingredients
	.map((ingredienty) => `<li class="item">${ingredienty}</li>`)
	.join("");

ingred.innerHTML = ingredientsWithLi;
// list.classList.add("item");
// list.innerHTML = ingredients;

// for (const item of ingredients) {

// }

console.log(ingredientsWithLi);
