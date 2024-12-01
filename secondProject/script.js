const body = document.querySelector("body");
const bgContainer = document.querySelector(".bgContainer");
const colorItems = document.querySelectorAll(".colorItems");

const firstColor = document.getElementById("red");
const secondColor = document.getElementById("black");
const thirdColor = document.getElementById("blue");
const fourthColor = document.getElementById("green");
const fifthColor = document.getElementById("brown");

const colorElements = [firstColor, secondColor, thirdColor, fourthColor, fifthColor]; // Array of colors

function resetColors() {
  colorElements.forEach((color) => {
    color.innerHTML = "";
    color.style.backgroundColor = "";
  });
}


function showColors() {
  firstColor.innerHTML = "I am the firstColor";
  firstColor.style.backgroundColor = "#ff4406";

  secondColor.innerHTML = "I am the secondColor";
  secondColor.style.backgroundColor = "black";

  thirdColor.innerHTML = "I am the thirdColor";
  thirdColor.style.backgroundColor = "blue";

  fourthColor.innerHTML = "I am the fourthColor";
  fourthColor.style.backgroundColor = "green";

  fifthColor.innerHTML = "I am the fifthColor";
  fifthColor.style.backgroundColor = "brown";
}


colorItems.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const targetId = e.target.id;

    resetColors(); 

    
    switch (targetId) {
      case "red":
        body.style.backgroundColor = "#ff4406";
        firstColor.style.backgroundColor = "#ff4406";
        firstColor.innerHTML = "I am the firstColor";
        break;
      case "black":
        body.style.backgroundColor = "#000";
        secondColor.style.backgroundColor = "#000";
        secondColor.innerHTML = "I am the secondColor";
        break;
      case "blue":
        body.style.backgroundColor = "#161eee";
        thirdColor.style.backgroundColor = "#161eee";
        thirdColor.innerHTML = "I am the thirdColor";
        break;
      case "green":
        body.style.backgroundColor = "#2dfd37";
        fourthColor.style.backgroundColor = "#2dfd37";
        fourthColor.innerHTML = "I am the fourthColor";
        break;
      case "brown":
        body.style.backgroundColor = "brown";
        fifthColor.style.backgroundColor = "brown";
        fifthColor.innerHTML = "I am the fifthColor";
        break;
    }

    // Hide other colors after 1 second
    setTimeout(resetColors, 1000);

    // Show all colors after 2 seconds
    setTimeout(showColors, 2000);


    
  });
});
