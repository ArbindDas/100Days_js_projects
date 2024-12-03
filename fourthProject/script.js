function printResult() {
  const user = parseInt(document.querySelector(".numberInput").value);
  const result = document.querySelector(".result");
  const error = document.querySelector(".error");
  const resetbutton = document.querySelector(".reset-button");

  if (user === 0) {
    result.textContent = "please enter the valid number : "+user;
    result.style.color = "red";
    return;
  }

  if (isNaN(user)) {
    error.textContent = "please enter a valid number : ";
    error.style.color = "red";
  } else {
    if (user % 2 == 0) {
      result.textContent = "enterd number is : Even : " + user;
      result.style.color = "green";
      return;
    } else {
      if (Number % 2 != 0) {
        result.textContent = "enterd number is : odd : " + user;
        result.style.color = "green";
        return;
      }else{
        if (user<0) {
            result.textContent = `please enter the number greator then : `+user
            result.style.color = "red";
            return;
        }
      }
    }
  }

  if (resetbutton) {
        resetbutton.addEventListener("click" , reset);
  }

  function reset() {
      result.innerHTML = "";
      error.innerHTML = "";
      document.querySelector("user").value = "";
  }

 
}