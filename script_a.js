const registeredCredentials = {};
let eventIdCounter = 1;

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("eventIdError").textContent = "";

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/; // Assumes 10-digit phone numbers
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Invalid phone number.";
        isValid = false;
    }

    if (registeredCredentials[email]) {
        document.getElementById("emailError").textContent = "Email is already registered.";
        isValid = false;
    }

    if (isValid) {
        // Add the credentials to the registered credentials object
        const eventId = `ER-${String(eventIdCounter).padStart(6, '0')}`;
        let EventId = document.getElementById("eventId");
        EventId.value = eventId;
        EventId.style.color = "black";

        // Add the credentials to the registered credentials object
        registeredCredentials[email] = {
            name: name,
            phone: phone,
            eventId: eventId
        };

        // Show the spinner and success message
        document.getElementById("success-message").style.display = "block";

        // Add a slight delay to the spinner animation
        setTimeout(function() {
            document.querySelector(".spinner").classList.add("animate");
        }, 500);

        // Wait for 4 seconds before navigating to the event page
        setTimeout(function() {
            window.location.href = "event.html";
        }, 4000);

        eventIdCounter++;

    }

});
