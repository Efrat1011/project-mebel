
document.addEventListener("DOMContentLoaded", function () {
    const contactList = document.getElementById("contactList");

    function loadContactMessages() {
        const savedContacts = localStorage.getItem("contactMessages");
        if (savedContacts) {
            const contacts = JSON.parse(savedContacts);
            contacts.forEach((contact, index) => {
                displayContactMessage(contact.name, contact.email, contact.message, index);
            });
        }
    }

    function saveContactMessage(name, email, message) {
        let contacts = localStorage.getItem("contactMessages");
        contacts = contacts ? JSON.parse(contacts) : [];
        contacts.unshift({ name, email, message });
        localStorage.setItem("contactMessages", JSON.stringify(contacts));
    }

    function displayContactMessage(name, email, message, index) {
        const contactDiv = document.createElement("div");
        contactDiv.classList.add("contact-message");
        contactDiv.innerHTML = `<strong>${name} ${email} :</strong><br> <p>${message}</p>`;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            deleteContactMessage(index);
        };
        
        contactDiv.appendChild(deleteBtn);
        contactList.appendChild(contactDiv);
    }

    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("contactName").value;
        const email = document.getElementById("contactEmail").value;
        const message = document.getElementById("contactMessage").value;
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Барлық өрістерді толтырыңыз!");
            return;
        }
        
        saveContactMessage(name, email, message);
        contactList.innerHTML = "<h2>Хабарламалар</h2>";
        loadContactMessages();
        
        clearInputFields();
    })


    
    window.clearContactMessages = function () {
        localStorage.removeItem("contactMessages");
        contactList.innerHTML = "<h2>Хабарламалар</h2>";
    }
    
    window.clearInputFields = function () {
        document.getElementById("contactName").value = "";
        document.getElementById("contactEmail").value = "";
        document.getElementById("contactMessage").value = "";
    }
    
    window.deleteContactMessage = function (index) {
        let contacts = JSON.parse(localStorage.getItem("contactMessages"));
        contacts.splice(index, 1);
        localStorage.setItem("contactMessages", JSON.stringify(contacts));
        contactList.innerHTML = "<h2>Хабарламалар</h2>";
        loadContactMessages();
    }
    
    loadContactMessages();
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