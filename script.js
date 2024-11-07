// Get elements
var chatBox = document.getElementById("chat-box");
var userInput = document.getElementById("user-input");
// Function to add a message to the chat
function addMessage(message, isUser) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", isUser ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
// Function to handle user input
function sendMessage() {
    var message = userInput.value.trim();
    if (message) {
        addMessage(message, true); // Display user message
        userInput.value = ""; // Clear input
        setTimeout(function () { return botResponse(message); }, 1000); // Respond after delay
    }
}
// Bot response function
function botResponse(userMessage) {
    var botReply = "sorry! I cant assist you today! developers are working on me";
    // Simple conditions for responses
    if (userMessage.toLowerCase().includes("hello")) {
        botReply = "Hello! How can I assist you today?";
    }
    else if (userMessage.toLowerCase().includes("help")) {
        botReply = "Sure! How can I help you?";
    }
    else if (userMessage.toLowerCase().includes("bye")) {
        botReply = "Goodbye! Have a great day!";
    }
    else if (userMessage.toLowerCase().includes("what is web development")) {
        botReply = "Its the process of building websites";
    }
    else if (userMessage.toLowerCase().includes("bye")) {
        botReply = "Goodbye! Have a great day!";
    }
    addMessage(botReply, false); // Display bot message
}
