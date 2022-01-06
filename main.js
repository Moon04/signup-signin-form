const tabs = [...document.querySelectorAll(".tab")];

tabs.forEach(item => {
	item.addEventListener("click", function() {
		tabs.forEach(item => item.parentElement.classList.remove("is-active"));
		this.parentElement.classList.add("is-active");
	})
});

const signUpForm = document.getElementById("signup");
const signInForm = document.getElementById("signin");


signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("#signup input");
	validateForm(inputs);
});

signInForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("#signin input");
	validateForm(inputs);
});
