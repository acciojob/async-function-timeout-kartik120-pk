//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const textInput = document.getElementById("text").value;
    const delayInput = parseInt(document.getElementById("delay").value, 10);
    const outputDiv = document.getElementById("output");
    
    outputDiv.textContent = ""; // Clear previous output

    if (!textInput) {
        outputDiv.textContent = "Please enter a message.";
        return;
    }

    if (isNaN(delayInput) || delayInput < 0) {
        outputDiv.textContent = "Please enter a valid delay time.";
        return;
    }

    outputDiv.textContent = "Waiting...";
    
    await new Promise(resolve => setTimeout(resolve, delayInput));
    
    outputDiv.textContent = textInput;
});