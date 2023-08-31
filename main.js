const navBar = document.querySelector(".nav-bar");
const mobikeMenu = document.querySelector(".m-nav-bar");
const mobileBar = document.querySelector(".m-navbar-right svg");
const mobileMenuClose = document.querySelector(".lucide-x");
const mobileMenuBar = document.querySelector(".lucide-align-justify");
let toggle = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navBar.classList.add("fixed");
    mobikeMenu.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
    mobikeMenu.classList.remove("fixed");
  }
});

document
  .querySelector(".main-scroll a")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });

mobileBar.addEventListener("click", () => {
  if (!toggle) {
    mobikeMenu.classList.add("click");
    mobileMenuBar.style.display = "none";
    mobileMenuClose.style.display = "block";
    toggle = true;
  }
});
mobileMenuClose.addEventListener("click", () => {
  if (toggle) {
    mobikeMenu.classList.remove("click");
    mobileMenuBar.style.display = "block";
    mobileMenuClose.style.display = "none";
    toggle = false;
  }
});
