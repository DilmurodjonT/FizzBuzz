var $body = document.querySelector("body");
var result = document.querySelector(".text");
var $formStyle = document.querySelector(".form");

$body.style.background = "url(../Images/Bg.jpg)";

var form = document.getElementById("form");
var inputNumber = document.getElementById("num");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputNumber.value % 3 === 0 && inputNumber.value % 5 === 0) {
    result.textContent = "FizzBuzz";
  } else if (inputNumber.value % 3 === 0) {
    result.textContent = "Fizz";
  } else if (inputNumber.value % 5 === 0) {
    result.textContent = "Buzz";
  } else {
    result.textContent = inputNumber.value;
  }
  // console.log(inputNumber.value);
});

// for (i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
