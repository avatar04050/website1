// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName) {
    cart.push(productName);
    saveCart();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
    } else {
        cartEmpty.style.display = 'none';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item} <button onclick="removeFromCart(${index})">Удалить</button>`;
            cartItems.appendChild(li);
        });
    }
}

// Загрузка корзины при старте
renderCart();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        addToCart(productName);
    });
});