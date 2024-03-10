function showPrompt() {
    fetch('messages/3-8-24.txt') // Replace 'message.txt' with the path to your text file
        .then(response => response.text())
        .then(data => {
            document.getElementById("message").innerText = data;
            document.getElementById("overlay").style.display = "block";
        })
        .catch(error => console.error('Error fetching message:', error));
}

function closePrompt() {
    document.getElementById("overlay").style.display = "none";
}

function loadMessage(date) {
    fetch('messages/' + date + '.txt') // Adjust the path as needed
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Update the message box with the content of the text file
            document.getElementById("message").innerText = data;
            // Show the message box
            document.getElementById("overlay").style.display = "block";
        })
        .catch(error => console.error('Error fetching message:', error));
}