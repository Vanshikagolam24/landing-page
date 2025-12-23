let cartCount = 0;
const unitPrice = 499.99;

// 1. Change Gallery Image
function changeImage(src) {
    document.getElementById('main-image').src = src;
    
    // Update active thumbnail styling
    const thumbs = document.querySelectorAll('.thumbnails img');
    thumbs.forEach(img => {
        img.classList.remove('active-thumb');
        if(img.src === src) img.classList.add('active-thumb');
    });
}

// 2. Update Quantity
function updateQty(change) {
    const qtyInput = document.getElementById('quantity');
    let currentQty = parseInt(qtyInput.value);
    currentQty += change;
    
    if (currentQty < 1) currentQty = 1;
    qtyInput.value = currentQty;
}

// 3. Add to Cart & Open Payment
function addToCart() {
    const qty = parseInt(document.getElementById('quantity').value);
    cartCount += qty;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Calculate Total
    const total = (qty * unitPrice).toFixed(2);
    document.getElementById('checkout-price').innerText = `$${total}`;
    
    // Open Payment Modal
    document.getElementById('payment-modal').style.display = 'flex';
}

// 4. Modal Controls
function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function processPayment() {
    alert("Processing payment... Thank you for your purchase!");
    closeModal();
    // Reset cart after payment
    cartCount = 0;
    document.getElementById('cart-count').innerText = "0";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('payment-modal');
    if (event.target == modal) closeModal();
}