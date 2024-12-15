const panels = document.querySelectorAll(".pannel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    console.log("i am call berfore the add calling : ");
    removingActiveClass(); // Corrected function name
    console.log("i am call after the add calling : ");

    panel.classList.add("active");
  });
});

function removingActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
