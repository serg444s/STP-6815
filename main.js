import "./style.css";

const openModalBtn = document.querySelector(".menu-open");
const closeModalBtn = document.querySelector(".menu-close");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-nav-list");
const modal = document.querySelector(".modal");

function onOpenModal() {
  body.style.overflow = "hidden";
  menu.addEventListener("click", navigate);
  openModalBtn.classList.add("hidden");
  modal.classList.add("transform");
  closeModalBtn.classList.remove("hidden");
}

function onCloseModal() {
  body.style.overflow = "auto";
  menu.removeEventListener("click", navigate);
  openModalBtn.classList.remove("hidden");
  closeModalBtn.classList.add("hidden");
  modal.classList.remove("transform");
}

function navigate(event) {
  if (event.target.nodeName !== "A") {
    return;
  } else {
    onCloseModal();
  }
}

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);

function screenSize() {
  if (window.innerWidth >= 1440) {
    return 3;
  } else {
    return 1;
  }
  r;
}

const reviewsswiper = new Swiper(".newswiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 36,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".sswiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: screenSize(),
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});

window.addEventListener("resize", screenSize);
