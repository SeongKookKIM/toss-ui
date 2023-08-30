const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
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

const mobileBar = document.querySelector(".m-navbar-right svg");
const mobikeMenu = document.querySelector(".m-nav-bar");
const mobileMenuClose = document.querySelector(".lucide-x");
const mobileMenuBar = document.querySelector(".lucide-align-justify");
let toggle = false;

mobileBar.addEventListener("click", () => {
  if (!toggle) {
    mobikeMenu.style.height = "auto";
    mobileMenuBar.style.display = "none";
    mobileMenuClose.style.display = "block";
    toggle = true;
  }
});
mobileMenuClose.addEventListener("click", () => {
  if (toggle) {
    mobikeMenu.style.height = "59px";
    mobileMenuBar.style.display = "block";
    mobileMenuClose.style.display = "none";
    toggle = false;
  }
});
