import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "./scss/styles.scss";

const slider = document.querySelector("#pricing");
console.log(slider);

document.addEventListener("DOMContentLoaded", () => {
	slider?.addEventListener("input", (event) => {
		const target = event.target as HTMLInputElement;
		console.log(target.value);
	})
});