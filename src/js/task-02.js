const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];
const ingred = document.querySelector("#ingredients");

ingredients.forEach((item) => {
	const ingredientsWithLi = document.createElement(`li`);
	ingredientsWithLi.classList.add("item");
	ingredientsWithLi.textContent = item;
	console.log(ingredientsWithLi);
	document.body.after(ingredientsWithLi);
});

// Też działa ale nie wiedziałem gdzie użyć createElement
// const ingredientsWithLi = ingredients
// 	.map((ingredienty) => `<li class="item">${ingredienty}</li>`)
// 	.join("");

// ingred.innerHTML = ingredientsWithLi;
