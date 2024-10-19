/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.09,
    },
    {
      id: 3,
      name: "Product 3",
      price: 399,
    },
    {
      id: 4,
      name: "Product 4",
      price: 399.989,
    },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("total-price");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <span>${product.name} - $${product.price.toFixed(2)}</span>
      <button data-id="${product.id}">Add to Cart</button>  
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      products.find((product) => {
        if (product.id === productId) {
          addToCart(product);
        }
      });
    }
  });

  function addToCart(product) {
    cart.push(product);
    console.log(cart);
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((product, index) => {
        totalPrice += product.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
                <span>${product.name} - $${product.price.toFixed(2)}</span>
                <button data-id="${product.id} class="remove">Remove</button>
            `;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCart.classList.add("hidden");
    }
  }
  document.getElementById("cart-items").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.target.parentNode.remove();
    }
    renderCart();
  });

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    renderCart();
    emptyCart.classList.remove("hidden");
    cartTotalMessage.classList.add("hidden");
  });
});
