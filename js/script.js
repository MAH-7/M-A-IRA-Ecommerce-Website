function updateTimer() {
  const endDate = new Date("2023-12-31 23:59:59").getTime(); // Set your flash sale end date here

  const now = new Date().getTime();
  const timeRemaining = endDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    document.querySelector(".timer").innerHTML = "Sale has ended!";
  }
}

updateTimer(); // Initial call
const timerInterval = setInterval(updateTimer, 1000); // Update the timer every second

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// ScrollReveal().reveal(".top-nav", {
//   origin: "left",
//   distance: "100rem",
// });

// ScrollReveal().reveal(".header-img", {
//   origin: "left",
//   distance: "100rem",
// });

// ScrollReveal().reveal(".card", {
//   origin: "left",
//   distance: "100rem",
// });

document.addEventListener("DOMContentLoaded", function () {
  const navMobile = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-mobile");

  navMobile.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
