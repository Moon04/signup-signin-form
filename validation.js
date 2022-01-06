function validateEmail(email) {
	const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return pattern.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
	return pattern.test(String(password));
}

function showError(input) {
  input.parentElement.classList.add("error");
}

function hideError(input) {
  input.parentElement.classList.remove("error");
}

function validateForm(inputs) {
	inputs.forEach((input) => {
		if (!input.value) showError(input);
		else {
			hideError(input);
			if (input.type === "email") {
				if (validateEmail(input.value)) hideError(input);
				else showError(input);
			}
      else if (input.type === "password") {
				if (validatePassword(input.value)) hideError(input);
				else showError(input);
			}
		}
	});
}