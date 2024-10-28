/** @format */

// differecw between normal function and arrow function
// document.getElementById("changeTextButton").addEventListener("click", () => {
//   console.log(this);
//   //  OUTPUT: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// });
// document
//   .getElementById("changeTextButton")
//   .addEventListener("click", function () {
//     console.log(this);
//     // OUTPUT : <button id="changeTextButton">change Text</button>
//   });

// <!-- example 1: accessing DOM Elements start-->

document
  .querySelector("#changeTextButton")
  .addEventListener("click", function () {
    let newPara = document.querySelector("#myParagraph");
    const statementOne = "this is a myParagraph. click button to change color";
    const statementTwo = "This is a new paragraph!";
    if (newPara.textContent === statementOne) {
      newPara.textContent = statementTwo;
    } else {
      newPara.textContent = statementOne;
    }
  });

// <!-- example 1: accessing DOM Elements end-->

//   <!------ example 2: Traversing the DOM start------>

document
  .querySelector("#highlightFirstCity")
  .addEventListener("click", function () {
    if (
      document
        .getElementById("citiesList")
        .firstElementChild.classList.contains("highlight")
    ) {
      document
        .getElementById("citiesList")
        .firstElementChild.classList.remove("highlight");
    } else {
      document
        .getElementById("citiesList")
        .firstElementChild.classList.add("highlight");
    }
  });

//   <!------ example 2: Traversing the DOM end------>
//   <!------ example 3: Traversing the DOM end------>
document.getElementById("changeOrder").addEventListener("click", function () {
  if (document.getElementById("coffeeType").textContent == "expresso") {
    document.getElementById("coffeeType").textContent = "latte";
    document.getElementById("changeOrder").innerText =
      "change Order to Espresso";
  } else {
    document.getElementById("coffeeType").textContent = "expresso";
    document.getElementById("changeOrder").innerText = "change Order to Latte";
  }
});
//   <!------ example 3: Traversing the DOM end------>

//   <!------ example 4: Traversing the DOM stat------>

//   <!------ example 4: Traversing the DOM end------>

// <!-- example 5: Removing DOM Elements start-->

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

// <!-- example 5: Removing DOM Elements end-->

// <!-- example 6: Event Handling in DOM-->
document.getElementById("clickMeButton").addEventListener("click", () => {
  alert("hww");
});
// <!-- example 6: Event Handling in DOM-->

// example-7: Event Delegation

document.querySelector(".teaList").addEventListener("click", (e) => {
  const lis = document.querySelectorAll(".teaItem");
  lis.forEach((item) => {
    if (item.classList.contains("highlight")) {
      item.classList.remove("highlight");
    }
  });
  e.target.classList.add("highlight");
});
// exapmle 8

document.getElementById("feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
