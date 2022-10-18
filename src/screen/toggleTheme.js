const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.querySelector("body").classList.toggle("lightMode");
}
