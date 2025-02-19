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


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".product button").forEach(button => {
        button.addEventListener("click", function () {
            alert("Бұл функция әлі қосылмаған, бірақ жақында іске қосылады!");
        });
    });
});
