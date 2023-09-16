import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "./scss/styles.scss";

const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (event) => {
	event.preventDefault();
});
