const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  const elementsToToggle = document.querySelectorAll(
    "body, .advanced-operations, .arithmetic-operations, .arithmetic-operations > div, .equals, .undo, .top-bar, .theme-toggle, .calculator, .number"
  );

  elementsToToggle.forEach((element) => {
    element.classList.toggle("lightMode");
  });
}
