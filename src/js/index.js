import "../css/style.css";

// Global variables

const menuButton = document.querySelector(".menuButtonImage");
const menuButtonSubtree = document.querySelector(".menuButtonSubtree");

// Event listeners

menuButton.addEventListener("click", () => {
  menuButtonSubtree.classList.toggle("show");
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".menuButtonImage")) {
    let childrenDivs = document.querySelectorAll(".menuButtonSubtree");
    let i;
    for (i = 0; i < childrenDivs.length; i++) {
      let openDropdown = childrenDivs[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});
