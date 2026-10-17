const filterButtons = document.querySelectorAll(".filter-chip");
const placeCards = document.querySelectorAll(".place-card");
const emptyState = document.querySelector("#empty-state");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const selectedFilter = button.dataset.filter;
		let visibleCount = 0;

		filterButtons.forEach((filterButton) => {
			const isActive = filterButton === button;
			filterButton.classList.toggle("active", isActive);
			filterButton.setAttribute("aria-pressed", String(isActive));
		});

		placeCards.forEach((card) => {
			const matchesFilter = selectedFilter === "all" || card.dataset.category === selectedFilter;
			card.hidden = !matchesFilter;
			if (matchesFilter) visibleCount += 1;
		});

		emptyState.hidden = visibleCount > 0;
	});
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
	const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
	menuToggle.setAttribute("aria-expanded", String(!isOpen));
	menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
	mainNav.classList.toggle("is-open", !isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => {
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "Open navigation");
		mainNav.classList.remove("is-open");
	});
});
