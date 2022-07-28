let inputBox = document.querySelector(".input_box"),
search = document.querySelector(".search"),
closeIcon = document.querySelector(".close_icon");

search.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

AOS.init({
offset: 300,
duration: 1000,
});
