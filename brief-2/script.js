"use strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    /**
     * le else permet de repeter l'animation a chaque apparition de l'element dans le viewport
     */
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => observer.observe(element));

const video = document.querySelector(".video-container video");
const texts = document.querySelectorAll(".text");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observerVideo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const videoRect = video.getBoundingClientRect();
    const textRect = entry.target.getBoundingClientRect();

    const isIntersecting = !(
      textRect.right < videoRect.left ||
      textRect.left > videoRect.right ||
      textRect.bottom < videoRect.top ||
      textRect.top > videoRect.bottom
    );

    if (isIntersecting) {
      entry.target.classList.add("intersecting");
    } else {
      entry.target.classList.remove("intersecting");
    }
  });
}, options);

texts.forEach((text) => observerVideo.observe(text));

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("isOnScroll");
  } else if (window.scrollY <= 100) {
    header.classList.remove("isOnScroll");
  }
});

let menuOpen = false;

const dropdown = document.querySelector(".dropdown");

const menuButton = document.querySelector(".menu-button");

const closeButton = document.querySelector(".close-button");

const buttons = [menuButton, closeButton];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (!menuOpen) {
      menuOpen = true;
      dropdown.classList.remove("dropdown-hidden");
    } else {
      menuOpen = false;
      dropdown.classList.add("dropdown-hidden");
    }
  });
});

function addPerspectiveEffect(containerSelector, rotateXFactor, rotateYFactor) {
  const container = document.querySelector(containerSelector);
  let isAnimating = false;
  let mouseX = 0;
  let mouseY = 0;

  container.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isAnimating) {
      requestAnimationFrame(updateTransform);
      isAnimating = true;
    }
  });

  function updateTransform() {
    const { offsetWidth: width, offsetHeight: height } = container;
    const moveX = (mouseX / width - 0.5) * 20;
    const moveY = (mouseY / height - 0.5) * 10;
    const rotateY = moveX * rotateYFactor;
    const rotateX = moveY * rotateXFactor;
    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    isAnimating = false;
  }

  container.addEventListener("mouseleave", () => {
    container.style.transform = "none";
  });
}

addPerspectiveEffect(".perspective-effect", 2, 2);
addPerspectiveEffect(".system-design-infos", 2, 2);
addPerspectiveEffect(".brave-design-infos", 2, 1);
