const body = document.querySelector("body");
const bgContainer = document.querySelector(".bgContainer");
const colorItems = document.querySelectorAll(".colorItems");

const firstColor = document.getElementById("red");
const secondColor = document.getElementById("black");
const thirdColor = document.getElementById("blue");
const fourthColor = document.getElementById("green");
const fifthColor = document.getElementById("brown");

colorItems.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = "#ff4406";
      firstColor.style.backgroundColor = "#ff4406";
      firstColor.innerHTML = "i am the firstColor";
      setTimeout(() => {
        secondColor.innerHTML = "";
        secondColor.style.backgroundColor = "";
        thirdColor.innerHTML = "";
        thirdColor.style.backgroundColor = "";
        fourthColor.style.backgroundColor = "";
        fourthColor.innerHTML = "";
        fifthColor.innerHTML = "";
        fifthColor.style.backgroundColor = "";
      }, 1000);

      setTimeout(() => {
        secondColor.innerHTML = "I am the secondColor";
        secondColor.style.backgroundColor = "black";
        thirdColor.innerHTML = "I am the thirdColor";
        thirdColor.style.backgroundColor = "blue";
        fourthColor.style.backgroundColor = "green";
        fourthColor.innerHTML = "i am the fourthColor";
        fifthColor.innerHTML = "i am the fifthColor";
        fifthColor.style.backgroundColor = "brown";
      }, 2000);
    }
    if (e.target.id === "black") {
      secondColor.innerHTML = "i am the secondColor";
      body.style.backgroundColor = "#000";
      secondColor.style.backgroundColor = "#000";
      setTimeout(() => {
        firstColor.innerHTML = "";
        firstColor.style.backgroundColor = "";
        thirdColor.innerHTML = "";
        thirdColor.style.backgroundColor = "";
        fourthColor.style.backgroundColor = "";
        fourthColor.innerHTML = "";
        fifthColor.innerHTML = "";
        fifthColor.style.backgroundColor = "";
      }, 1000);

      setTimeout(() => {
        firstColor.innerHTML = "I am the firstColor";
        firstColor.style.backgroundColor = "#ff4406";
        secondColor.innerHTML = "i am the secondColor";
        thirdColor.innerHTML = "I am the thirdColor";
        thirdColor.style.backgroundColor = "blue";
        fourthColor.style.backgroundColor = "green";
        fourthColor.innerHTML = "i am the fourthColor";
        fifthColor.innerHTML = "i am the fifthColor";
        fifthColor.style.backgroundColor = "brown";
      }, 2000);
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "#161eee";
      thirdColor.style.backgroundColor = "#161eee";
      setTimeout(() => {
        firstColor.innerHTML = "";
        firstColor.style.backgroundColor = "";
        secondColor.innerHTML = "";
        secondColor.style.backgroundColor = "";
        fourthColor.style.backgroundColor = "";
        fourthColor.innerHTML = "";
        fifthColor.innerHTML = "";
        fifthColor.style.backgroundColor = "";
      }, 1000);

      setTimeout(() => {
        firstColor.innerHTML = "I am the firstColor";
        firstColor.style.backgroundColor = "#ff4406";
        secondColor.innerHTML = "I am the secondColor";
        secondColor.style.backgroundColor = "black";
        thirdColor.innerHTML = "I am the thirdColor";
        thirdColor.style.backgroundColor = "blue";
        fourthColor.style.backgroundColor = "green";
        fourthColor.innerHTML = "i am the fourthColor";
        fifthColor.innerHTML = "i am the fifthColor";
        fifthColor.style.backgroundColor = "brown";
      }, 2000);
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "#2dfd37";
      fourthColor.style.backgroundColor = "#2dfd37";
      setTimeout(() => {
        firstColor.innerHTML = "";
        firstColor.style.backgroundColor = "";
        secondColor.innerHTML = "";
        secondColor.style.backgroundColor = "";
        thirdColor.innerHTML = "";
        thirdColor.style.backgroundColor = "";
        // fourthColor.style.backgroundColor = "";
        // fourthColor.innerHTML = "";
        fifthColor.innerHTML = "";
        fifthColor.style.backgroundColor = "";
      }, 1000);

      setTimeout(() => {
        firstColor.innerHTML = "I am the firstColor";
        firstColor.style.backgroundColor = "#ff4406";
        secondColor.innerHTML = "I am the secondColor";
        secondColor.style.backgroundColor = "black";
        thirdColor.innerHTML = "I am the thirdColor";
        thirdColor.style.backgroundColor = "blue";
        fourthColor.style.backgroundColor = "green";
        fourthColor.innerHTML = "i am the fourthColor";
        fifthColor.innerHTML = "i am the fifthColor";
        fifthColor.style.backgroundColor = "brown";
      }, 2000);
    }

    if (e.target.id === "brown") {
      body.style.backgroundColor = "brown";
      fifthColor.style.backgroundColor = "brown";
      setTimeout(() => {
        firstColor.innerHTML = "";
        firstColor.style.backgroundColor = "";
        secondColor.innerHTML = "";
        secondColor.style.backgroundColor = "";
        thirdColor.innerHTML = "";
        thirdColor.style.backgroundColor = "";
        fourthColor.style.backgroundColor = "";
        fourthColor.innerHTML = "";
      }, 1000);

      setTimeout(() => {
        firstColor.innerHTML = "I am the firstColor";
        firstColor.style.backgroundColor = "#ff4406";
        secondColor.innerHTML = "I am the secondColor";
        secondColor.style.backgroundColor = "black";
        thirdColor.innerHTML = "I am the thirdColor";
        thirdColor.style.backgroundColor = "blue";
        fourthColor.style.backgroundColor = "green";
        fourthColor.innerHTML = "i am the fourthColor";
        fifthColor.innerHTML = "i am the fifthColor";
        fifthColor.style.backgroundColor = "brown";
      }, 2000);
    }
  });
});
