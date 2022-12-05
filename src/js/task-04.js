let counterValue = 0;
let value = document.querySelector("#value");
const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');

btnUp.addEventListener("click", () => {
	value.innerHTML = counterValue += 1;
});
btnDown.addEventListener("click", () => {
	value.innerHTML = counterValue -= 1;
});
