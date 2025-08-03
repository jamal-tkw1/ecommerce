import { products } from '../data/products.js';

const cart = [];

export function renderProducts() {
  const container = document.getElementById('product-list');
  container.innerHTML = products.map(product => `
    <div class="col-md-4">
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="img-fluid mb-3 rounded">
        <h5>${product.name}</h5>
        <p>${product.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold">$${product.price}</span>
          <button class="btn btn-premium" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.addToCart = function(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    cart.push(product);
    renderCart();
  }
};

export function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return;
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }
  cartContainer.innerHTML = cart.map(item => `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <span>${item.name}</span>
      <span>$${item.price}</span>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
});
