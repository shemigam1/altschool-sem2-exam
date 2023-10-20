export default function darkMode() {
	const themeToggleBtn = document.getElementById("theme-toggle");
	// const body = document.querySelector("body");
	const detail = document.getElementById("detail");
	const sidebar = document.getElementById("sidebar");

	// keeps track of the current state of the local storage
	const theme = localStorage.getItem("theme");
	if (theme) {
		detail.classList.add("dark-mode");
		sidebar.classList.add("sidebar-dark-mode");
	}

	themeToggleBtn.addEventListener("click", () => {
		detail.classList.toggle("dark-mode");
		sidebar.classList.toggle("sidebar-dark-mode");
		detail.style.transition = "0.8s";
		sidebar.style.transition = "0.8s";

		if (detail.classList.contains("dark-mode")) {
			localStorage.setItem("theme", "dark-mode");
		} else {
			localStorage.removeItem("theme");
		}
	});
}
