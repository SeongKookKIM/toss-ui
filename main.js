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
