/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  let expense = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotalAmount();
  renderExpense();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value.trim());
    if (name === "" && isNaN(amount) && amount < 0) return;
    const newExpense = {
      id: Date.now(),
      name,
      amount,
    };
    expense.push(newExpense);
    saveExpenseToLocalStorage();
    renderExpense();
    updateTotal();
    // console.log(totalAmount);

    // console.log(expense);

    expenseName.value = "";
    expenseAmount.value = "";
  });

  function renderExpense() {
    expenseList.innerHTML = "";
    expense.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${element.name}</span> - <span>${element.amount}</span>
      <button data-id="${element.id}" class ="remove">delete</button>`;
      expenseList.appendChild(li);
    });
  }
  function calculateTotalAmount() {
    return expense.reduce((total, expenseItem) => {
      //   console.log(expenseItem);
      return total + expenseItem.amount;
    }, 0);
  }

  function updateTotal() {
    totalAmount = calculateTotalAmount();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function saveExpenseToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const expenseId = parseInt(e.target.getAttribute("data-id"));
        expense = expense.filter((expenseItem) => expenseItem.id !== expenseId);
        saveExpenseToLocalStorage();
        renderExpense();
        updateTotal();

    }
  });
});
