// JavaScript to handle button click event
document.getElementById("startConversationBtn").addEventListener("click", function() {
    // Get the user's phone number from the input field
    var userNumber = document.getElementById("userNumber").value;

    // Check if the userNumber is empty
    if (userNumber.trim() === "") {
        // Display an error message or take appropriate action for an empty input
        alert("Please enter a phone number.");
        return; // Stop further processing
    }

    // Construct the WhatsApp URL with the user's phone number and a default message
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + userNumber + "&text=This%20conversation%20starts%20using%20EasyWA.com";

    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappURL, '_blank');
});

// Define language-specific text
const languageText = {
    english: {
        placeholder: "Enter a phone number",
        buttonText: "Start Conversation",
        englishTextVisible: "block",
        spanishTextVisible: "none"
    },
    spanish: {
        placeholder: "Ingrese un número de teléfono",
        buttonText: "Iniciar Conversación",
        englishTextVisible: "none",
        spanishTextVisible: "block"
    }
};

// JavaScript to handle language toggle
document.getElementById("englishBtn").addEventListener("click", function() {
    // Update input placeholder text and button text for English
    const englishLanguage = languageText.english;
    document.getElementById("userNumber").setAttribute("placeholder", englishLanguage.placeholder);
    document.getElementById("startConversationBtn").textContent = englishLanguage.buttonText;

    // Show/hide paragraphs based on language selection
    document.getElementById("englishText").style.display = englishLanguage.englishTextVisible;
    document.getElementById("spanishText").style.display = englishLanguage.spanishTextVisible;
});

document.getElementById("spanishBtn").addEventListener("click", function() {
    // Update input placeholder text and button text for Spanish
    const spanishLanguage = languageText.spanish;
    document.getElementById("userNumber").setAttribute("placeholder", spanishLanguage.placeholder);
    document.getElementById("startConversationBtn").textContent = spanishLanguage.buttonText;

    // Show/hide paragraphs based on language selection
    document.getElementById("englishText").style.display = spanishLanguage.englishTextVisible;
    document.getElementById("spanishText").style.display = spanishLanguage.spanishTextVisible;
});

