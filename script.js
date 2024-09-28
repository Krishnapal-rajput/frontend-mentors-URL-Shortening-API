const shortBtn = document.querySelector(".short-btn");
const input = document.querySelector("input");
const err = document.querySelector(".err");
const inputLink = document.querySelector(".input-link");
const output = document.querySelector(".output");
const linkingPipe = document.querySelector(".linking-pipe");

shortBtn.addEventListener("click", () => {
  if (!input.value) {
    input.style.border = "2px solid red";
    input.style.color = "red";
    input.classList.add("red-placeholder");
    err.style.display = "block";
  } else {
    let top = 1080;
    output.style.display = "flex";
    inputLink.innerText = input.value;
    linkingPipe.style.top = `${top + 120}px`;
  }
});

// this API is not responding during the development of this project,
// I have developed as possible as frontend of this web but can not retrieve data due to unresponsiveness of the API

//fetch("https://cleanuri.com/docs")
