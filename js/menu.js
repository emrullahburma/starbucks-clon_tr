const burgermenu = document.querySelector(".burger-menu");
const navbarnav = document.querySelector(".navbar-nav");

burgermenu.addEventListener("click", () => {
  navbarnav.classList.toggle("active-menu");
});
