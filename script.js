"use strict";

$(".home").on("click", function (e) {
  e.preventDefault();
  window.location.href = "./index.html";
  
});

$(".link-to-projects").on("click", function (e) {
  e.preventDefault();
  window.location.href = "./projects.html";
 
});

$(".contact").on("click", function (e) {
  e.preventDefault(),
  window.location.href = "./contact.html";
  
});

$(".about-me").on("click", function (e) {
  e.preventDefault(),
window.location.href = "./about.html";
  
});
