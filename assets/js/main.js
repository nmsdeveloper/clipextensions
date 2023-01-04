/* Show Menu */
function showMenu(element, show) {
  const menu = document.getElementById(element);
  menu.classList.add(show);
}
/* Hidden Menu */
function hiddenMenu(element, show) {
  const menu = document.getElementById(element);
  menu.classList.remove(show);
}
/* Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((l) => l.addEventListener("click", linkAction));

/*==================== Change Background Header ====================*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== Scroll Sections Active Link ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (current.getAttribute("id") !== "products") {
      const sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        sectionsClass.classList.add("active-link");
      else sectionsClass.classList.remove("active-link");
    } else {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        document
          .querySelector(".nav-link-dropdown")
          .classList.add("active-link");
      else
        document
          .querySelector(".nav-link-dropdown")
          .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-fill";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-fill" : "ri-sun-fill";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-fill" ? "add" : "remove"](
    iconTheme
  );
}
function changeTheme(darkTheme, iconTheme) {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
}

/*==================== Products Swiper ====================*/
const pOptions = {
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};
let wicksSwiper = new Swiper(".wicks-swiper", pOptions),
  extensionsSwiper = new Swiper(".extensions-swiper", pOptions),
  wigsSwiper = new Swiper(".wigs-swiper", pOptions);

/*==================== Inspirations Videos ====================*/
const iOptions = {
  spaceBetween: 30,
  loop: true,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
};
let inspirationsSwiper = new Swiper(".inspirations-swiper", iOptions),
  ViDEO_ID = [
    "pt6Ud7FN7gk",
    "LYxGSJdEFQo",
    "vApwd4EI_Ag",
    "J8tCQ0aL6Xg",
    "LXkWPQYb9lo",
    "JPZzVwJbYMM",
    "RrNekET0pqA",
  ];

inspirationsSwiper.on("slideChange", function () {
  let index = inspirationsSwiper.activeIndex,
    videoUrl = `https://www.youtube.com/embed/${
      ViDEO_ID[index - 1]
    }?&mute=1&loop=1`;

  const frameVideo = document.getElementById("inspirations-video");
  frameVideo.setAttribute("src", videoUrl);
});

/*==================== Show Scroll Up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
