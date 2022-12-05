const counterValue = 0;
const btn = document.querySelector("button");
const btnDown = document.querySelector('button[data-action="decrement"]');
const btnUp = document.querySelector('button[data-action="increment"]');
const handleClick = () => {
    console.log("add +1")
}
btnUp.addEventListener("click", () => {
	console.log("click");
});

console.log(btn);
