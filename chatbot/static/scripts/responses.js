function getBotResponse(input) {
    // rock paper scissots
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Hope to see you soon!";
    } else {
        return "Try asking something else!";
    }
}