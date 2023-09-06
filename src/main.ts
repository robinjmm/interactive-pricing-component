const btn = document.querySelector("button");
console.log(btn);

let num = 1;

btn?.addEventListener("click", () => {
	console.log(num++);
})