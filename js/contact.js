document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Бетті қайта жүктеуді болдырмау

    // Енгізілген мәліметтерді алу
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Егер барлық өрістер толтырылса, хабарламаны көрсету
    if (name && email && message) {
        document.getElementById("form-message").style.display = "block";

        // Форманы тазалау
        document.getElementById("contactForm").reset();
    }
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
