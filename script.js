console.log("JavaScript is connected!");
alert("Welcome to Skybird!");


let heroHeading = document.querySelector(".hero-content h1");
let heroPara = document.querySelector(".hero-content p");

let headings = [
  "Welcome to Skybird",
  "Discover Premium Fashion",
  "New Collection Just Arrived",
  "Style That Speaks Your Personality"
];

let paras = [
  "Your one-stop shop for lifestyle, beauty, and fashion essentials.",
  "Shop the latest trends with unbeatable comfort.",
  "Exclusive winter wear now available.",
  "Quality you wear, confidence you carry."
];

let index = 0;

setInterval(() => {
  heroHeading.innerText = headings[index];
  heroPara.innerText = paras[index];

  index++;

  if (index >= headings.length) {
    index = 0;
  }

}, 1500);  

