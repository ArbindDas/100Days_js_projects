function printResult() {
  console.log("printing  Done : ");
  const user = parseInt(document.querySelector(".inputBox").value);
  const result = document.querySelector(".result");
  const error = document.querySelector(".error");
  const resetbutton = document.querySelector(".reset-btn");
  if (user === 0) {
    resultColor();
    result.textContent = "neither even nor composite:";
    return;
  }

  if (isNaN(user) || user < 0) {
    errorShower();
    return;
  } else if (user % 2 == 0) {
    result.textContent = `Even number`;
    resultColor();
    return;
  } else if (user % 2 != 0) {
    result.textContent = `Odd number`;
    resultColor();
  } 

  if (resetbutton) {
    resetbutton.addEventListener("click", reset);
  }

  function reset() {
    document.querySelector(".inputBox").value = "";

    const error = document.querySelector(".error");
    error.style.color = "";
    error.textContent = "";

    const result = document.querySelector(".result");
    result.style.color = "";
    result.textContent = "";
  }

  function errorShower() {
    error.textContent = `please enter the valid number`;
    error.style.color = "red";
  }
  function resultColor() {
    result.style.color = "green";
  }

 

}
