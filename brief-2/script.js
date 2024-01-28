"use strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
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
