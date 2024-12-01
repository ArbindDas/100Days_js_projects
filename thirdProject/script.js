// (function () {
//   const buttons = document.querySelectorAll(".btn-counter");
//   let count = 0;

//   buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       if (button.classList.contains("increase-btn")) {
//         if (count >= 19) {
//           alert("you can't add more then  values : " + count);
//           return;
//         } else {
//           count++;
//         }
//       }
//       if (button.classList.contains("decrease-btn")) {
//         if (count <= 0) {
//           alert("you can't remove values : " + count);
//           return;
//         } else {
//           count--;
//         }
//       }

//       const counter = document.querySelector(".counter");
//       counter.textContent = count;
//     });
//   });
// })();


// i prefer for this counter project we should use the named function because is perfectly fine and more beginner-friendly.


function printCounter(){
  const buttons = document.querySelectorAll('.btn-counter');
  let count = 0;
  buttons.forEach(function (button){
      button.addEventListener("click" , function(){
          if (button.classList.contains("increase-btn")) {
            if (count>=19) {
              alert("you can't add more then : "+count);
              return;
            }else{
              count++;
            }
          }

          if (button.classList.contains("decrease-btn")) {
            if (count<=0) {
              alert("you can't remove more then : "+count);
              return;
            }else{
              count--;
            }
          }

          const counterResult = document.querySelector(".counter");
          counterResult.textContent = count;
      });
  });
};

printCounter();