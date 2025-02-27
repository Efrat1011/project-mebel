
function addReview() {
    const text = document.getElementById('reviewText').value;
    const name = document.getElementById('reviewerName').value;
    if (text.trim() === "" || name.trim() === "") {
        alert("Пікір мен атын енгізіңіз!");
        return;
    }
    
    const reviewsList = document.getElementById('reviewsList');
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `<strong>${name}:</strong> <p>${text}</p>`;
    reviewsList.prepend(reviewDiv);
}
    document.getElementById('reviewText').value = "";
    document.getElementById('reviewerName').value = ""
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
        window.open("https://www.instagram.com/mebel", "_blank"); // Өз Instagram сілтемеңізді қойыңыз
    });

    // Facebook батырмасы
    document.getElementById("facebook-btn").addEventListener("click", function () {
        window.open("https://www.facebook.com/mebel", "_blank"); // Өз Facebook сілтемеңізді қойыңыз
    });

   
});



