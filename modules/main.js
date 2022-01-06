const tabs = [...document.querySelectorAll(".tab")];
const loader = document.getElementsByClassName("loader-container")[0];

tabs.forEach(item => {
	item.addEventListener("click", function() {
		tabs.forEach(item => item.parentElement.classList.remove("is-active"));
		this.parentElement.classList.add("is-active");
	})
});

function showLoader() {
	loader.classList.remove("d-none");
}

function hideLoader() {
	loader.classList.add("d-none");
}

const signUpForm = document.getElementById("signup");
const signInForm = document.getElementById("signin");

signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("#signup input");
	const isValidData = validateForm(inputs);

	if (isValidData) {
		showLoader();
		signUp(signUpForm);
	}
});

signInForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = document.querySelectorAll("#signin input");
	const isValidData = validateForm(inputs);

	if (isValidData) {
		showLoader();
		signIn(signInForm);
	}
});

function showAlert(type, message) {
  const alertText = document.getElementsByClassName("alert-text")[0];

  alertText.innerHTML = message;
  alertText.parentElement.classList.add(`alert-${type}`);
  alertText.parentElement.classList.remove("d-none");

  setTimeout(function(){ alertText.parentElement.classList.add("d-none"); }, 3000);
}
