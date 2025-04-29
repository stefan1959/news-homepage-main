// Select the checkbox and navigation menu
const navToggle = document.querySelector('[aria-controls="primary-nav"]');

navToggle.addEventListener("click", () => {
  // Toggle the "active" class on the navigation menu
  const currentState = navToggle.getAttribute("aria-expanded");
  if (currentState === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }
});
