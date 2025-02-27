/* script.js */
let cart = [];

function addToCart(name, price) {
    let item = cart.find(product => product.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartCount();
    saveCart();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function displayCartItems() {
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPriceContainer = document.getElementById("total-price");
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        let itemElement = document.createElement("div");
        itemElement.innerHTML = `${item.name} - ${item.quantity} x ${item.price}₸ = ${item.quantity * item.price}₸
        <button onclick="removeFromCart(${index})">Өшіру</button>`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.quantity * item.price;
    });
    totalPriceContainer.textContent = applyDiscount(totalPrice);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCartItems();
    updateCartCount();
}

function clearCart() {
    cart = [];
    saveCart();
    displayCartItems();
    updateCartCount();
}

function applyDiscount(totalPrice) {
    if (totalPrice > 5000) {
        return (totalPrice * 0.9).toFixed(2); // 10% жеңілдік
    }
    return totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Себет бос!");
        return;
    }
    let totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    let discountedPrice = applyDiscount(totalPrice);
    alert(`Сатып алу сәтті орындалды! Жалпы бағасы: ${discountedPrice}₸`);
    clearCart();
}

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    if (document.getElementById("cart-items")) {
        displayCartItems();
    }
});
async function loadFurniture() {
    const response = await fetch('furniture.json');
    const data = await response.json();
    return data.furniture;
}

async function filterFurniture(category) {
    const container = document.getElementById("furnitures-container");
    container.innerHTML = "";
    const furniture = await loadFurniture();
    
    let filteredFurniture = furniture;
    if (category !== "Все") {
        filteredFurniture = furniture.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(5, minmax(250px, 1fr))";
    container.style.gap = "10px";
    
    filteredFurniture.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "10px";
        card.style.padding = "15px";
        card.style.textAlign = "center";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100%; border-radius: 10px;">
            <h3>${item.name}</h3>
            <p>Бағасы: ${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price.replace(/\D/g, '')})" style="padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">Себетке қосу</button>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    filterFurniture("Все");
    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", (event) => {
            const category = event.target.getAttribute("data-category");
            filterFurniture(category);
        });
    });
});



// Әлеуметтік желі сілтемелерін басқару
document.addEventListener("DOMContentLoaded", function () {
    // WhatsApp батырмасы
    document.getElementById("whatsapp-btn").addEventListener("click", function () {
        let phoneNumber = "+77051439373"; // Өз нөміріңізді қойыңыз
        let message = encodeURIComponent("Сәлем! Сізден жиһаз туралы ақпарат алғым келеді.");
        let url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank"); // Жаңа терезеде ашу
    });

    // Instagram батырмасы
    document.getElementById("instagram-btn").addEventListener("click", function () {
        window.open("https://www.instagram.com/nassyrov10?igsh=a20yNnk5enFuYTY4", "_blank"); // Өз Instagram сілтемеңізді қойыңыз
    });

    // Facebook батырмасы
    document.getElementById("facebook-btn").addEventListener("click", function () {
        window.open("https://www.facebook.com/share/18h6Tuft88/", "_blank"); // Өз Facebook сілтемеңізді қойыңыз
    });

    
});



