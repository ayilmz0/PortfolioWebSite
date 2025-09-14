const cursorLight = document.getElementById("cursor-light");

document.addEventListener("mousemove", (e) => {
  cursorLight.style.left = `${e.clientX}px`;
  cursorLight.style.top = `${e.clientY}px`;
});

const form = document.querySelector(".glitch-card");

form.addEventListener("submit", function(e) {

  setTimeout(() => {
    form.reset(); 
  }, 500);
});