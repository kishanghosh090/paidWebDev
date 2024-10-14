document.querySelector('#changeTextButton').addEventListener('click', function () {
    let newPara = document.querySelector('#myParagraph')
    if (newPara.textContent === "this is a myParagraph. click button to change color") {
        newPara.textContent = "This is a new paragraph!";
    } else {
        newPara.textContent = "this is a myParagraph. click button to change color";

    }
})

document.querySelector('#highlightFirstCity').addEventListener('click', function () {
    document.getElementById('citiesList').firstElementChild.classList.add('highlight')

    // if () {
    //     document.getElementById('citiesList').firstElementChild.classList.add('highlight')
    // } else {
    //     document.getElementById('citiesList').firstElementChild.classList.remove('highlight')
    // }
})


document.getElementById('removeLastTask').addEventListener('click', function () {
    document.getElementById('taskList').lastElementChild.remove()
})