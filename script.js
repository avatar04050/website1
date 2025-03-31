// Корзина
const cartItems = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.previousElementSibling.previousElementSibling.textContent;
        addToCart(productName);
    });
});

function addToCart(productName) {
    const li = document.createElement('li');
    li.textContent = productName;
    cartItems.appendChild(li);
    
    // Скрываем "Корзина пуста", если добавлен товар
    if (cartItems.children.length > 0) {
        cartEmpty.style.display = 'none';
    }
}