const tabs = [...document.querySelectorAll(".tab")];

tabs.forEach(item => {
	item.addEventListener("click", function() {
		tabs.forEach(item => item.parentElement.classList.remove("is-active"));
		this.parentElement.classList.add("is-active");
	})
});
